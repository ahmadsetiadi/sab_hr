from flask import Flask, request, jsonify
import numpy as np
import cv2
from simple_facerec import SimpleFacerec
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS for all domains (development only)
CORS(app)

# Load the face recognition model
sfr = SimpleFacerec()
sfr.load_encoding_images("images/")

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Convert the image to a format OpenCV can work with
    img_array = np.frombuffer(file.read(), np.uint8)
    frame = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

    # Detect faces and recognize names
    face_locations, face_names = sfr.detect_known_faces(frame)

    # Prepare the response
    results = []
    for face_loc, name in zip(face_locations, face_names):
        # Convert face_loc (which is likely a NumPy array) to a list
        results.append({
            'location': face_loc.tolist(),  # Convert to list
            'name': name
        })

    return jsonify(results)

if __name__ == '__main__':
    app.run(host='192.168.1.41', port=3400, debug=True)
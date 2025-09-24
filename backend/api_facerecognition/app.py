from flask import Flask, request, jsonify
import numpy as np
import cv2
import base64
import os
from simple_facerec import SimpleFacerec
from flask_cors import CORS

app = Flask(__name__)

# Configure CORS options
cors_options = {
    "origins": "*",  # Allow all origins (replace with your frontend URL in production)
    "methods": ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    "supports_credentials": True,  # Allow credentials (cookies, authorization headers, etc.)
    "max_age": 21600  # Optional: specify how long the results of a preflight request can be cached
}

# Allow CORS for all domains (development only)
CORS(app, **cors_options)

# Load the face recognition model
sfr = SimpleFacerec()
sfr.load_encoding_images("/usr/src/app/python/images/")

@app.route('/upload', methods=['POST'])
def upload_image():
    # print("Upload endpoint called")  # Debug: Endpoint diakses
    if 'file' not in request.files:
        print("No file part in the request")  # Debug: Tidak ada file
        return jsonify({'error': 'No file part'}), 400

    # print("try select file");
    file = request.files['file']
    if file.filename == '':
        print("No selected file")  # Debug: Tidak ada file yang dipilih
        return jsonify({'error': 'No selected file'}), 400
    
    # print("try select image");
    # Convert the image to a format OpenCV can work with
    img_array = np.frombuffer(file.read(), np.uint8)
    # print("Image read from file")  # Debug: Gambar dibaca
    frame = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

    print("try select face");
    # # Detect faces and recognize names
    face_locations, face_names = sfr.detect_known_faces(frame)
    print(f"Detected faces: {face_locations}, Names: {face_names}")  # Debug: Wajah terdeteksi

    print("try select result");
    # Prepare the response
    results = []
    for face_loc, name in zip(face_locations, face_names):
         results.append({
             'location': face_loc.tolist(),  # Convert to list
             'name': name
         })
    # results.append({  'location': [], 'name': 'Adi'  })
    print("Response prepared")  # Debug: Respon disiapkan
    return jsonify(results)


@app.route('/upload-profile', methods=['POST'])
def upload_profile():
    """
    Terima JSON body { "image": "data:image/jpeg;base64,...." }
    Simpan ke file, decode ke numpy array, lalu proses face recognition
    """
    print("a1");
    data = request.get_json()
    if not data or 'image' not in data or 'username' not in data:
        return jsonify({'error': 'Missing image or username'}), 400

    print("a2");
    image_b64 = data['image']
    username = data['username'].strip()
    print("a3");
    if not username:
        return jsonify({'error': 'Invalid username'}), 400
    print("a4");
    # Hapus prefix data:image/jpeg;base64,
    image_b64 = image_b64.split(",")[1] if "," in image_b64 else image_b64
    print("a5");
    try:
        # Decode base64 ke bytes
        img_bytes = base64.b64decode(image_b64)
        print("a6");
        filename = f"usr/src/app/python/images/{username}.jpg"
        print("a7");
        # Overwrite file jika sudah ada
        with open(filename, "wb") as f:
            f.write(img_bytes)
        print("a8");
        return jsonify({
            'status': 'success',
            'file': filename,
            'username': username
        })

    except Exception as e:
        print("err")
        print(str(e))
        return jsonify({'error': str(e)}), 500
        
@app.route('/api/data', methods=['GET'])
def get_data():
    # Contoh data yang akan dikembalikan
    data = {
        'message': 'Hello, World Python!',
        'status': 'success',
        'data': {
            'item1': 'Value 1',
            'item2': 'Value 2',
            'item3': 'Value 3'
        }
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2000, debug=True)
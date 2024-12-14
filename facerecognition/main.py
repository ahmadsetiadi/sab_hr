import cv2
from simple_facerec import SimpleFacerec

sfr = SimpleFacerec()
sfr.load_encoding_images("images/")

cap = cv2.VideoCapture(0)
scale_factor = 0.1 

while True:
    ret, frame = cap.read()

    face_locations, face_names = sfr.detect_known_faces(frame) #detect faces
    for face_loc, name in zip(face_locations, face_names):
        y1, x1, y2, x2 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]
        #top, left, bottom, right = face_loc[0], face_loc[1], face_loc[2], face_loc[3]
        
        cv2.putText(frame, name,(x1, y1 - 10), cv2.FONT_HERSHEY_DUPLEX, 1, (0, 0, 200), 2)
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0,0,200), 2 ) 

    cv2.imshow("Frame", frame)
    # height, width = frame.shape[:2]
    
    # # Calculate the new dimensions
    # new_width = int(width * scale_factor)
    # new_height = int(height * scale_factor)
    
    # # Resize the frame to smaller dimensions
    # small_frame = cv2.resize(frame, (new_width, new_height), interpolation=cv2.INTER_LINEAR)
    
    # # Scale it back to the original size or larger
    # big_frame = cv2.resize(small_frame, (width, height), interpolation=cv2.INTER_NEAREST)
    
    # # Display the resulting frame
    # cv2.imshow('Big Pixels', big_frame)

    key = cv2.waitKey(1)
    if key == 27:
        break

cap.release()
cap.destroyAllWindows()
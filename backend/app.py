from flask import Flask,request,jsonify,send_file
import cv2,os
from flask_cors import CORS
from prediction import pred

app = Flask(__name__)
CORS(app)

@app.route('/classify' ,methods=["POST"])
def index():

    if 'image' not in request.files:
        return jsonify(error='No image file ssprovided.')
    

    image = request.files['image']
    image_path = "a.jpg"
    image.save(image_path)
    im=cv2.imread(image_path)
    label=pred(image_path)
    grayscale_image_akshay = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    print(im.shape)    

   
    print(type(image))
    res={"label":label}
    IMAGE_PATH="abc.jpg"
    return send_file(IMAGE_PATH, mimetype='image/jpeg')
    # return res

@app.route('/get_image')
def get_image():
    # Replace 'path/to/your/image.jpg' with the actual path to your image file
    image_path = 'abc.jpg'
    return send_file(image_path, mimetype='image/jpg')

if __name__ == '__main__':
    app.run()

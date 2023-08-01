import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageReceiverComponent = () => {
  const [imageSrc, setImageSrc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the image from Flask backend
    fetch('http://localhost:5000/get_image')
      .then((response) => response.blob())
      .then((blob) => {
        setImageSrc(URL.createObjectURL(blob));
      });
  }, []);

  const handleSeeResult = () => {
    // Navigate to the "result" route with the received image as props
    navigate('/result', { state: { imageSrc } });
  };

  return (
    <div>
      <h1>Image Receiver Component</h1>
      {imageSrc && (
        <div>
          {/* <img src={imageSrc} alt="ReceivedImage" /> */}
          <button onClick={handleSeeResult}>See Result</button>
        </div>
      )}
    </div>
  );
};

export default ImageReceiverComponent;

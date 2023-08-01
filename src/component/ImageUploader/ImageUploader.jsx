import React, { useContext, useState } from 'react'
import "./ImageUploader.css"
import flaskContext from '../../Context/FlaskContext';
import { useNavigate  } from "react-router-dom";


const ImageUploader = () => {

    let navigate = useNavigate ();

    const context = useContext(flaskContext)
    const { CallAPI } = context
    
   




    const [selectedImage, setSelectedImage] = useState(null);

    const [imagePreview, setImagePreview] = useState(null);
    // eslint-disable-next-line
    const [imageState, setimageState] = useState(true);
    
    const [imageURL, setImageURL] = useState("");

    const AISend = async () => {
        const blob = await CallAPI(selectedImage)
        setImageURL(URL.createObjectURL(blob));

        const processedImageSrc = URL.createObjectURL(blob);
        navigate('/result', { state: { processedImageSrc } });
        

    }



    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <section className='h-wrapper'>
            <div className="h-container">

                {/* cont-1 */}

                <div className="t-container">

                    <h1 className='h-text'>Deep Learning Based Gender Recognizer</h1>
                </div>


                {/* cont-2 */}

                <div className="i7">

                    <div className="i3">

                        <div className="i4">
                            <div className="">
                                <button className='button'>Upload Image &gt;&gt;</button>

                            </div>

                            <div className="i6">

                                <div >
                                    {imageState && <input className="input" type="file" accept="image/*" onChange={handleImageChange} />}


                                </div>


                                <div className="child">
                                    {selectedImage && imagePreview && (


                                        <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px' }} />

                                    )}

                                </div>

                            </div>

                        </div>

                        <div className="i5">
                            {selectedImage && imagePreview && <button onClick={AISend}>Click for AI-Check Results</button>}

                        </div>

                    </div>

                </div>
               

                {imageURL && <img src={imageURL} alt="FetchedImage" />}
            </div>

        </section>
    )
}

export default ImageUploader

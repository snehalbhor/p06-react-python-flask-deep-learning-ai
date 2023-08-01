import React from 'react'
import { useLocation } from 'react-router-dom';
import "./ResultPage.css"



const ResultPage = () => {

  const location = useLocation();

  const processedImageSrc = location?.state?.processedImageSrc || '';

  return (
    <div className='result'>
      <h2 className='r-text'>Artificial Intelligence -- Result</h2>
      <div className="image">
        <img src={processedImageSrc} alt="Processed Image2" />


      </div>

    </div>
  )
}

export default ResultPage

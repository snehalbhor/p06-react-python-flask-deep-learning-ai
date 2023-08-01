
import './App.css';
import FlaskState from './Context/FlaskState';
import ImageUploader from './component/ImageUploader/ImageUploader';
import ResultPage from './component/ResultPage/ResultPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>

      <FlaskState>
        
        <Router>
         
          
          <div className="container">
            <Routes>
              <Route path="/result" element={<ResultPage />} />
              <Route path="/" element={<ImageUploader />} />
              
            </Routes>
          </div>
        </Router>

      </FlaskState>


    </div>
  );
}

export default App;

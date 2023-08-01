import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ImageReceiverComponent from './ImageReceiverComponent';
import ImageDisplayComponent from './ImageDisplayComponent';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/result">Result</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ImageReceiverComponent />} />
          <Route path="/result" element={<ImageDisplayComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

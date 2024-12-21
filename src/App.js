import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import from react-router-dom v6
import LandingPage from './pages/landing-page';
import DownloadPage from './pages/download';  // Update the filename to 'download.js'

function App() {
  return (
    <Router>
      <div className="container">
        {/* Routes setup in React Router v6 */}
        <Routes>
          {/* Define route for landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Define route for download page */}
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

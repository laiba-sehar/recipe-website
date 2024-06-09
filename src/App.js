import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Ensure correct imports
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import MainPage from './components//mainpage/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>  {/* Ensure using Routes instead of Switch */}
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

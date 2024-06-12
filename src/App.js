import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import MainPage from './components/mainpage/MainPage';
import Chinese from './components/chinese/Chinese';
import Italian from './components/italian/Italian';
import ChineseRecipes from './components/recipe-detail/ChineseRecipes';
import Thaii from './components/thaii/Thaii';
import ThaiRecipe from './components/recipe-detail/ThaiRecipe';
import ItalianRecipe from './components/recipe-detail/ItalianRecipe';
import PakistanRecipe from './components/recipe-detail/PakistanRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/recipe/:id" element={<PakistanRecipe />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/chinese-recipe/:id" element={<ChineseRecipes/>}/>
          <Route path="/thai" element={<Thaii />} />
          <Route path="/Thai-recipe/:id" element={<ThaiRecipe/>}/>
          <Route path="/italian" element={<Italian />} />
          <Route path="/italian-recipe/:id" element={<ItalianRecipe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

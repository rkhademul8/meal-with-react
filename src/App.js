import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MealDetail from './components/MealDetail/MealDetail';


function App() {
  return (
    <div className="App">
      {/* <Restaurant></Restaurant> */}
 
    <BrowserRouter>
    <Header></Header>
      <Routes>
          <Route  path='/' element={<Restaurant />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/mealdetail/:mealId' element={<MealDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

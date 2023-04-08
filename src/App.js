import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './component/NavbarComp';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
        <NavbarComp />
   
      <Routes>

     
     

      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      
     
     
   

      </Routes>
      <Footer />
     
    </BrowserRouter>
    </div>
   
  );
}

export default App;


import './App.css';
import Footer from './components/body/footer/footer';
import Nav from './components/body/nav/nav';
import AboutUs from './components/aboutUs/aboutUs.jsx';
import Home from './components/home page/home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [active, setActive] = useState("home");
  return (
    <>
     <BrowserRouter>

    <Nav active ={active} setActive = {setActive} />
  {/* <AboutUs/> */}
  <Routes>

  <Route index element={<Home />} />
  <Route  path="aboutUs" element={<AboutUs />} />
  <Route path = "services" element={<AboutUs/>}/>
  <Route path = "brands" element={<AboutUs/>}/>
  <Route path = "contactUs" element={<AboutUs/>}/>
  <Route path = "services" element={<AboutUs/>}/>
  <Route path = "blog" element={<AboutUs/>}/>
  
  </Routes>
  <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;

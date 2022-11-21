
import './App.css';
import About from './components/about-breif/about';
import Applynow from './components/applynow/applynow';
import Carousel from './components/banner/Carousel';
import BusinessServies from './components/businessServies/businessServies';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';

function App() {
  return (
    <>
      <header>
          <Nav/>
          <Carousel/>
      </header>
      <About/>
      <Features/>
      <BusinessServies/>
      <Applynow/>
      <Footer/>
    </>
  );
}

export default App;

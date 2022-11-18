
import './App.css';
import About from './components/about-breif/about';
import Applynow from './components/applynow/applynow';
import Banner from './components/banner/banner';
import BusinessServies from './components/businessServies/businessServies';
import Features from './components/features/features';
import Nav from './components/nav/nav';

function App() {
  return (
    <>
      <header>
          <Nav/>
          <Banner/>
      </header>
      <About/>
      <Features/>
      <BusinessServies/>
      <Applynow/>
    </>
  );
}

export default App;


import './App.css';
import About from './components/about-breif/about';
import Banner from './components/banner/banner';
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
    </>
  );
}

export default App;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../logo.jpg";
import './nav.css'
import {NavLink} from 'react-router-dom'

function MyNav(props) {
  
  return (
    <Navbar className='bg-trasparent navbar-m' collapseOnSelect expand="lg"  variant="light" sticky="top" >
      <Container>
        <Navbar.Brand href="#" class="ms-0">
            <img className="logo-img " src={logo} alt="logo img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <NavLink exact activeClassName="active" className={`hover-before navbar-link-m nav-link-font`} to={"/"} >HOME</NavLink>
          <NavLink  activeClassName="active" className={`hover-before navbar-link-m nav-link-font `} to={"/aboutUs"}>ABOUT US</NavLink>
          <NavLink  activeClassName="active" className={`hover-before navbar-link-m nav-link-font ` }to={"/services"} >SERVICES</NavLink>
          <NavLink  activeClassName="active" className={`hover-before navbar-link-m nav-link-font `} to={"/brands"}>BRANDS</NavLink>
          <NavLink  activeClassName="active" className={`hover-before navbar-link-m nav-link-font`}to={"/contactus"} >CONTACT US</NavLink>
          <NavLink  activeClassName="active" className={`hover-before navbar-link-m nav-link-font`} to={"/blog"} >BLOG</NavLink>
          </Nav>
          {/* <Nav>
            <Nav.Link className='nav-link-font' href="#"  onClick={()=>{
props.setIntro(true)}}>info</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
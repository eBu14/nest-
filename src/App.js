import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom"
import Home from './pages/home/home';
import Product from './pages/product/product';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import About from './pages/about/about';
import Info from './pages/info/info';
function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='navbarMenu'>  
            <Link className='basicLogo' to='/'>team.</Link>
            <div className='basicMenu'>
            <Link className='menubutton' to='/product'>Product</Link>
            <Link className='menubutton' to='/services'>Services</Link>
            <Link className='menubutton' to='/contact'>Contact</Link>
            <Link className='menubutton' to='/login'>Log in </Link>
            <Link className='signupButton' to='/signup'>Sign up</Link>
          </div>
        </div>
        <Home/>
        <Product/>
        <Services/>
        <Contact/>
        <About/>
        <Info/>
      </div>
      {/* <Routers/> */}
    </Router>

  )
}



export default App;

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
import { useContext, useEffect } from 'react';
import { ColorModeContext, TooProvider } from './provider/provider'
import { SwitchButton } from './button';
function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

function App() {

  const { darkMode, ToggleSwitch } = useContext(ColorModeContext)
  const style = {
    background: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  }
  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])

  return (
    <Router>
      <div className='App' style={style}>
        <div className='navbarMenu'>
          <Link className='basicLogo' to='/'>team.</Link>
          <div className='basicMenu'>
            <SwitchButton value={darkMode} ToggleSwitch={ToggleSwitch} />
            <Link className='menubutton' to='/product'>Product</Link>
            <Link className='menubutton' to='/services'>Services</Link>
            <Link className='menubutton' to='/contact'>Contact</Link>
            <Link className='menubutton' to='/login'>Log in </Link>
            <Link className='signupButton' to='/signup'>Sign up</Link>
          </div>
        </div>
        <Home />
        <Product />
        <Services />
        <Contact />
        <About />
        <Info />
      </div>
      {/* <Routers/> */}
    </Router>

  )
}



export default App;

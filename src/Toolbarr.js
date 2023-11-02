import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Home from "./Home";
import About from "./About"
import './Footer.css'
import Signup from './Signup';
import Login from './Login';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link,Route,Routes} from "react-router-dom"

function Toolbarr() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         
          
          <Button className='link'><Link to="/login" >Login</Link></Button>
        </Toolbar>
        <ul className='link'>
          <li><Link to="/" >Home</Link>
         <Link to="/about"  className='secondlink'>About</Link>
         <Link to="/signup"  className='thirdlink'>Signup</Link></li>
         
         
        </ul>

      </AppBar>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   
   </Routes>
    </Box>
  );
}
export default Toolbarr

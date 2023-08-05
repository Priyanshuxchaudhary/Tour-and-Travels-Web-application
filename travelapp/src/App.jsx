import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Package1 from './components/Package1'
import Admin from './components/Admin'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { auth } from './firebase'

function App() {

  const [userName,setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName()
      }
      console.log(user);
    });
  },[]);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Package1" element={<Package1/>} />
          <Route path="/admin" element={<Admin/>}/>
          

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import "./App.scss"
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

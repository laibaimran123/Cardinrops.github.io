import React from 'react'
import Category from './components/Category'
import Hero from './components/Hero'
import "./App.css"
import Nav from './components/Nav'
const App = () => {
  return (
    <>
   <Nav home= {"Home"} about={"About"} ser ={"Services"} cate ={"Category"} con={"Contact Us"}/>
      <Hero/>
      <Category/>
    </>
  )
}

export default App

  




































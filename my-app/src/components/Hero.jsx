import React from 'react'
import Card from './Card.jsx'
import { CardDetail } from './Card.js'

const Hero = () => {
  return (
    <>
   <center> <h1>HERO SECTION</h1></center>
      <div className='d-flex'>

        {CardDetail.map((a) => {
          return (

            <Card title={a.title} img={a.img}
              descrip={a.detail} />


          )
        })}


    

        {CardDetail.map((a) => {
          return (

            <Card title={a.title} img={a.img}
              descrip={a.detail} />


          )
        })}


      </div>
    </>
  )
}

export default Hero

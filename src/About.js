import React from 'react'
import MutiplePizzas from './photos/multiplePizzas.jpeg';
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MutiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
                Here we serve pizza's according to people's taste where their 
                taste buds dance like Michael Jackson when they see our variety 
                of Pizzas . The way we do things are open to all as you can see 
                how we make and the spieces we use of homestyle* . Once of the 
                fine good delicious pizzas can be found here . Also we provide 
                24 hours delivery with loction within our range . Also you can
                can excpect manu combo offers like we make for people who are 
                starving , people who likes to eat healthy , people who want to
                try variety of items at the same time . Also one of the oustanding 
                thing about our shop is you can see a neat and excellent customer
                service,also you can see the prixe are offordable to all types of
                people . Our main moto is LIVE,EAT,ENJOY 
            </p>
        </div> 
    </div> 
    )
}

export default About
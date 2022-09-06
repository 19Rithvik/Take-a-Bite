import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from './photos/pizza.jpeg';
import './Home.css';

function Home() {
    return (
      <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Welcome to Take a Bite</h1>
            <p>Pizza's according to your taste buds 😋</p>
            <Link to="/menu">
                <button>ORDER NOW</button>
            </Link>
        </div> 
      </div>
    )
  }

export default Home
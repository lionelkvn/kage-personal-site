import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
       <div className='home-left'>
            <h1>
            My name is <span>Kage</span>
            </h1>
            <h2>
            Lionel's Furry Friend.
            </h2>
            <br />
            <button><h3>Know more about me</h3></button>
        </div>
        <div className='home-right'>
            <img src="./images/kage-solo-pic.png" alt="kage-solo" className='image' />

        </div>

    </div>
  )
}

export default Home
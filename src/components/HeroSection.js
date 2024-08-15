import React from 'react';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AHEAD</h1>
      <p>Scroll below for your next hike!</p>
    </div>
  )
}

export default HeroSection

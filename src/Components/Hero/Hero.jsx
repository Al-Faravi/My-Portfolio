import React from 'react'
import './Hero.css'
import profile_img from '../../assets/faravi prof.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="profile_img"/>
      <h1>MD. Shakawat Hossain Faravi</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae
        corporis neque, quis aliquid eveniet, quidem impedit asperiores repellat dolores
        illo, fugit numquam qui odio voluptas praesentium nulla eum.</p>
      <div className="hero-action">
        <AnchorLink href="#contact" className="hero-connect anchor-link">
          Connect with me
        </AnchorLink>

        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero

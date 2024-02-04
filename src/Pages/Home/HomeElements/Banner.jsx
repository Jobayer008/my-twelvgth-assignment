import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
const Banner = () => {

  const [text] = useTypewriter({
    words:["Joy!" , "Happiness!","Lightful!","Charming!","Meaningful!"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,

})

    return (


        <div className="hero min-h-[70vh]  bg-navbarImg">
  <div className="hero-content text-center rounded-3xl bg-black bg-opacity-10">
    <div className="max-w-md">
      <h1 className="text-5xl text-[#FFFBF5] font-bold outline-4">Make Your World Full of <span className='text-red-500'>{text}</span></h1>
      <p className="py-6 text-slate-200 font-semibold">Explore the world with our travel website, your passport to adventure. Discover handpicked destinations, expert travel tips, and exclusive deals. Plan your dream vacations, from tropical getaways to cultural excursions. </p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
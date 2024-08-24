import React from 'react'

const Hero = () => {
  return (
    <div id='Home' className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
     
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
        alt="Background" 
        className="object-cover object-center w-full h-full" 
      />
      <div className="absolute inset-0 bg-black opacity-60"></div> 
    </div>

   
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-6xl font-extrabold leading-tight mb-4 animate-fadeIn">Welcome to My Portfolio</h1>
      <h2 className="text-4xl font-semibold leading-tight mb-4 animate-fadeIn">Fullstack Developer</h2>
      <p className="text-xl text-gray-300 mb-8 animate-fadeIn">Crafting scalable and high-performing web applications.</p>
      
    </div>

    
    <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-50 animate-ping"></div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-50 animate-ping"></div>
  </div>
  )
}

export default Hero

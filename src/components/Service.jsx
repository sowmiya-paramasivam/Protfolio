import React from 'react'

const Service = () => {
  return (
    <div id='Service'>
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white neon-text glitch-effect" data-text="OUR SERVICES">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="feature-card rounded-lg p-6 bg-gray-800 text-white shadow-lg transform transition-transform hover:scale-105 animate-fadeIn">
            <div className="text-5xl mb-4 text-blue-500 feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">HTML & CSS</h3>
            <p className="text-gray-300">
              Crafting responsive, accessible, and performant websites using HTML and CSS. Ensuring designs are both beautiful and functional.
            </p>
          </div>

         
          <div className="feature-card rounded-lg p-6 bg-gray-800 text-white shadow-lg transform transition-transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '1s' }}>
            <div className="text-5xl mb-4 text-green-500 feature-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">React</h3>
            <p className="text-gray-300">
              Building powerful, scalable, and component-based front-end applications using React.
            </p>
          </div>

      
          <div className="feature-card rounded-lg p-6 bg-gray-800 text-white shadow-lg transform transition-transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '2s' }}>
            <div className="text-5xl mb-4 text-green-400 feature-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">MongoDB</h3>
            <p className="text-gray-300">
              Efficient and scalable NoSQL database solutions for modern web applications.
            </p>
          </div>

         
          <div className="feature-card rounded-lg p-6 bg-gray-800 text-white shadow-lg transform transition-transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="text-5xl mb-4 text-red-500 feature-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Node.js</h3>
            <p className="text-gray-300">
              Creating efficient server-side applications and RESTful APIs using Node.js for a complete full-stack experience.
            </p>
          </div>

         
          <div className="feature-card rounded-lg p-6 bg-gray-800 text-white shadow-lg transform transition-transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
            <div className="text-5xl mb-4 text-purple-500 feature-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Advanced CSS</h3>
            <p className="text-gray-300">
              Utilizing modern CSS techniques including Flexbox, Grid, and animations to create visually stunning and responsive designs.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Service

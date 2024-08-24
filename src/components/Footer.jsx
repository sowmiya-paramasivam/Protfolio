import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10 animate-fadeIn">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center">
            
            <div className="mb-6">
              <h2 className="text-white text-2xl font-bold mb-4">My Website</h2>
              <p className="text-gray-400">Creating amazing digital experiences.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <p className="text-gray-400">&copy; 2024 My Website. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

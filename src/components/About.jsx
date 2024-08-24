import React from 'react'

const About = () => {
  return (
    <div id="About">
      <section className="pt-10 overflow-hidden bg-black text-white sm:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl animate-fadeInUp">
                Hey, I am Sowmiya
              </h2>
              <p className="max-w-lg mt-5 text-lg leading-relaxed text-gray-400 animate-fadeInUp delay-100">
                I am a passionate full-stack developer with a keen interest in creating dynamic and responsive web applications.
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 animate-blob motion-reduce:animate-none"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt="Decorative Blob"
              />
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 animate-fadeInUp delay-300"
                src="/sowmi-removebg-preview.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

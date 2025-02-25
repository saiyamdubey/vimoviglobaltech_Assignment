import React from 'react';

function Hero() {
  return (
    <section id="hero" className="h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Welcome to Our Site</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">This is a hero section.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;

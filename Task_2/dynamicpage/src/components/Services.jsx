import  { useState, useEffect } from 'react';

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image4.png?raw=true', text: 'Service 1' },
    { image: 'https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image5.png?raw=true', text: 'Service 2' },
    { image: 'https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image6.png?raw=true', text: 'Service 3' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-green-800">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">Our Services</h2>

        <div className="relative w-full max-w-2xl mx-auto mt-8">
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img src={slide.image} alt={slide.text} className="w-full h-64 object-cover rounded-lg shadow-md" />
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center mt-2">{slide.text}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">Description of {slide.text}.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <button onClick={handlePrevSlide} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button onClick={handleNextSlide} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

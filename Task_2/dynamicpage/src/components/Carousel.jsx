
import  { useState } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image4.png?raw=true', text: 'Slide 1' },
    { image: 'https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image5.png?raw=true', text: 'Slide 2' },
    { image: 'https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image6.png?raw=true', text: 'Slide 3' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="carousel" className="py-20 text-center text-amber-50 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6">Our Carousel Section</h2>
      <div className="container mx-auto p-4 flex justify-center items-center">
        <button onClick={handlePrevSlide} className="bg-red-700 hover:bg-gray-300 py-2 px-4 rounded mr-4">
          Prev
        </button>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].text} className="w-1/2 mx-4 rounded-lg shadow-md" />
        <button onClick={handleNextSlide} className="bg-green-800 hover:bg-gray-300 py-2 px-4 rounded ml-4">
          Next
        </button>
      </div>
    </section>
  );
}

export default Carousel;

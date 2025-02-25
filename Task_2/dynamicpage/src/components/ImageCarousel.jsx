import { useState } from "react";

const images = [
  "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image5.png?raw=true",
  "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/marketing.png?raw=true",
  "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/seo.png?raw=true",
  "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image4.png?raw=true",
  "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image3.png?raw=true",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel-container text-center py-8">
      <h2 className="text-3xl font-bold mb-6">Our Carousel Section</h2>
      <div className="relative w-full max-w-2xl mx-auto">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700">&lt;</button>
        <img src={images[currentIndex]} alt="Carousel Slide" className="carousel-image w-full h-64 object-cover rounded-lg shadow-lg" />
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700">&gt;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;

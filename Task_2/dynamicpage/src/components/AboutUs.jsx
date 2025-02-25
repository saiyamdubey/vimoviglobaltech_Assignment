function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-100 dark:bg-yellow-800 relative">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">About Us</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl">
          This is the about section. We are a team of professionals dedicated to providing the best services.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-8 gap-4">
          <img 
            src="https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image4.png?raw=true" 
            alt="About Image" 
            className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 rounded-lg shadow-md" 
          />
          <img 
            src="https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image5.png?raw=true" 
            alt="About Image 2" 
            className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 rounded-lg shadow-md" 
          />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 gap-4 w-full">
          <div className="bg-white dark:bg-gray-700 rounded shadow-md p-4 w-full sm:w-3/4 md:w-1/3 xl:w-1/4 text-center">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">To provide innovative solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded shadow-md p-4 w-full sm:w-3/4 md:w-1/3 xl:w-1/4 text-center">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">To be leaders in our industry.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-yellow-500 dark:from-gray-600 dark:to-gray-800 opacity-20"></div>
    </section>
  );
}

export default About;

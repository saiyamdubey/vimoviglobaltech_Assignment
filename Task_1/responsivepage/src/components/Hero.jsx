
const Hero = () => (
  <section className="relative bg-yellow-600 text-white text-center py-56 px-6">
    <div className="container mx-auto">
      <h2 className="text-5xl font-extrabold">Welcome to Task 1 Sir </h2>
      <p className="mt-4 text-lg">We provide top-notch solutions tailored to your needs.</p>
      <p className="mt-4 text-lg">Versatile coder and web developer adept at crafting robust solutions. 🚀</p>
      
      <button className="mt-6 px-24 py-3 bg-red-700  hover:bg-red-600 text-white font-semibold rounded-lg shadow-md " onClick={()=>alert("Hands UPP Sir ...")}>
        Get Started
      </button>
       <div className="flex mt-4 flex-col gap-3  items-center justify-center space-x-4 mx-auto">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 px-32 text-center  rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-green-700 text-white px-24 py-2 rounded-md font-semibold hover:bg-green-600">
            Login
          </button>
        </div>
    </div>
  </section>
);

export default Hero;
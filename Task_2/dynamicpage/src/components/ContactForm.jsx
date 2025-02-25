
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="container mx-auto p-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-lg mb-6">We`d love to hear from you! Fill out the form below and we`ll get back to you as soon as possible.</p>
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
          />
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-3 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

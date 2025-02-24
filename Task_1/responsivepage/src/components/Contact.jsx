
const ContactForm = () => (
  <section id="contact" className="bg-gray-700 py-16 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl text-white font-bold">Contact Us</h2>
      <form className="max-w-lg mx-auto mt-6 space-y-4" onSubmit={()=>alert("Message Send Sir ...")}>
        <input type="text" placeholder="Your Name" className="w-full p-3 text-amber-50 border-2 border-amber-50 rounded-lg" required />
        <input type="email" placeholder="Your Email" className="w-full text-amber-50 p-3 border-2 border-amber-50 rounded-lg" required />
        <textarea placeholder="Your Message" className="w-full p-3 text-amber-50 border-2 border-amber-50 rounded-lg" required></textarea>
        <button type="submit"  className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
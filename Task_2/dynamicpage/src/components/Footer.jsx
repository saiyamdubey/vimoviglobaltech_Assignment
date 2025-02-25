import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
        <p className="mb-4">Follow us on our social media platforms for updates and more.</p>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="#" className="hover:text-blue-500 transition-all"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-400 transition-all"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500 transition-all"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-600 transition-all"><FaLinkedin /></a>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} My Site. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

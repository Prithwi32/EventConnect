import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center p-4 bg-purple-800 text-white shadow-md"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Section */}
      <div className="text-xl font-bold text-red-500">Logo</div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#account"
          className="text-white font-medium hover:underline"
        >
          Account
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

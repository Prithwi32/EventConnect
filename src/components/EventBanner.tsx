import { motion } from "framer-motion";

const EventBanner = () => {
  return (
    <motion.div
      className="relative h-80 bg-gradient-to-r from-purple-600 to-indigo-800 flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/event-background.jpg')" }}
      ></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Panorama International Literature Festival
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Join us for a celebration of global literature!
        </p>
        <p className="text-sm md:text-md mb-6">
          <span className="font-medium">Date:</span> January 15th - 20th, 2024
          &nbsp;|&nbsp;
          <span className="font-medium">Location:</span> Virtual & Onsite
        </p>
        <motion.a
          href="#"
          className="px-6 py-3 bg-yellow-500 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 border-2 border-transparent hover:border-white"
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  );
};

export default EventBanner;

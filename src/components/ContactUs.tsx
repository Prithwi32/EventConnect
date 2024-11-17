import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section className="p-8 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-purple-900">
        Get in Touch
      </h2>
      <p className="text-lg mb-6 text-gray-700">
        We’d love to hear from you. For any inquiries or feedback, feel free to reach out.
      </p>
      
      <motion.div
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="mailto:contact@events.com"
          className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          contact@events.com
        </motion.a>
        
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <a
            href="mailto:contact@events.com"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Send us an Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

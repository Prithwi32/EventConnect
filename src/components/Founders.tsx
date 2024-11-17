import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Founders = () => {
  const founders = [
    {
      name: "Founder Name",
      image: "/founder.avif",
      position: "Founder",
      linkedin: "https://linkedin.com/in/founder",
      twitter: "https://twitter.com/founder",
      github: "https://github.com/founder",
    },
    {
      name: "Co-Founder Name",
      image: "/co-founder.jpg",
      position: "Co-Founder",
      linkedin: "https://linkedin.com/in/cofounder",
      twitter: "https://twitter.com/cofounder",
      github: "https://github.com/cofounder",
    },
  ];

  return (
    <section className="p-20 flex flex-col justify-center text-center">
      <h2 className="text-4xl font-bold mb-8 text-purple-900">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 border rounded-xl shadow-md bg-gradient-to-tr from-purple-50 via-white to-purple-100 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-purple-300 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-purple-800">
              {founder.name}
            </h3>
            <p className="text-purple-600 italic mb-4">{founder.position}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={founder.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Founders;

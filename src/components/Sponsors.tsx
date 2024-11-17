import { motion } from "framer-motion";

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", image: "/sponsor1.png" },
    { name: "Sponsor 2", image: "/sponsor2.jpg" },
    { name: "Sponsor 3", image: "/sponsor3.png" },
    { name: "Sponsor 4", image: "/sponsor4.jpg" },
    { name: "Sponsor 5", image: "/sponsor5.png" },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">
        Our Sponsors
      </h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: -300 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
          }}
        >
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.image}
              alt={sponsor.name}
              className="h-24 w-auto object-contain hover:scale-110 transition-transform"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;

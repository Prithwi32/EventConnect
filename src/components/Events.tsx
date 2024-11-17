import { motion } from "framer-motion";

const Events = () => {
  const events = [
    {
      title: "Panorama International Arts Festival",
      structure: "/timeline1.png",
      description:
        "An exciting event featuring global artists and interactive workshops.",
      link: "/form1",
    },
    {
      title: "Panorama Global Book Festival",
      structure: "/timeline1.png",
      description:
        "Join us for a celebration of literature, workshops, and author panels.",
      link: "/form2",
    },
    {
      title: "Global Nexus Series of Conferences",
      structure: "/timeline1.png",
      description:
        "A series of conferences bringing together industry leaders and innovators.",
      link: "/form3",
    },
    {
      title: "Global Vision Summit",
      structure: "/timeline1.png",
      description:
        "A summit focused on global challenges and visionary solutions.",
      link: "/form4",
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-900">
        Next Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-900">{event.title}</h3>
            <p className="text-sm my-2 text-gray-500">{event.description}</p>
            <img
              src={event.structure}
              alt={event.title}
              className="my-4 max-w-full rounded-md"
            />
            <div className="flex justify-end mt-auto">
            <a
              href={event.link}
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Register
            </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;

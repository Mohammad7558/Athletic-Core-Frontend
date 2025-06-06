import { motion } from 'framer-motion';

const PopularSports = () => {
  const sports = [
    {
      id: 1,
      name: "Running",
      icon: "🏃‍♂️",
      participants: "120M+",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      id: 2,
      name: "Cycling",
      icon: "🚴‍♀️",
      participants: "80M+",
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      id: 3,
      name: "Swimming",
      icon: "🏊‍♂️",
      participants: "60M+",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800"
    },
    {
      id: 4,
      name: "Yoga",
      icon: "🧘‍♀️",
      participants: "300M+",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      id: 5,
      name: "Weight Training",
      icon: "🏋️‍♂️",
      participants: "90M+",
      bgColor: "bg-red-100",
      textColor: "text-red-800"
    },
    {
      id: 6,
      name: "Hiking",
      icon: "🥾",
      participants: "50M+",
      bgColor: "bg-amber-100",
      textColor: "text-amber-800"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Sports & Activities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular activities in our community and join millions of enthusiasts worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {sports.map((sport) => (
            <motion.div
              key={sport.id}
              variants={item}
              whileHover={{ y: -5 }}
              className={`${sport.bgColor} rounded-xl p-6 text-center cursor-pointer transition-shadow hover:shadow-md`}
            >
              <div className="text-4xl mb-3">{sport.icon}</div>
              <h3 className="font-bold text-lg mb-1">{sport.name}</h3>
              <p className={`text-sm ${sport.textColor} font-medium`}>{sport.participants}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition hover:cursor-pointer">
            Explore All Activities
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSports;
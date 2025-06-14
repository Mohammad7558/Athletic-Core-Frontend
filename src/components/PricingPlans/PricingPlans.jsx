import { motion } from "framer-motion";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "per month",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "Community access",
      ],
      featured: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "For growing teams and businesses",
      features: [
        "Up to 20 projects",
        "Advanced analytics",
        "Priority email support",
        "API access",
        "Custom branding",
      ],
      featured: true,
      cta: "Popular Choice",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For organizations with advanced needs",
      features: [
        "Unlimited projects",
        "Premium analytics",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
      ],
      featured: false,
      cta: "Contact Sales",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5"
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Simple, Transparent <span className="text-indigo-600">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, just honest pricing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`relative rounded-xl overflow-hidden bg-white shadow-md ${
                plan.featured
                  ? "ring-2 ring-indigo-500 shadow-lg transform md:scale-[1.03] z-10"
                  : "border border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.featured ? "bg-indigo-50" : ""}`}>
                <h3
                  className={`text-xl font-bold ${
                    plan.featured ? "text-indigo-700" : "text-gray-800"
                  }`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`mt-4 flex items-baseline ${
                    plan.featured ? "text-indigo-600" : "text-gray-900"
                  }`}
                >
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-2 text-base font-medium text-gray-500">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">
                  {plan.description}
                </p>
              </div>
              <div className="px-8 pt-6 pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-5 py-2.5 border ${
                      plan.featured
                        ? "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                    } font-medium rounded-lg transition-all duration-300 shadow-sm cursor-pointer`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto border border-gray-200"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Need Custom Solutions?
            </h3>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
              We offer tailored solutions for businesses with unique requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-300 shadow-sm cursor-pointer mt-5"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
import { motion } from "framer-motion";
import { Link } from "react-router";

const SingleEventView = ({ singleEvent, handleDeleteEvent }) => {
  return (
    <div className="mt-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row w-11/12 mx-auto rounded-xl shadow-lg border border-gray-100 bg-white overflow-hidden"
      >
        <div className="relative h-64 md:h-auto md:w-1/3 overflow-hidden">
          <motion.img
            src={singleEvent?.imageUrl}
            alt={singleEvent?.eventName}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-sm">
              {singleEvent?.eventType}
            </span>
          </div>
        </div>


        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="space-y-2 mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {singleEvent?.eventName}
              </h2>
              <p className="text-sm text-gray-600">
                Hosted by{" "}
                <span className="font-medium text-gray-800">
                  {singleEvent?.creatorName}
                </span>
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-blue-50">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    DATE & TIME
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {singleEvent?.eventDate}
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-purple-50">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">LOCATION</p>
                  <p className="text-sm font-medium text-gray-800">
                    {singleEvent?.location}
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-lg bg-green-50">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">CONTACT</p>
                  <p className="text-sm font-medium text-gray-800">
                    {singleEvent?.creatorEmail}
                  </p>
                </div>
              </div>
            </div>


            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                About Event
              </p>
              <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                {singleEvent?.description}
              </p>
            </div>
          </div>


          <div className="flex flex-wrap justify-end gap-3 pt-4">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                to={`/update-event/${singleEvent?._id}`}
                className="flex items-center text-sm px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                handleDeleteEvent(singleEvent?._id, singleEvent?.eventName)
              }
              className="flex items-center text-sm px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md cursor-pointer"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.14 21H7.86a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-9 0h10"
                />
              </svg>
              Delete
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleEventView;

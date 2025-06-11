import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import AllEventSingleCard from "./AllEventSingleCard";
import nodata from "../../../src/assets/doNotFound.json";
import Lottie from "lottie-react";

const AllEvents = () => {
  const allEvents = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/all-events") {
      window.document.title = "All-Events - Athletic-Core";
    }
  }, [location.pathname]);

  return (
    <div className="mx-auto px-4 py-8">
      {allEvents.length > 0 && (
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          All Events
        </h1>
      )}

      {allEvents.length === 0 ? (
        <div className="text-center py-20 flex flex-col items-center justify-center">
          <Lottie animationData={nodata} className="max-w-md w-full h-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">No Events Found</h2>
          <p className="text-gray-500 dark:text-gray-300">
            Looks like there are no events available at the moment. Please check back later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((singleEvent) => (
            <AllEventSingleCard key={singleEvent._id} singleEvent={singleEvent} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEvents;

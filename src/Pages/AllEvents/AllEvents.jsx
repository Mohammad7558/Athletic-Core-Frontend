import React from 'react';
import { useLoaderData } from 'react-router';
import SingleFeaturedEvents from '../../components/FeaturedEvents/SingleFeaturedEvents';
import AllEventSingleCard from './AllEventSingleCard';

const AllEvents = () => {
  const allEvents = useLoaderData();

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        All Events
      </h1>

      {allEvents.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No events found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            allEvents.map(singleEvent => <AllEventSingleCard key={singleEvent._id} singleEvent={singleEvent} />)
          }
        </div>
      )}
    </div>
  );
};

export default AllEvents;

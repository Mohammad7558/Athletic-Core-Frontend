import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { useState } from 'react';
import SingleCardMyBooking from './SingleCardMyBooking';

const MyBookings = () => {
    const [myBookedEvents, setMyBookedEvents] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/my-bookings?email=${user?.email}`)
        .then(res => {
            console.log(res.data);
            setMyBookedEvents(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [user?.email])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Booked Events</h1>
            
            {myBookedEvents.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">You haven't booked any events yet.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {myBookedEvents.map(singleMyBookedEvent => (
                        <SingleCardMyBooking
                            key={singleMyBookedEvent._id}
                            singleMyBookedEvent={singleMyBookedEvent}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
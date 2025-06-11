import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import axios from "axios";
import NoEventsCreated from "../../components/NoEventsCreated/NoEventsCreated";
import SingleEventView from "./SingleEventView";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

const ManageEvents = () => {
  const location = useLocation();
  const [createdEvents, setCreatedEvents] = useState([]);
  const [loader, setLoader] = useState(true);
  const { user } = useContext(AuthContext);
  const { email } = user;

  useEffect(() => {
          if (location.pathname === "/manage-events") {
            window.document.title = "Manage-events - Athletic-Core";
          }
        }, [location.pathname]);
      
        useEffect(() => {
          window.scrollTo(0, 0)
        }, [])

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-create-events?email=${email}`)
      .then((res) => {
        setLoader(false);
        setCreatedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  const handleDeleteEvent = (id, name) => {
    Swal.fire({
      title: "Are you sure delete this event ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/delete-creator-event/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remaining = createdEvents.filter(
                (booked) => booked._id !== id
              );
              setCreatedEvents(remaining);
              toast.success(`${name} event delete successfully`);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error('Something is wrong. Try Again')
          });
      }
    });
  };

  return (
    <div className="p-4">
      {loader ? (
        <Loader />
      ) : createdEvents.length === 0 ? (
        <NoEventsCreated />
      ) : (
        createdEvents.map((singleEvent) => (
          <SingleEventView
            key={singleEvent._id}
            singleEvent={singleEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        ))
      )}
    </div>
  );
};

export default ManageEvents;

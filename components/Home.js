import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import RoomCard from "./room/RoomCard";

const Home = () => {
  const { roomList, error } = useSelector((state) => state.room);
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, []);
  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {roomList && roomList.length === 0 ? (
          <div className="alert alert-danger">No Rooms.</div>
        ) : (
          roomList.map((room) => <RoomCard room={room} key={room._id} />)
        )}
      </div>
    </section>
  );
};

export default Home;

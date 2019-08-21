import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="List Of Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;

import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
};

export default Home;

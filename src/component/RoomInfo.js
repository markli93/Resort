import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function RoomInfo({ room }) {
  const { name, roomType, images, price } = room;

  return (
    <div>
      <div className="img-container">
        <img src={images[0]} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${roomType}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </div>
  );
}

RoomInfo.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

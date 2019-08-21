import React from "react";
import RoomInfo from "./RoomInfo";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no room matched your search</h3>
      </div>
    );
  }
  return (
    <div className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <RoomInfo key={item.id} room={item} />;
        })}
      </div>
    </div>
  );
}

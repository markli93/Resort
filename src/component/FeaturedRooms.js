import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Title from "./Title";
import RoomInfo from "./RoomInfo";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <RoomInfo key={room.id} room={room} />;
    });
    return (
      <div className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </div>
    );
  }
}

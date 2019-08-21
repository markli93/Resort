import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "2 free cocktails of your choice on your first night of stay. Minimum stay: 3 nights"
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "Multiple hiking trails for you and your families to explore"
        },
        {
          icon: <FaShuttleVan />,
          title: "Shuttle Services",
          info: "Shuttle services will be provided base on request"
        },
        {
          icon: <FaBeer />,
          title: "Home Brewed Beer",
          info: "Best home brewed beer in our town"
        }
      ]
    };
  }
  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <div key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

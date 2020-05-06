import React, { Component } from 'react';
import Title from "./Title";

import { GiSoccerBall } from "react-icons/gi";
import { FaBeer, FaSwimmingPool, FaShuttleVan, FaUmbrellaBeach, FaShoppingBag } from "react-icons/fa";


class Services extends Component {
    state = {
        services: [
            {
                icon: <FaBeer />,
                title: "Bar",
                info: "Enjoy our private "
            },
            {
                icon: <FaSwimmingPool />,
                title: "Olympic-Sized Pool",
                info: "Enjoy our private "
            },
            {
                icon: <FaShuttleVan />,
                title: "24 Hour Shuttle Services",
                info: "Enjoy our private "
            },
            {
                icon: <FaUmbrellaBeach />,
                title: "Temptation Beach",
                info: "Enjoy our private "
            },
            {
                icon: <GiSoccerBall />,
                title: "Recreational Activities",
                info: "Enjoy our private "
            },
            {
                icon: <FaShoppingBag />,
                title: "Shopping Mall",
                info: "Enjoy our private "
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
};

export default Services;
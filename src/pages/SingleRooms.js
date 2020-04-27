import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

export default class SingleRooms extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            single: this.props.match.params.single,
            defaultBcg,
        };
    }

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.single);

        if (!room) {
            return (
                <div className="error">
                    <h4>Room you searched is unavailable at this time</h4>
                    <Link to="/rooms" className="btn-primary">
                        <p>Back to rooms</p>
                    </Link>
                </div>
            )
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        return (
            <Hero hero="roomsHero">
                <Banner title={`${name} room`} />
                <Link to="/rooms" className="btn-primary">
                    <p>Back to rooms</p>
                </Link>
            </Hero>
        )
    }
}

import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SingleRooms extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            single: this.props.match.params.single,
            defaultBcg: defaultBcg
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
            );
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        const [main, ...defaultImages] = images;

        return (
            <React.Fragment>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            <p>Back to rooms</p>
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

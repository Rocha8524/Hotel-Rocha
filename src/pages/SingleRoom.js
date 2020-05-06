import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        }
    };

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className="error">
                    <h4>Room you searched is unavailable at this time</h4>
                    <Link to="/rooms" className="btn-primary">
                        <p>Back to rooms</p>
                    </Link>
                </div>
            )
        };

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        const [mainImg, ...defaultImages] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            <p>Back to rooms</p>
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImages.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h4>Deatils</h4>
                            <p>{description}</p>
                        </article>
                    </div>
                </section>
            </>
        );
    }
}

import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
    return (
        <React.Fragment>
            <Hero hero="defaultHero">
                <Banner title="Luxury Rooms" subtitle="High-end luxurious rooms starting at $199 per night">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    );
};

export default Home;

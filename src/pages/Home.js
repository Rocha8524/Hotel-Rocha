import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Hero hero="defaultHero">
            <Banner title="Luxury Rooms" subtitle="High-end luxurious rooms starting at $199 per night">
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
    );
};

export default Home;

import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

// Get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {

    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    // Get unique types
    let types = getUnique(rooms, "type");

    // Add all types
    types = ["all", ...types];

    // Map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    });

    let guests = getUnique(rooms, "capacity");
    guests = guests.map((item, index) => (
        <option key={index} value={item}> {item}</option>
    ));

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* Room Type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                        className="form-control"
                        name="type"
                        id="type"
                        value={type}
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        className="form-control"
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handleChange}>
                        {guests}
                    </select>
                </div>
                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        Room Price: ${price}
                    </label>
                    <input
                        className="form-control"
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}>
                    </input>
                </div>

            </form>
        </section>
    )
}

export default RoomsFilter;
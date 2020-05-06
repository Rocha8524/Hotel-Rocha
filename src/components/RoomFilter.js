import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

// Get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = (rooms) => {

    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    // Get unique items
    let types = getUnique(rooms, "type");

    // Add all types
    types = ["all", ...types];

    // Map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select className="form-control" name="type" id="type" value={type} onChange={handleChange}>
                        {types}
                    </select>

                </div>
                {}
            </form>
        </section>
    )
}

export default RoomsFilter;
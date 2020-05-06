import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
    if (rooms.length === 0) {
        return (
            <div class="empty-search">
                <h5>
                    Unfortunatly there are no rooms that matched your search preferences
        </h5>
            </div>
        );
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item) => {
                    return <Room key={item.id} room={item} />;
                })}
            </div>
        </section>
    );
};

export default RoomsList;

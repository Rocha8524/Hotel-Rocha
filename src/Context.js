import React, { Component } from 'react';
import items from "./Data";

const RoomContext = React.createContext();

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        });
    };

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;

            let images = item.fields.images.map(images =>
                images.fields.file.url);

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    };

    getRoom = (single) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.single === single);
        return room;
    };

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    };
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
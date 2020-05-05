import React from 'react';
import loadingGif from "../images/gif/loading-gear.gif"

const Loading = () => {
    return (
        <div className="loading">
            <h5>Rooms data loading ...</h5>
            <img src={loadingGif} alt=""></img>
        </div>
    )
}

export default Loading;
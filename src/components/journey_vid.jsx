import React from "react";
import Vid from "/src/assets/bannervedio.mp4"

const  BVideo = () =>{
    return (
        <center>
        <video controls width="75%" src={Vid}></video>
        </center>
    );
}

export default BVideo;
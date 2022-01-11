import React from "react";
import "./C2api2.css";

const Api2=()=>{
    const dt= new Date();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m=dt.getMonth();
    const d=dt.getDate();
    const y=dt.getFullYear();
    const date=months[m].toLocaleString() + " " + d + " " + y;
    // const time=dt.toLocaleTimeString();
    return(
        <>
        
        <div className="set12imagediv">
        <img src="./IMAGES/image4.jpg" alt="sculpture" className="sculpture"/>
        <div className="set12paradiv">
            <h3>Catch waves with an adventure guide</h3>
            <br/>
            {/* <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well</p>
            <br/> */}
            <p><b>Travel/</b>{date}</p>

        </div>
        </div>
        </>

    );
};

export default Api2;
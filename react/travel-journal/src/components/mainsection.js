import React from "react";
import "./style.css";
export default function MainSection(props) {
    return (
        <>
            <div className="main-section">
                <img src={props.imageUrl} />
                <div className="main-section-text">
                    <div>
                        <span className="location">
                            {props.location.toUpperCase()}
                        </span>
                        <a href="{props.googleMapsUrl}" className="gray">
                            View on Google Maps
                        </a>
                    </div>
                    <h1>{props.title}</h1>
                    <h5>
                        {props.startDate} - {props.endDate}
                    </h5>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    );
}

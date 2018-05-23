import React from "react";
import "../css/title.css";

// Stateless component
const Weather = props => (
    <div className="properties">
        {props.city && props.country && <p><span className="location">Location:</span> {props.city} ,  {props.country}</p> }
        {props.temperature && <p><span className="location">Temperature:</span> {props.temperature}</p>}
        {props.humidity &&  <p><span className="location">Humidity:</span> {props.humidity}</p>}
        {props.description &&  <p><span className="location">Condition: </span>{props.description}</p>}  
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;
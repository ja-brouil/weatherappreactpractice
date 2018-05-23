import React from "react";
import "../css/title.css";

class Form extends React.Component{

    render(){
        return(
            <form onSubmit={this.props.getWeather} className="input">
                <input type="text" name="city"  placeholder="City..." className="cityinput"/>
                <span className="sep"></span>
                <input type="text" name="country"  placeholder="Country..." className="cityinput"/>
                <br />
                <br />
                <label className="radiobtn">
                    Fahrenheit 
                    <input type="radio" defaultChecked={true} value="far" name="option" className="radiobtn"/>
                </label>
                <span className="sep2"></span>
                <label className="radiobtn">
                    Celcius
                    <input type="radio" value="cel" name="option" className="radiobtn"/>
                </label>
                <br />
                <button className="submitBtn">Get Weather</button>
            </form>
        );
    }
}

export default Form;
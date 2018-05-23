import React from "react";
import "../css/title.css";

class Titles extends React.Component{

    // Title and Page information
    render(){
        return(
            <div>
                <h1 className="title">Weather Finder</h1>
                <p className="desc">Find out the weather in your region.</p>
            </div>
        );
    }
}

export default Titles;
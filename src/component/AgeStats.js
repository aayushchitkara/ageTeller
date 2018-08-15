import React, { Component } from "react";
import congrtsIcon from "../assets/congrts.png";

class AgeStats extends Component{

    timeSince(date){
        let current_time = new Date().getTime();
        let selected_time = new Date(date).getTime();
        let differance = Math.abs(current_time - selected_time);
        return `${differance} milliseconds`

    }
    render(){
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrts on {this.timeSince(this.props.date)}</h4>
                <img src={congrtsIcon} alt="congrts" className="ImgCss"/>
            </div>    
        )
    }
}

export default AgeStats;
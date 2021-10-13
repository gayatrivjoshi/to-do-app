import React from 'react'
import {MoreHorizontal} from "react-feather";
import {Clock} from "react-feather";
import "./Card.css"

function Card() {
    return (
      <div className="cards">
        <div className="card_top">
            <span className="card_title">sjfhjsdch</span>
            <MoreHorizontal />
        </div>
        <div className="card_footer">
            <p><Clock />12 Oct</p>
        </div>
        </div>
    );
}

export default Card

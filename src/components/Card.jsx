import React, { useState } from "react";
import './Card.css'


const Card = ({ question, answer, theStatus, flip, image, category }) => {
    const cardClass = `cards ${category}`;
    return (
        <button className={cardClass} onClick={flip}>
            {theStatus && image && <img src={image} alt="image" className="card-image" />}
            <h4 className={theStatus ? 'question' : 'answer'}>
                {theStatus ? question : answer}
            </h4>
        </button>
    );
};


export default Card
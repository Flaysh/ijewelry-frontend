import React from 'react';
import './JewelryBuyingView.css';

const JewelryBuyingView = props => {

    return (
        <div className="buyingView">
            <div className="buyingViewImage">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="jewelry__info">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <br/>
                <h2>Price: {props.price}$</h2>
                </div>
        </div>
    );
};

export default JewelryBuyingView;

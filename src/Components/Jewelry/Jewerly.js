import React from 'react';

import Card from '../UIElements/Card';
import './Jewelry.css';
import Button from '../UIElements/Button';

const Jewelry = props => {

    return (
        <div>
            <li className="jewelry">
                <Card className="jewelry__content">
                    <div className="jewelry__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="jewelry__info">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="jewelry__actions">
                        <h2>Price: {props.price}$</h2>
                        <Button goto={`/buy/${props.id}`}>Buy</Button>
                    </div>
                </Card>
            </li>
        </div>
    );
};

export default Jewelry;

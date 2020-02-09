import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const Button = props => {
    return ( <div>
        <Link to={props.goto} className='main-button'>{props.children}</Link>
    </div> );
}
 
export default Button;
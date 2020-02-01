import React from 'react';
import './Home.css';
import HomeDesignDesk from '../../assets/Home Design - desktop.png';
import HomeDesignMobile from '../../assets/Home Design - mobile.png';

import './Home.css';
import Button from '../UIElements/Button';

const Home = () => {
    return ( <div className="home">
       <img src={HomeDesignDesk} alt='home-design' className='homedesign-desk'/>
       <img src={HomeDesignMobile} alt='home-design' className='homedesign-mobile'/>
       <div className="home-btn">
       <Button goto='/catalog'>Let's Start</Button>
       </div>
    </div> );
}
 
export default Home;
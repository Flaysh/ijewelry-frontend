import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import JewelryBuyingView from "../jewelryBuyingView/jewelryBuyingView";
import PaymentForm from '../CreditCard/CreditCard'



import './Buy.css';

const Buy = props => {
    const [jewelry, setJewelry] = useState({});
    const {jewelryId} = useParams();


    useEffect(() => {
        axios
        .get("http://localhost:5000/api/jewelries/" + jewelryId)
        .then(res => {

          const jewel = res.data.jewelry
          console.log(jewel);

          setJewelry(jewel);
        })
        .catch(function(error) {
          // handle error
          console.error(error);
        });
      }, [])

return (<div className="buy">
        <JewelryBuyingView
          key={jewelry.id}
          id={jewelry.id}
          image={jewelry.image}
          title={jewelry.title}
          description={jewelry.description}
          price={jewelry.price}
        />
        <PaymentForm/>
        </div>
        );
}

export default Buy;
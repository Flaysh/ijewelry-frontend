import React, { useState , useEffect } from "react";

import Card from "../UIElements/Card";
import Jewelry from "../Jewelry/Jewerly";
import "./Catalog.css";
import axios from "axios";
import Button from "../UIElements/Button";

const Catalog = props => {
  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/jewelries")
    .then(res => {
      console.log(res)
      const jewels = res.data.jewelries;
      setJewelries(jewels);
    })
    .catch(function(error) {
      // handle error
      console.error(error);
    });
  }, [])


  if (jewelries.length === 0) {
    return (
      <div className="catalog center">
        <Card>
          <h2>No Jewelry found. Maybe add one?</h2>
          <Button goto='/add'>Add Jewelry</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="catalog-list">
      {jewelries.map(jewelry => (
        <Jewelry
          key={jewelry.id}
          id={jewelry.id}
          image={jewelry.image}
          title={jewelry.title}
          description={jewelry.description}
          price={jewelry.price}
        />
      ))}
    </ul>
  );
};

export default Catalog;


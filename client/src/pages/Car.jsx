import React from 'react';
import Recommendation from '../components/Recommendation';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

const Car = () => {
  const [car, setCar] = useState([]);
  const { id: carID } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/cars/${carID}`);
        setCar(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [carID]);
  return (
    <div className="oneCar">
      <div className="content">
        <img src={car?.img} alt="" />
        <h1>{car.cars_info}</h1>
        <h3 className="overview">Overview</h3>
        <p>{car.cars_description}</p>
      </div>
      <Recommendation />
    </div>
  );
};

export default Car;

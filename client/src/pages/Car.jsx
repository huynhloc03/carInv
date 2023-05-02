import React from 'react'
import Recommendation from '../components/Recommendation'
import {Link, useLocation} from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from 'react'
const Car = () => {
  const [car,setCar] = useState([])
  const location = useLocation();

  const carID = location.pathname.split("/")[2];

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get(`/car${carID}`)
        setCar(res.data);
      }catch(err){
        console.log(err);
      };
    };
    fetchData();
  },[carID]);
  return (
    <div className = "oneCar">
      <div className="content">
        <img src = {car?.img} alt =""/>
        <h1>{car.cars_info}</h1>
        <h3 className ="overview">Overview</h3>
        <p>
          {car.cars_description}
        </p>
      </div>
      <Recommendation/>
    </div>
  )
}

export default Car
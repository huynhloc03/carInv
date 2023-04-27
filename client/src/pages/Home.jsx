import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  const cars = [
    {
      id: 1,
      title: "2023 Toyota GR Supra",
      desc: "Body style: Coupe 0-60 mph: 5.1 to 6.3 seconds Bore: 3.2″ Cargo volume: 10.2 ft³ Compression ratio: 10.2 Engine cylinder configuration: Straight engine",
      img: "https://www.cnet.com/a/img/resize/83b544d968b36e5e77e8b7eec600092e87ed4394/hub/2022/09/05/1b6db5e5-bed7-4b60-bc5c-88a330792bd2/2023-toyota-supra-manual-001.jpg?auto=webp&fit=crop&height=675&width=1200",
    },
    {
      id: 2,
      title: "2023 Porsche 911",
      desc: "0-60 mph: 5 seconds Bore: 3.6 to 4″ Cargo volume: 9.3 ft³, 13.8 ft³ with seat area Compression ratio: 8.7 to 13.3 Engine cylinder configuration: Flat engine Dimensions: 178-180″ L x 73-75″ W x 50-53″ H",
      img: "https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-t-021-dsc04152-1669058415.jpg?crop=0.558xw:0.627xh;0.236xw,0.313xh&resize=640:*",
    },
    {
      id: 3,
      title: "2023 Audi A3",
      desc: "Body style: Sedan MSRP: From $35,400 Horsepower: 201 hp Engine: 2.0 L 4-cylinder Dimensions: 177″ L x 72″ W x 56″ H Cargo volume: 10.9 ft³",
      img: "https://www.forbes.com/wheels/wp-content/uploads/2022/08/2023_Audi_A3_S3_SEO_630.jpg",
    },
    {
      id: 4,
      title: "2023 lexus IS 350 f sport",
      desc: "Model: 2023 Lexus IS Horsepower: 311 hp MSRP: From $44,160 Engine: 3.5 L V6 MPG: Up to 20 city / 28 highway Cargo volume: 10.8 ft³ Engine cylinder configuration: V engine",
      img: "https://media.ed.edmunds-media.com/lexus/is-350/2022/oem/2022_lexus_is-350_sedan_f-sport_fq_oem_1_1600.jpg",
    },
  ];
  return (
    <div className='home'>
      <div className="cars">
        {cars.map((car)=>(
          <div className="car" key = {car.id}>
            <div className="img">
              <img src={car.img} alt=""/>
            </div>
            <div className="content">
              <Link className = "link" to={`/car/${car.id}`}>
              <h1>{car.title}</h1>
              </Link>
              <p>{car.desc}</p>
              <Link className = "link" to={`/car/${car.id}`}>
                <button>More info.</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  
  export default Home
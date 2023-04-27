import React from 'react'
import Recommendation from '../components/Recommendation'

const Car = () => {
  return (
    <div className = "oneCar">
      <div className="content">
        <img src="https://www.cnet.com/a/img/resize/83b544d968b36e5e77e8b7eec600092e87ed4394/hub/2022/09/05/1b6db5e5-bed7-4b60-bc5c-88a330792bd2/2023-toyota-supra-manual-001.jpg?auto=webp&fit=crop&height=675&width=1200" alt =""/>
        <h1>2023 Toyota GR Supra</h1>
        <h3 className ="overview">Overview</h3>
        <p>
          Body style: Coupe <br />
          0-60 mph: 5.1 to 6.3 seconds <br />
          Bore: 3.2″ <br />
          Cargo volume: 10.2 ft³ <br />
          Compression ratio: 10.2 <br />
          Engine cylinder configuration: Straight engine
        </p>
      </div>
      <Recommendation/>
    </div>
  )
}

export default Car
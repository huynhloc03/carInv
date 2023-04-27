import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Add =()=> {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className = "addCar">
      <div className="content">
        <input type="text" placeholder="Brand" />
        <div className="editContainer">
        <ReactQuill className = "edit" theme="snow" value={value} onChange={setValue} />
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Appending:</h1>
          <input style={{display:"none"}} type="file" id="file" name="" />
          <label className = "file" htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Append Car</button>
          </div>
        </div>
        <div className="item">
          <h1>Type of cars:</h1>
          <div className="cat">
          <input type="radio" name="cat" value="Sedan" id="Sedan"/>
          <label htmlFor="Sedan">Sedan</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="SUVs" id="SUVs"/>
          <label htmlFor="SUVs">SUVs</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="Truck" id="Truck"/>
          <label htmlFor="Truck">Truck</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="Luxury" id="Luxury"/>
          <label htmlFor="Luxury">Luxury</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="Electric" id="Electric"/>
          <label htmlFor="Electric">Electric</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="Hybrids" id="Hybrids"/>
          <label htmlFor="Hybrids">Hybrids</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="Sport cars" id="Sport cars"/>
          <label htmlFor="Sport cars">Sport cars</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './footer';

function AddPhoneScreen() {
  const [phone, setPhone] = useState({
    brand: '',
    model: '',
    color: '',
    image: '',
    os: '',
    price: '',
    processor: '',
    resolution: '',
    screenSize: '',
    storageCapacity: '',
    ram:'',camera:'',battery:''
  });

 const handleSubmit = async (event) => {
   // const response = await fetch("/mobile/",phone);
   // console.log(response);
   const ok = fetch("/mobile/", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        brand: phone.brand,
        model: phone.model,
        camera: phone.camera,
        ram: phone.ram,
        operating_system: phone.os,
        screen_size: phone.screenSize,
        resolution: phone.resolution,
        processor: phone.processor,
        storage_capacity: phone.storageCapacity,
        price: phone.price,
        color: phone.color,
        battery_life: phone.battery_life,
        image_link: phone.image, battery_life:phone.battery
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
console.log(ok)
 
// Converting to JSON
// .then(response => response.json())
 
// // Displaying results to console
// .then(json => console.log(json));
    
    console.log('Phone submitted:', phone);
    // TODO: Add phone to database or send data to backend
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPhone((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
   <div>
    <CustomNavbar />
     <div style={{width:'80%',marginLeft:'10%',marginRight:'10%',display:"flex",flexDirection:"column",justifyContent:'space-evenly'}}>
      <h1>Add a new phone</h1>
        <label style={{width:'70%',fontSize:18}}>
          Brand:</label>
          <input
           style={{height:30}}
            type="text"
            name="brand"
            value={phone.brand}
            onChange={handleInputChange}
          />
        
        <label>
          Model:
        </label>
          <input  style={{height:30}}
            type="text"
            name="model"
            value={phone.model}
            onChange={handleInputChange}
          />
        <label>
          Color:
        </label>
          <input  style={{height:30}}
            type="text"
            name="color"
            value={phone.color}
            onChange={handleInputChange}
          />
        <label>
          Camera:
        </label>
          <input  style={{height:30}}
            type="text"
            name="camera"
            value={phone.camera}
            onChange={handleInputChange}
          />
        <label>
          Ram:
        </label>
          <input  style={{height:30}}
            type="text"
            name="ram"
            value={phone.ram}
            onChange={handleInputChange}
          />
        <label>
          Image:
        </label>
          <input  style={{height:30}}
            type="text"
            name="image"
            value={phone.image}
            onChange={handleInputChange}
          />
        <label>
          Operating System:
        </label>
          <input  style={{height:30}}
            type="text"
            name="os"
            value={phone.os}
            onChange={handleInputChange}
          />
        <label>
          Price:
        </label>
          <input  style={{height:30}}
            type="text"
            name="price"
            value={phone.price}
            onChange={handleInputChange}
          />
        <label>
          Processor:
        </label>
          <input  style={{height:30}}
            type="text"
            name="processor"
            value={phone.processor}
            onChange={handleInputChange}
          />
        <label>
          Resolution:
        </label>
          <input  style={{height:30}}
            type="text"
            name="resolution"
            value={phone.resolution}
            onChange={handleInputChange}
          />
        <label>
          Screen Size:
        </label>
          <input  style={{height:30}}
            type="text"
            name="screenSize"
            value={phone.screenSize}
            onChange={handleInputChange}
          />
        <label>
          Storage Capacity:
        </label>
          <input  style={{height:30}}
            type="text"
            name="storageCapacity"
            value={phone.storageCapacity}
            onChange={handleInputChange}
          />
        <label>
          Battery Life:
        </label>
          <input  style={{height:30}}
            type="text"
            name="battery"
            value={phone.battery}
            onChange={handleInputChange}
          />
        <button  style={{height:30, width:120,alignSelf:'center', margin:10, backgroundColor:'lightblue'}} onClick={()=>{handleSubmit()}}>Add Phone</button>
      
    </div>
    <Footer />
   </div>
  );
}

export default AddPhoneScreen;
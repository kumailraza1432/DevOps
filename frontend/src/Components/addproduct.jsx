import React, { useState } from 'react';

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
   // const response = await fetch(" http://127.0.0.1/mobile/",phone);
   // console.log(response);
   const ok = fetch("http://127.0.0.1:8080/mobile/", {
     
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
    <div style={{width:'80%', height:'90vh',backgroundColor:'red',marginLeft:'10%',marginRight:'10%',marginTop:'5%',display:"flex",flexDirection:"column"}}>
      <h1>Add a new phone</h1>
        <label style={{width:'70%',fontSize:18}}>
          Brand:
          <input
           style={{marginLeft:30}}
            type="text"
            name="brand"
            value={phone.brand}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={phone.model}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={phone.color}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Camera:
          <input
            type="text"
            name="camera"
            value={phone.camera}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ram:
          <input
            type="text"
            name="ram"
            value={phone.ram}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={phone.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Operating System:
          <input
            type="text"
            name="os"
            value={phone.os}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={phone.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Processor:
          <input
            type="text"
            name="processor"
            value={phone.processor}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Resolution:
          <input
            type="text"
            name="resolution"
            value={phone.resolution}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Screen Size:
          <input
            type="text"
            name="screenSize"
            value={phone.screenSize}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Storage Capacity:
          <input
            type="text"
            name="storageCapacity"
            value={phone.storageCapacity}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Battery Life:
          <input
            type="text"
            name="battery"
            value={phone.battery}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={()=>{handleSubmit()}}>Add Phone</button>
      
    </div>
  );
}

export default AddPhoneScreen;
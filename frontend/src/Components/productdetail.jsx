import React, { useState } from "react";
import Footer from './footer'
import CustomNavbar from "./CustomNavbar";
import {Link, useLocation} from 'react-router-dom'
export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation()
  const {phone} = location.state
  console.log(phone)
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div >
      <CustomNavbar />
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        padding: "20px"
    }}>
      <div style={{ width: "700px", marginBottom: "20px" }}>
        <img 
          src={phone.image_link}
          alt="Product" 
          style={{ width: "100%", height: "100%", objectFit: "contain" }} 
        />
      </div>
      <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "flex-start", 
          alignItems: "flex-start", 
          marginBottom: "20px", 
          width: "700px"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>{phone.brand} {phone.model}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Operating System: {phone.operating_system}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Price: ${phone.price}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Camera: {phone.camera}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Ram: {phone.ram}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Processor: {phone.processor}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Screen Size:{phone.screen_size}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Storage: {phone.storage_capacity}</div>
        <div style={{ fontSize: "18px", marginBottom: "20px" }}>Resolution: {phone.resolution}</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Battery Life: {phone.battery_life}</div>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <div style={{ marginRight: "20px" }}>Quantity:</div>
          <div>
            <select value={quantity} onChange={handleQuantityChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "center", 
          alignItems: "center", 
          width: "700px"
      }}>
        <button style={{ 
            padding: "10px 20px", 
            marginRight: "20px", 
            fontSize: "18px", 
            borderRadius: "5px", 
            background: "#007bff", 
            color: "#fff",
            border: "none"
        }}>Buy Now</button>
        <button style={{ 
            padding: "10px 20px", 
            fontSize: "18px", 
            borderRadius: "5px", 
            background: "#f5c71a", 
            color: "#fff",
            border: "none"}}>Add To Cart</button>
            </div>
            </div>
            <Footer />
            </div>
  );
        }
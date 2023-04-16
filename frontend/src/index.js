import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from "./Components/cart";
import OrderList from "./Components/orderlist";
import ProductList from "./Components/productlist";
import ProductDetail from "./Components/productdetail";
import ProductListOwner from "./Components/productlistowner";
import AddProduct from './Components/addproduct';
import LoginPage from './Components/loginPage';
import SignupPage from './Components/signupPage';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
{/*       
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="admin/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}
      {/*
      User
        */}
      <Route path='/' element={<ProductList />}/>
      <Route path='/productlist' element={<ProductList />}/>
      <Route path="/product/:id" element={<ProductDetail />} />
      {/*
      admin  
      */} 
      <Route path="/admin" element={<LoginPage />} />
      <Route path="/admin/add-product" element={<AddProduct />}/>
      <Route path="/admin/my-products" element={<ProductListOwner />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


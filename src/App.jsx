import React from "react";
import { Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route
        path="/shop"
        element={<div className="text-center mt-20 text-3xl">Shop Page</div>}
      />
      <Route
        path="/about"
        element={<div className="text-center mt-20 text-3xl">About Us</div>}
      />
      <Route
        path="/contact"
        element={<div className="text-center mt-20 text-3xl">Contact Us</div>}
      />
      {/* <Route path="/" element={<Signup />} /> Default route
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account" element={<Account />} /> */}
    </Routes>

    // <div className="min-h-screen min-w-screen p-0 m-0 overflow-none">
    //   <Header />
    //   <div className="">
    //     <Footer />
    //   </div>

    //   <div className="container mx-auto mt-10">
    //     <h1 className="text-3xl font-bold text-center">Welcome to E-Shop</h1>
    //     <p className="text-center mt-4 text-gray-600">
    //       Your one-stop shop for all your needs!
    //     </p>
    //   </div>
    // </div>
  );
}

export default App;

import React from "react";
import Navbar from "./componet/Navbar";
import { Route, Routes } from "react-router";
import Buycredit from "./Pages/Buycredit";
import Result from "./Pages/Result";
import Home from "./Pages/Home";
import Footer from "./componet/Footer";


function App() {
  return (
    <div className="min-h-screen bg-slate-50 ">
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<Buycredit/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

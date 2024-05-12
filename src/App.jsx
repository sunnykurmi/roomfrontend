import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Userhome from "./components/Userhome";
import Userprofile from "./components/Userprofile";
import Userbookings from "./components/Userbookings";
import Usercreate from "./components/Usercreate";
import Bookhotel from "./components/Bookhotel";
import About from "./components/About";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookhotel/:id" element={<Bookhotel />} />
        <Route path="/user" element={<Userhome />} />
        <Route path="/user/profile" element={<Userprofile />} />
        <Route path="/user/bookings" element={<Userbookings />} />
        <Route path="/user/create" element={<Usercreate />} />
      </Routes>
    </div>
  );
}

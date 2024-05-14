import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Adminhome from "./components/Adminhome ";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import Signup from "./components/Signup";
import AdminSignup from "./components/AdminSignup";
import Userhome from "./components/Userhome";
import Userprofile from "./components/Userprofile";
import Adminprofile from "./components/Adminprofile";
import Userbookings from "./components/Userbookings";
import Usercreate from "./components/Usercreate";
import Bookhotel from "./components/Bookhotel";
import About from "./components/About";
import Confirm from "./components/Confirm";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookhotel/:id" element={<Bookhotel />} />
        <Route path="/user" element={<Userhome />} />
        <Route path="/confirm/:data/:id" element={<Confirm />} />
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/user/profile" element={<Userprofile />} />
        <Route path="/admin/profile" element={<Adminprofile />} />
        <Route path="/user/bookings" element={<Userbookings />} />
        <Route path="/admin/create" element={<Usercreate />} />
      </Routes>
    </div>
  );
}

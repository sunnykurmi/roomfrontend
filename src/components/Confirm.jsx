import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allrooms } from "../store/Actions/roomsAction";
import React, { useEffect, useState } from "react";
import { asynccurrentUser } from "../store/Actions/userActions";
import { bookRoom } from "../store/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";

function Confirm() {
    const { data, id } = useParams();
    const dispatch = useDispatch();
    const parsedData = JSON.parse(decodeURIComponent(data));

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
      });
   
      const  roomdata = useSelector((state) => state.rooms);
      let room = null; // Declare room variable outside of the loop
    
      useEffect(() => {
        dispatch(allrooms());
      }, [dispatch]);
    
      if (!roomdata) {
        return <h2>Loading...</h2>;
      }
    
      if (roomdata.data) {
        roomdata.data.forEach((element) => {
          if (element._id === id) {
            // Use _id property for comparison
            room = element;
          }
        });
      }
    
    console.log(room);
  return (
    <div>
              <div className="relative flex bg-[#004AAD] flex-wrap justify-between items-center px-4 md:px-12 global-navbar__container bg-brand brand-divider-bottom shadow-md">
        <div className="flex ">
          <a href="/">
            <img
              src="/public/stay_booker_logo.png"
              alt="site logo"
              className="site-logo__img w-[20%]"
            ></img>
          </a>
        </div>
        <ul className="list-none hidden md:flex">
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation active-link"
              href="/user"
            >
              Home
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand"></li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/user/bookings"
            >
              Bookings
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/user/profile"
            >
              Profile
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/"
            >
              Logout
            </a>
          </li>
        </ul>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="svg-inline--fa fa-bars fa-2x block md:hidden"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-testid="menu-toggle__button"
          color="#fff"
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          ></path>
        </svg>
        <div
          data-testid="hamburger-menu"
          className="bg-brand shadow-2xl z-20 hidden"
        >
          <div className="absolute right-5 top-2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="xmark"
              className="svg-inline--fa fa-xmark fa-2x "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-testid="menu-close__button"
              color="#fff"
            >
              <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              ></path>
            </svg>
          </div>
          <ul className="list-none mt-12">
            <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
              <a
                className="uppercase font-medium text-slate-100 hover-underline-animation active-link"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
              <a
                className="uppercase font-medium text-slate-100 hover-underline-animation false"
                href="/hotels"
              >
                Hotels
              </a>
            </li>
            <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
              <a
                className="uppercase font-medium text-slate-100 hover-underline-animation false"
                href="/about-us"
              >
                About us
              </a>
            </li>
            <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
              <a
                className="uppercase font-medium text-slate-100 hover-underline-animation false"
                href="/login"
              >
                Login/Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mx-2  px-4 py-52 items-center justify-center flex-col border rounded-md">
        <div className="flex items-center justify-center mb-2">
          <img className="w-[30%]" src="https://t3.ftcdn.net/jpg/05/28/57/68/360_F_528576877_j0xSafTg6D4YJutgdmx7B1cGnVflpjxS.jpg" alt="" />
        </div>
        <h1 className="text-gray-700 text-2xl font-bold">Booking Confirmed</h1>
        <p className="text-gray-600 mt-2">
          Thank you for your booking! Your reservation has been confirmed.
        </p>
        <p className="text-gray-600">
          Please check your email for the booking details and instructions for
          your stay.
        </p>
        <div className="mt-4 flex justify-center flex-wrap items-center">
          <div className="border-r-2 px-4">
            <p className="text-gray-600 text-sm">Booking ID</p>
            <span className="text-gray-600 text-sm font-bold">{parsedData.id}</span>
          </div>
          <div className="border-r-2 px-4">
            <p className="text-gray-600 text-sm">Booking Date</p>
            <span className="text-gray-600 text-sm font-bold">{currentDate}</span>
          </div>
          <div className="border-r-2 px-4">
            <p className="text-gray-600 text-sm">Hotel Name</p>
            <span className="text-gray-600 text-sm font-bold">{room?.name}</span>
          </div>
          <div className="border-r-2 px-4">
            <p className="text-gray-600 text-sm">Check-in Date</p>
            <span className="text-gray-600 text-sm font-bold">{parsedData.checkin}</span>
          </div>
          <div className="border-r-2 px-4">
            <p className="text-gray-600 text-sm">Check-out Date</p>
            <span className="text-gray-600 text-sm font-bold">{parsedData.checkout}</span>
          </div>
          <div className="border-r-2 px-4">
            <p className="text-gray-600 text-sm">Total Fare</p>
            <span className="text-gray-600 text-sm font-bold">₹{room?.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;

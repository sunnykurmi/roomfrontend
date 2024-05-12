import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccurrentUser } from "../store/Actions/userActions";
import Footer from "./Footer";


function Userbookings() {
  const dispatch = useDispatch(); // Get dispatch function
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(asynccurrentUser()); // Fetch employee data when component mounts
    // dispatch(CreateInternship());
  }, [dispatch]);

  if(!user) return null;
  const allbookings = user.roomsbooked;
  console.log(allbookings);
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
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation active-link"
              href="/user/create"
            >
              Create
            </a>
          </li>
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
    {allbookings.map((booking) => (
      <div key={booking} className="px-6 py-10 sm:px-32">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-brand truncate">
            {booking.room.name}
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Booking ID: {booking._id}
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex gap-x-2">
            <p className="flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-4 4V3m0 4v8m-4-4h8"
                ></path>
              </svg>
              Booking Date: {new Date(booking.createdAt).toLocaleDateString()}
     
            </p>
            <p className="flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 10l5 5 5-5m-5 5V3"
                ></path>
              </svg>
              Check-in: {new Date(booking.checkin).toLocaleDateString()}
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 10l5 5 5-5m-5 5V3"
                ></path>
              </svg>
              Check-out: {new Date(booking.checkout).toLocaleDateString()}

            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <p className="flex items-center">
              <span className="font-medium">Total Fare: </span>{" "}
              <span className="ml-2">₹{booking.room.price}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
<Footer />

    </div>
  );
}

export default Userbookings;

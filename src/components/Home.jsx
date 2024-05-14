import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";

import { useDispatch, useSelector } from "react-redux";
import { allrooms } from "../store/Actions/roomsAction";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.internships.data);
  const { data, loading, error } = useSelector((state) => state.rooms);

  // //(data);

  useEffect(() => {
    dispatch(allrooms());
  }, [dispatch]);

  console.log(data);
  
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
              href="/"
            >
              Home
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/"
            >
              Hotels
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/about"
            >
              About us
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/login"
            >
              User Login
            </a>
          </li>
          <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
            <a
              className="uppercase font-medium text-slate-100 hover-underline-animation false"
              href="/admin/login"
            >
              Admin Login
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
                User Login
              </a>
            </li>
            <li className="p-4 hover:bg-blue-900 md:hover:bg-brand">
              <a
                className="uppercase font-medium text-slate-100 hover-underline-animation false"
                href="/login"
              >
                Admin Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-52 text-white bg-[#004AAD]">
      <div className="hero-content__text py-4"><h3 className="text-4xl font-medium">Discover your perfect stay around the globe</h3><p className="my-1">Enter your dates to see the latest prices and begin your journey of relaxation and adventure today.</p></div>

      </div>
      <div className="my-4">
  <h2 className="text-3xl font-medium text-slate-700 text-center">Book Hotels at Popular Destinations</h2>
  <div className="flex my-4 gap-x-8 gap-y-4 justify-center flex-wrap">
    <div className="p-4 border hover:bg-slate-100 cursor-pointer" data-testid="image-card">
      <img src="/public/mumbai.jpg" className="rounded w-[120px] h-[75px]" alt="mumbai"></img>
      <h4 className="text-center">Mumbai</h4>
    </div>
    <div className="p-4 border hover:bg-slate-100 cursor-pointer" data-testid="image-card">
      <img src="/public/bangkok.jpg" className="rounded w-[120px] h-[75px]" alt="mumbai"></img>
      <h4 className="text-center">Delhi</h4>
    </div>
    <div className="p-4 border hover:bg-slate-100 cursor-pointer" data-testid="image-card">
      <img src="/public/london.jpg" className="rounded w-[120px] h-[75px]" alt="mumbai"></img>
      <h4 className="text-center">Kolkata</h4>
    </div>
    <div className="p-4 border hover:bg-slate-100 cursor-pointer" data-testid="image-card">
      <img src="/public/dubai.jpg" className="rounded w-[120px] h-[75px]" alt="mumbai"></img>
      <h4 className="text-center">Pune</h4>
    </div>
    <div className="p-4 border hover:bg-slate-100 cursor-pointer" data-testid="image-card">
      <img src="/public/oslo.jpg" className="rounded w-[120px] h-[75px]" alt="mumbai"></img>
      <h4 className="text-center">Banglore</h4>
    </div>
  </div>
</div>

<h2 className="text-3xl font-medium text-slate-700 text-center my-2">Handpicked nearby hotels for you</h2>
{data && data.map((hotel) => (
<div key={hotel} className="px-32 py-10 w-full h-fit">
<div className="card border p-4 flex flex-col md:flex-row gap-x-2 w-full" data-testid="hotel-view-card">
    <div className="cursor-pointer">
        <a className="block text-slate-700 hover:text-brand transition-colors duration-300" href="/login">
            <img src={hotel.image} alt="Varshneys Delhi HOTEL" className="md:w-[220px] md:h-[140px]"></img>
        </a>
    </div>
    <div className="flex flex-col justify-between ml-0 md:ml-2 flex-1">
        <div>
            <a className="block text-slate-700 hover:text-brand transition-colors duration-300" href="/login">
                <h4 className="text-2xl font-bold text-slate-600">{hotel.name}</h4>
            </a>
            <p className="text-slate-600 text-sm">{hotel.location} | 3.3 kms from city center</p>
        </div>
        <ul>
            <li className="text-green-800 flex gap-2 font-medium text-sm">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check w-[1%] " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                </svg>{hotel.facilities}
            </li>
            
        </ul>
    </div>

    <div className="flex flex-col ml-0 md:ml-auto justify-between border-l-0 md:border-l-2 items-stretch pl-0 md:pl-4">
        <div className="flex justify-between my-3 md:my-0 items-center md:flex-col md:justify-between w-full h-full">
            <h4 className="font-medium bg-blue-900 flex w-10 text-sm text-white bg-brand p-2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
            </h4>
            <p className="text-slate-600 font-bold whitespace-nowrap">₹ {hotel.price}</p>
        </div>
        <a href="/login">
        <button className="bg-brand-secondary px-4 py-2 bg-[#CBAE37] text-white whitespace-nowrap">Book now</button>
        </a>
    </div>
    </div>
</div>
))}
<Footer />
    </div>
  );
}

export default Home;

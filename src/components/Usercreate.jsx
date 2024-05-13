import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../store/Actions/userActions";
import { createRoom } from "../store/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";
import Footer from "./Footer";

function Usercreate() {
  const dispatch = useDispatch(); // Get dispatch function
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log(user);

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        description: '',
        facilities: '',
        image: '',
        price:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/user");
         dispatch(createRoom(formData));
        // You can add your logic here to handle form submission
        console.log(formData);
    };

    
  useEffect(() => {
    dispatch(asynccurrentUser()); // Fetch employee data when component mounts
    // dispatch(CreateInternship());
  }, [dispatch]);

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setFormValid(isFormValid);
  }, [formData]);
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
      </div> <br />
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
            <form className="p-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                     
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter hotel name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                    <input
                        type="text"
                   
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter hotel location"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <textarea
                  
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter hotel description"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="facilities" className="block text-gray-700 text-sm font-bold mb-2">Facilities:</label>
                    <input
                        type="text"
               
                        name="facilities"
                        value={formData.facilities}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter hotel facilities"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                    <input
                        type="text"
             
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="number"

                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter price"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                  disabled={!formValid}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create Hotel
                </button>
            </form>
        </div>
<Footer />

    </div>
  )
}

export default Usercreate
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

function Bookhotel() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.rooms);
  let room = null; // Declare room variable outside of the loop

  useEffect(() => {
    dispatch(allrooms());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (data) {
    data.forEach((element) => {
      if (element._id === id) {
        // Use _id property for comparison
        room = element;
      }
    });
  }

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log(room);


  const formatDate = (date) => {
    const d = new Date(date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };
  
  const todayDate = formatDate(new Date());


  const [formData, setFormData] = useState({
    checkin: formatDate(new Date()),
   checkout: "",
    rooms: "",
    guests: "",
    id: id,
    nameoncard: '',
    cardnumber: '',
    expiry: '',
    cvc: '',
    address: '',
    city: '',
    state: '',
    postalcode: '',
  });
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const serializedFormData = encodeURIComponent(JSON.stringify(formData));
    dispatch(bookRoom(formData, id));
    setTimeout(() => {
      navigate(`/confirm/${serializedFormData}/${room.id}`);
    }, 3000);
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

  console.log(formData);
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
      
      {room && (
        <div className="">
          
          <div className="w-full h-[90vh] px-32 py-20 flex gap-2 ">
            <div className="w-[70%] py-5">
              <img
                className="w-full h-full  object-cover"
                src={room.image}
                alt=""
              />
            </div>
            <div className="w-[30%]">
              <div className="mx-2 pb-5 bg-white shadow-xl rounded-xl overflow-hidden mt-2 md:mt-0 w-full md:w-[380px]">
                <div className="px-6 py-4 bg-blue-900 text-white">
                  <h2 className="text-xl font-bold">Booking Details</h2>
                </div>
                <div className="mb-4 pl-8 pt-2">
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    Total Price
                  </div>
                  <div className="text-xl font-bold text-indigo-600">
                    {room.price} INR
                  </div>
                  <div className="text-sm text-green-600">
                    Free cancellation 1 day prior to stay
                  </div>
                </div>
                <form className="pl-8 pr-8" action="">
                  
                  
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                   
                    >
                      check-in
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="rooms"
                      type="date"
                      defaultValue={Date.now()}
                      value={formData.checkin}
                      onChange={handleChange}
                      name="checkin"
                      placeholder=""
                      required=""
                      aria-invalid="false"
            
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
               
                    >
                      check-out
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="rooms"
                      type="date"
                      value={formData.checkout}
                      onChange={handleChange}
                      min={todayDate}
                      name="checkout"
                      placeholder=""
                      required=""
                      aria-invalid="false"
            
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
               
                    >
                      No. of rooms
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="rooms"
                      type="number"
                      value={formData.rooms}
                      onChange={handleChange}
                      name="rooms"
                      placeholder="Enter no. of rooms"
                      required=""
                      aria-invalid="false"
            
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
               
                    >
                      No. of Guests
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="guests"
                      type="number"
                      name="guests"
                      value={formData.guests}
                    onChange={handleChange}
                      placeholder="Enter no. of guests"
                      required=""
                      aria-invalid="false"
            
                    />
                  </div>
                                        <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                   
                        >
                          Email address
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          name="email"
                          placeholder="Email"
                          required=""
                          aria-invalid="false"
                          
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          // for="nameOnCard"
                        >
                          Name on card
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="nameOnCard"
                          type="text"
                          name="nameoncard"
                          placeholder="Name as it appears on card"
                          required=""
                          aria-invalid="false"
                          value={formData.nameoncard}
                    onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          // for="cardNumber"
                        >
                          Card number
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="cardNumber"
                          type="text"
                          name="cardnumber"
                          placeholder="0000 0000 0000 0000"
                          required=""
                          aria-invalid="false"
                          value={formData.cardnumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex mb-4 justify-between">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-xs font-bold mb-2"
                            // for="expiry"
                          >
                            Expiration date (MM/YY)
                          </label>
                          <input
                            className="shadow appearance-none border border-gray-300 rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="expiry"
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            required=""
                            aria-invalid="false"
                            value={formData.expiry}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-xs font-bold mb-2"
                            // for="cvc"
                          >
                            CVC
                          </label>
                          <input
                            className="shadow appearance-none border border-gray-300 rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cvc"
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            required=""
                            aria-invalid="false"
                            value={formData.cvc}
                    onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          // for="address"
                        >
                          Address
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="address"
                          type="text"
                          name="address"
                          placeholder="Street Address"
                          required=""
                          aria-invalid="false"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          // for="city"
                        >
                          City
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="city"
                          type="text"
                          name="city"
                          placeholder="City"
                          required=""
                          aria-invalid="false"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex mb-4 justify-between">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            // for="state"
                          >
                            State / Province
                          </label>
                          <input
                            className="shadow appearance-none border border-gray-300 rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="state"
                            type="text"
                            name="state"
                            placeholder="State"
                            required=""
                            aria-invalid="false"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            // for="postalCode"
                          >
                            Postal code
                          </label>
                          <input
                            className="shadow appearance-none border border-gray-300 rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="postalCode"
                            type="text"
                            name="postalcode"
                            placeholder="Postal Code"
                            required=""
                            aria-invalid="false"
                            value={formData.postalcode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="flex  items-center justify-between">
                     
                        <button
                    onClick={handleSubmit}
                          className="bg-blue-900 relative hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 hover:bg-blue-700"
                          type="submit"
                        >
                         {load && (
        <div className="w-full absolute h-full flex items-center justify-center top-0 left-0 z-10 text-black bg-white border-2 overflow-hidden "> <img className="w-[40%] ml-[-30px]" src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" /> Transaction in process...</div>
      )}
                          Pay ₹ {room.price} INR
                        </button>
                      </div>

               

                  
                </form>
              </div>
            </div>
          </div>

          <div className="px-32">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              {room.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {room.location} | 3.3 kms from city center
            </p>
            <div>
              <p className="text-lg text-gray-800">{room.facilities}</p>
            </div>
            <div className="mt-2 space-y-2 w-[55vw]">
              <p className="text-gray-700">{room.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4"></div>
          </div>
        </div>
      )}

      <br />
      <br />

      <p className="text-3xl font-semibold ml-32">Customer Reviews</p>
      <br />
      <div className="pl-32 w-[60vw]">
        <div>
          <div className="py-3 border-t">
            <div className="flex justify-between">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-user"
                  className="svg-inline--fa w-[8%] fa-circle-user text-2xl text-gray-300 mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  ></path>
                </svg>
                <h4 className="font-semibold text-gray-700">
                  Rahul Varshneys{" "}
                  <span className="text-xs font-medium text-green-500">
                    (Verified)
                  </span>
                </h4>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-yellow-500 text-md">5</p>
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.563 1.9-5.85L2.1 7.852l5.95-.435L10 2l2.95 5.417 5.95.435-4.85 3.563 1.9 5.85L10 12.585z"></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Date of stay: 2021-01-01</p>
            <p className="mt-2">
              The hotel is very good and the staff is very friendly. The food is
              also very good.
            </p>
          </div>
          <div className="py-3 border-t">
            <div className="flex justify-between">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-user"
                  className="svg-inline--fa w-[8%] fa-circle-user text-2xl text-gray-300 mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  ></path>
                </svg>
                <h4 className="font-semibold text-gray-700">Amaan Shahid </h4>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-yellow-500 text-md">4</p>
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.563 1.9-5.85L2.1 7.852l5.95-.435L10 2l2.95 5.417 5.95.435-4.85 3.563 1.9 5.85L10 12.585z"></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Date of stay: 2021-02-15</p>
            <p className="mt-2">
              Great hotel with excellent service. The rooms are spacious and
              clean. The staff went above and beyond to ensure a comfortable
              stay. Highly recommended!
            </p>
          </div>
          <div className="py-3 border-t">
            <div className="flex justify-between">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-user"
                  className="svg-inline--fa w-[8%] fa-circle-user text-2xl text-gray-300 mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  ></path>
                </svg>
                <h4 className="font-semibold text-gray-700">
                  Yash Kushwaha{" "}
                  <span className="text-xs font-medium text-green-500">
                    (Verified)
                  </span>
                </h4>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-yellow-500 text-md">3</p>
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.563 1.9-5.85L2.1 7.852l5.95-.435L10 2l2.95 5.417 5.95.435-4.85 3.563 1.9 5.85L10 12.585z"></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Date of stay: 2021-03-10</p>
            <p className="mt-2">
              Average hotel. The staff could be more attentive.
            </p>
          </div>
          <div className="py-3 border-t">
            <div className="flex justify-between">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-user"
                  className="svg-inline--fa w-[8%] fa-circle-user text-2xl text-gray-300 mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  ></path>
                </svg>
                <h4 className="font-semibold text-gray-700">
                  Siddhant Raghuvanshi{" "}
                </h4>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-yellow-500 text-md">5</p>
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.563 1.9-5.85L2.1 7.852l5.95-.435L10 2l2.95 5.417 5.95.435-4.85 3.563 1.9 5.85L10 12.585z"></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Date of stay: 2021-04-20</p>
            <p className="mt-2">
              Amazing experience! The hotel exceeded my expectations.
            </p>
          </div>
          <div className="py-3 border-t">
            <div className="flex justify-between">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-user"
                  className="svg-inline--fa w-[8%] fa-circle-user text-2xl text-gray-300 mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  ></path>
                </svg>
                <h4 className="font-semibold text-gray-700">
                  Malak Alsagheer{" "}
                  <span className="text-xs font-medium text-green-500">
                    (Verified)
                  </span>
                </h4>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-yellow-500 text-md">1</p>
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.563 1.9-5.85L2.1 7.852l5.95-.435L10 2l2.95 5.417 5.95.435-4.85 3.563 1.9 5.85L10 12.585z"></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Date of stay: 2021-05-05</p>
            <p className="mt-2">
              Terrible experience. The hotel was dirty and the staff was rude.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Bookhotel;

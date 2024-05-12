import React from "react";
import  Footer  from "./Footer";

function About() {
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
              Login/Register
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
      <div class="container py-20  mx-auto px-32">
        <h1 class="text-4xl font-extrabold text-blue-800 mb-2">About Us</h1>
        <p class="text-lg mb-8">
          Welcome to <span class="text-brand">VARSHNEYS</span>, where we are
          dedicated to providing you with the best experience for booking hotels
          around the world. Our mission is to make your travel comfortable,
          convenient, and memorable.
        </p>
        <h2 class="text-3xl font-extrabold text-blue-800 mb-2">Our Vision</h2>
        <p class="text-lg mb-8">
          At <span class="text-brand">VARSHNEYS</span>, we envision a world
          where every traveler finds the perfect accommodation that suits their
          needs and preferences. We aim to simplify the hotel booking process,
          offering a wide range of options for every budget.
        </p>
        <h2 class="text-3xl font-extrabold text-blue-800 mb-2">Why Choose Us?</h2>
        <ul class="list-disc ml-6 mb-8">
          <li class="text-lg mb-3">
            We offer a diverse range of hotels, from luxury resorts to cozy
            boutique stays, ensuring that you find the perfect match for your
            travel style.
          </li>
          <li class="text-lg mb-3">
            Our user-friendly interface makes it simple and quick to book your
            ideal stay. With just a few clicks, you can secure your reservation
            hassle-free.
          </li>
          <li class="text-lg mb-3">
            Our dedicated customer support team is available 24/7 to assist you
            with any inquiries or issues you may encounter during your booking
            process or stay.
          </li>
          <li class="text-lg mb-3">
            We prioritize the security of your personal information and
            transactions. Book with confidence, knowing that your data is safe
            with us.
          </li>
        </ul>
        <h2 class="text-3xl font-extrabold text-blue-800 mb-2">Contact Us</h2>
        <p class="text-lg mb-4">
          Have questions or need assistance? Feel free to reach out to our
          customer support team at{" "}
          <a
            class="text-brand hover:underline"
            href="mailto:info@staybooker.com"
          >
            info@varshneys.com
          </a>
          . We're here to help!
        </p>
        <p class="text-lg">
          Thank you for choosing <span class="text-brand">VARSHNEYS</span>. We
          look forward to being your go-to platform for all your hotel booking
          needs.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;

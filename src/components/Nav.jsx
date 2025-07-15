import { useState } from "react";
import { Link } from "react-router";

function Nav() {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    // Logic to toggle the mobile menu
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  console.log(menu);
  return (
    <div>
      <nav className="relative sm:flex sm:items-center sm:justify-between sm:px-8 py-4 bg-gray-100 shadow-md ">
        {/* Logo Section */}
        <div className="w-full px-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#000000"
              id="Chef-Hat-Thin--Streamline-Phosphor-Thin"
              height={16}
              width={16}
              className="w-8 h-8 text-orange-500"
            >
              <desc>
                {
                  "\n    Chef Hat Thin Streamline Icon: https://streamlinehq.com\n  "
                }
              </desc>
              <path
                d="M15.84 7.1278625c-0.0024 -2.083725 -1.691 -3.772325 -3.774725 -3.774725 -0.18880625 0.00041875 -0.377325 0.01473125 -0.56403125 0.04283125 -1.08625 -2.69511875 -4.68270625 -3.2036625 -6.47361875 -0.9153875 -0.218225 0.27883125 -0.39613125 0.58698125 -0.52849375 0.9153875 -0.18670625 -0.0281 -0.375225 -0.0424125 -0.56403125 -0.04283125 -2.9057875 0.00013125 -4.72193125 3.14581875 -3.268925 5.6622375 0.414125 0.71720625 1.05263125 1.27831875 1.81710625 1.59685v3.4843625c0 0.4810875 0.39 0.8710875 0.8710875 0.8710875H12.646c0.48109375 0 0.87109375 -0.39 0.87109375 -0.8710875v-3.4843625c1.40573125 -0.5872 2.32154375 -1.9609125 2.32290625 -3.4843625Zm-2.90363125 6.968725c0 0.1603625 -0.13 0.2903625 -0.29036875 0.2903625H3.35436875c-0.1603625 0 -0.2903625 -0.13 -0.2903625 -0.2903625v-3.29635c0.28541875 0.0677625 0.57774375 0.1021125 0.87109375 0.10235h8.130175c0.29335 -0.0002375 0.585675 -0.0345875 0.8710875 -0.10235Zm-0.87109375 -3.774725h-1.3705125l0.4907125 -1.95995625c0.05046875 -0.21775 -0.15370625 -0.40848125 -0.36751875 -0.3433125 -0.09581875 0.0292 -0.169825 0.1057375 -0.1957875 0.2024875l-0.52555625 2.1051375h-1.8060625v-2.0369c-0.000325 -0.223525 -0.2425 -0.36286875 -0.4359125 -0.250825 -0.0895 0.05185 -0.1446625 0.14739375 -0.1448125 0.250825v2.03254375h-1.8060625l-0.52555625 -2.1051375c-0.05588125 -0.2168125 -0.32551875 -0.29183125 -0.48534375 -0.13503125 -0.07418125 0.072775 -0.1039 0.17959375 -0.0779625 0.28021875l0.4907125 1.95995H3.9351c-2.45874375 -0.0010875 -3.994275 -2.66343125 -2.7639625 -4.79221875 0.57048125 -0.9871 1.62386875 -1.595275 2.7639625 -1.595775 0.12956875 0.0003375 0.25900625 0.0083375 0.38763125 0.02395625 -0.0645125 0.2777625 -0.09714375 0.561975 -0.09726875 0.84713125 0.000325 0.223525 0.2425 0.36286875 0.4359125 0.250825 0.0895 -0.05185 0.1446625 -0.14739375 0.1448125 -0.250825 0.0010875 -2.4587375 2.66343125 -3.994275 4.79221875 -2.7639625 0.9871 0.57048125 1.595275 1.62386875 1.59578125 2.7639625 0.000325 0.223525 0.2425 0.36286875 0.4359125 0.250825 0.0895 -0.05185 0.1446625 -0.14739375 0.1448125 -0.250825 -0.000125 -0.28515625 -0.03275625 -0.56936875 -0.097275 -0.8471375 0.12863125 -0.0156125 0.25806875 -0.0236125 0.3876375 -0.02395 2.45874375 0.0010875 3.994275 2.66343125 2.7639625 4.79221875 -0.57048125 0.9871 -1.62386875 1.59526875 -2.7639625 1.595775Z"
                strokeWidth={0.0625}
              />
            </svg>
            <h1 className="text-2xl font-bold text-orange-500 tracking-wide">
              Feastr
            </h1>
          </div>

          <button className="sm:hidden" onClick={handleMenuToggle}>
            {/* Hamburger Icon for Mobile */}
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" w-8 h-8 text-gray-800 sm:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links + Button */}
        <div
          className={`${
            menu ? "flex" : "hidden"
          } mt-4 rounded-b-2xl sm:mt-0 flex-col items-center gap-3 sm:flex sm:flex-row sm:items-center sm:gap-6 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 text-gray-700 font-medium">
            <li>
              <a
                href="#"
                className="hover:text-orange-500 hover:drop-shadow-sm hover:underline transition duration-200"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 hover:drop-shadow-sm hover:underline transition duration-200"
              >
                Favorites
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 hover:drop-shadow-sm hover:underline transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 hover:drop-shadow-sm hover:underline transition duration-200"
              >
                +Recipe
              </a>
            </li>
          </ul>
          <Link to="/Login"><button className="px-4 py-1 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition duration-200" onClick={()=>{
            setMenu(false)
          }}>
            Login
          </button></Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Nav;

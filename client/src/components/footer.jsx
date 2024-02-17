import React from "react";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <AdbRoundedIcon />
            <h1 className="text-white text-xl font-bold ">Hunger</h1>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400 text-white">
                  {" "}
                  {/* Added text-white class */}
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-white">
                  {" "}
                  {/* Added text-white class */}
                  About
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-gray-400 text-white">
                  {" "}
                  {/* Added text-white class */}
                  Services
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-white">Contact Us</h2>
            <p className="text-white">
              {" "}
              {/* Added text-white class */}
              IIIT Kota
              <br />
              Kota, Rajasthan, 325003
              <br />
              Phone: 123-456-7890
              <br />
              Email: hunger@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col items-center">
          <p className="text-white">&copy; 2024 Hunger. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              {/* SVG icon */}
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              {/* SVG icon */}
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              {/* SVG icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
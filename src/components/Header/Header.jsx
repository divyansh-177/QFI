import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt,FaEnvelope, FaClock, FaAngleDown, FaDownload, FaBars } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header header-style-three bg-white shadow">
      {/* Header Upper */}
      <div className="header-upper py-4 border-b bg-gray-50">
        <div className="auto-container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            {/* Logo */}
            <div className="logo-outer">
              <Link to="/">
                <img src="./../../public/logo.jpeg" alt="Logo" className="h-28 w-40" />
              </Link>
            </div>

            {/* Info Boxes */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm text-gray-700">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-orange-600 text-xl" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div>Plot No.78, HSIDC, Hisar Road, Rohtak</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
              
                <FaPhoneAlt className="text-orange-600 text-xl" />
                <div>
                  <div className="font-semibold">CALL US</div>
                  <a href="tel:7056720653" className="text-blue-600 hover:underline">+(91)-7056720653</a> 
                  <br />
                  <a href="tel:8053500556" className="text-blue-600 hover:underline">+(91)-8053500556</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
              
                <FaEnvelope className="text-orange-600 text-xl" />
                <div>
                  <div className="font-semibold">MAIL US</div>
                  <a href="mailto:qualityfastenersindia@gmail.com" className="text-blue-600 hover:underline">qualityfastenersindia@gmail.com</a> 
                  </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-orange-600 text-xl" />
                <div>
                  <div className="font-semibold">TIMING</div>
                  <div>Mon - Sat: 10am - 6pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower */}
      <div className="header-lower bg-white">
        <div className="auto-container max-w-screen-xl mx-auto px-4">
          <div className="nav-outer flex justify-between items-center py-3">
            {/* Toggle Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
              <FaBars />
            </button>

            {/* Main Menu */}
            <nav className={`main-menu ${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-700 font-medium bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg shadow lg:shadow-none">
                <li><Link to="/" className="hover:text-orange-700 transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-orange-700 transition">About Us</Link></li>

                <li className="relative group">
                  <span className="flex items-center cursor-pointer hover:text-orange-700 transition"><Link to="/products" className="hover:text-orange-700 transition">Our Products</Link></span>
                  <div className="absolute left-0 top-full bg-white shadow-lg hidden group-hover:block z-50 w-screen max-w-4xl mt-2 border rounded">
                    
                  </div>
                </li>

                <li><Link to="/enquiry" className="hover:text-orange-700 transition">Enquiry</Link></li>
                <li><Link to="/contact" className="hover:text-orange-700 transition">Contact Us</Link></li>
                <li>
                  <a
                    href="./../../public/QFI PROFILE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-orange-700 transition"
                  >
                    <FaDownload className="mr-1" /> Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/AVT_Fastners_2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-orange-700 transition"
                  >
                    <FaDownload className="mr-1" /> Catalouge
                  </a>
                </li>
              </ul>
            </nav>

            {/* Quote Button */}
            <div className="btn-outer hidden lg:block">
              <Link to="/enquiry" className="bg-orange-700 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-800 transition">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
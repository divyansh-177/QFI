import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaAngleDown, FaDownload, FaBars, FaInfoCircle } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);

  // Close menus when clicking outside
  React.useEffect(() => {
    const closeMenus = (e) => {
      if (!e.target.closest('.nav-outer')) {
        setMenuOpen(false);
      }
      if (!e.target.closest('.info-menu-container')) {
        setInfoMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenus);
    return () => document.removeEventListener('click', closeMenus);
  }, []);

  return (
    <header className="main-header header-style-three bg-white shadow">
      {/* Header Upper */}
      <div className="header-upper py-4 border-b bg-gray-50">
        <div className="auto-container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo and Mobile Info Button */}
            <div className="flex items-center justify-between w-full lg:w-auto info-menu-container">
              <div className="logo-outer">
                <Link to="/">
                  <img src="qfi.jpeg" alt="Logo" className="h-20 w-32 lg:h-28 lg:w-40" />
                </Link>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setInfoMenuOpen(!infoMenuOpen);
                }}
                className="lg:hidden text-2xl p-2 hover:text-orange-600 transition-colors relative"
                aria-label="Toggle info menu"
              >
                <FaInfoCircle className={`transform transition-transform ${infoMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Info Boxes - Mobile and Desktop */}
            <div className={`${infoMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0 space-y-4 lg:space-y-0 lg:gap-6 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg shadow-lg lg:shadow-none border-t lg:border-t-0 text-sm text-gray-700`}>
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
                  <br />
                  <a href="mailto:qualityfastenersindiasales@gmail.com" className="text-blue-600 hover:underline">qualityfastenersindiasales@gmail.com</a>
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
          <div className="nav-outer flex items-center py-3 relative">
            {/* Toggle Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }} 
              className="text-2xl hover:text-orange-600 transition-colors mr-4 lg:hidden"
              aria-label="Toggle menu"
            >
              <FaBars className={`transform transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Main Menu */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-full left-0 right-0 z-50`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-700 font-medium bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg shadow-lg lg:shadow-none border-t lg:border-t-0 mt-2 lg:mt-0">
                <li><Link to="/" className="hover:text-orange-700 transition">Home</Link></li>
                <li><Link to="/about2" className="hover:text-orange-700 transition">About Us</Link></li>
                <li><Link to="/about" className="hover:text-orange-700 transition">Certifications</Link></li>

                <li className="relative group">
                  <span className="flex items-center cursor-pointer hover:text-orange-700 transition"><Link to="/products" className="hover:text-orange-700 transition">Our Products</Link></span>
                  <div className="absolute left-0 top-full bg-white shadow-lg hidden group-hover:block z-50 w-screen max-w-4xl mt-2 border rounded">
                    
                  </div>
                </li>

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
          </div>
        </div>
      </div>
    </header>
  );
}
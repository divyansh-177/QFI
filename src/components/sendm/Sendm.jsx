import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock,FaEnvelope, FaAngleDown, FaDownload, FaBars } from 'react-icons/fa';




export default function Sendm() {
  return (
    <section className="contact-form-section  text-gray-900 py-16">
      <div className="auto-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Column */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-3xl font-bold mb-4">SEND US MESSAGE</h2>
            <p className="mb-8">
              If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.
            </p>
            <form className="bg-orange-700 p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="col-span-1 sm:col-span-1  placeholder-gray-400 p-3 rounded"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="col-span-1 sm:col-span-1  placeholder-gray-400 p-3 rounded"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="col-span-1 sm:col-span-1  placeholder-gray-400 p-3 rounded"
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="col-span-1 sm:col-span-1  placeholder-gray-400 p-3 rounded"
              />
              <textarea
                name="requirement"
                id="requirement"
                placeholder="Requirement"
                rows={4}
                className="col-span-1 sm:col-span-2  placeholder-gray-400 p-3 rounded resize-none"
              />
              {/* Captcha and Code */}
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="captcha.php" alt="captcha" className="h-12 w-auto rounded" />
              </div>
              <input
                type="text"
                name="vercode"
                id="vercode"
                placeholder="Enter the Code"
                className="col-span-2 sm:col-span-1  placeholder-gray-400 p-3 rounded"
              />
              <button
                type="submit"
                name="submit-form"
                className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded transition"
              >
                Submit Now
              </button>
            </form>
          </div>
          {/* Info Column */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-3xl font-bold mb-4">Locations</h2>
            <div className="place-info p-6 rounded-lg shadow-lg space-y-4">
              <div>
                <h3 className="text-2xl font-semibold">Rohtak</h3>
                <ul className="contact-info space-y-3 mt-2">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl mr-3 text-blue-400 flex-shrink-0" />
                    <span>Plot No. 16, IDC Industrial Area, Hisar Road, Rohtak-124001</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="text-2xl mr-3 text-green-400 flex-shrink-0" />
                    <a href="tel:+919818200118" className="underline hover:text-white">+(91)-9812090620</a>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="text-2xl mr-3 text-red-400 flex-shrink-0" />
                    <a href="mailto:info@avtfastners.com" className="underline hover:text-white">info@avtfastners.com</a>
                  </li>
                  <li className="flex items-start">
                    <FaClock className="text-2xl mr-3 text-yellow-400 flex-shrink-0" />
                    <span>Mon - Sat: 10 am - 8 pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

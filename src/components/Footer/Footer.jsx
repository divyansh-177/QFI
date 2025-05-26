import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="main-footer footer-style-three bg-gray-900 text-gray-200"
    >
      <div className="auto-container mx-auto px-4 py-12">
        {/* Widgets Section */}
        <div className="widgets-section mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Big Column 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Map */}
              <div>
                <div className="footer-widget logo-widget overflow-hidden rounded-lg shadow-lg">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.9376569655745!2d76.53875713392428!3d28.89656524340423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d870211ad32ff%3A0xa935c9aee68d2b6f!2sQuality%20Fasteners%20India!5e0!3m2!1sen!2sin!4v1748247300994!5m2!1sen!2sin" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              {/* Contact */}
              <div>
                <div className="footer-widget links-widget bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
                  <ul className="contact-info space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="flaticon-location-pin text-2xl mr-3 text-blue-400" />
                      <span>Plot No.78, HSIDC, Hisar Road, Rohtak - 124001</span>
                    </li>
                  </ul>
                  <h5 className="text-xl font-medium mb-3 text-white">Domestic Sales</h5>
                  <ul className="contact-info space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="flaticon-user-3 text-2xl mr-3 text-blue-400" />
                      <span>Umesh Gambhir – 70567 20653</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flaticon-user-3 text-2xl mr-3 text-blue-400" />
                      <span>Satish Dalal – 80535 00556</span>
                    </li>
                  </ul>
                  <ul className="contact-info space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="flaticon-e-mail-envelope text-2xl mr-3 text-blue-400" />
                      <a href="mailto:info@avtfastners.com" className="underline hover:text-white">
                        qualityfastenersindia@gmail.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="flaticon-clock text-2xl mr-3 text-blue-400" />
                      <span>Mon – Sat: 10 am – 6 pm</span>
                    </li>
                  </ul>
                  <div className="social-links-two flex space-x-4 mt-4">
                    <a href="#" className="text-xl text-gray-400 hover:text-blue-400"><span className="fa fa-facebook-f" /></a>
                    <a href="#" className="text-xl text-gray-400 hover:text-blue-300"><span className="fa fa-twitter" /></a>
                    <a href="#" className="text-xl text-gray-400 hover:text-red-500"><span className="fa fa-google" /></a>
                    <a href="#" className="text-xl text-gray-400 hover:text-pink-500"><span className="fa fa-instagram" /></a>
                    <a href="#" className="text-xl text-gray-400 hover:text-blue-500"><span className="fa fa-linkedin" /></a>
                    <a href="#" className="text-xl text-gray-400 hover:text-red-600"><span className="fa fa-pinterest-p" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Column 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Useful Links */}
              <div>
                <div className="footer-widget twitter-widget bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Useful Links</h2>
                  <ul className="space-y-3 widget-content">
                    <li><NavLink to="/about-us" className="hover:underline text-gray-300 hover:text-white">About</NavLink></li>
                    <li><NavLink to="/products" className="hover:underline text-gray-300 hover:text-white">Our Products</NavLink></li>
                    <li><NavLink to="/enquiry" className="hover:underline text-gray-300 hover:text-white">Enquiry</NavLink></li>
                    <li><NavLink to="/contact" className="hover:underline text-gray-300 hover:text-white">Contact Us</NavLink></li>
                    <li><NavLink to="/privacy-policy" className="hover:underline text-gray-300 hover:text-white">Privacy Policy</NavLink></li>
                    <li><NavLink to="/weight-chart" className="hover:underline text-gray-300 hover:text-white">Weight Chart</NavLink></li>
                    <li><NavLink to="/gallery" className="hover:underline text-gray-300 hover:text-white">Gallery</NavLink></li>
                  </ul>
                </div>
              </div>
              {/* Popular Products */}
              <div>
                <div className="footer-widget gallery-widget bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Popular Products</h2>
                  <ul className="space-y-3 widget-content">
                    <li><NavLink to="/products/fastener" className="hover:underline text-gray-300 hover:text-white">Fastener Manufacturer</NavLink></li>
                    <li><NavLink to="/products/nut-bolt" className="hover:underline text-gray-300 hover:text-white">Nut Bolt Manufacturer</NavLink></li>
                    <li><NavLink to="/products/screws" className="hover:underline text-gray-300 hover:text-white">Screws Manufacturer</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-700 pt-6">
          <div className="auto-container text-center text-gray-500">
            Copyright © 2022. All Rights Reserved
          </div>
        </div>
        {/* Social Media Bar */}
        <div className="social-bar bg-gray-800 py-4 mt-6">
          <div className="auto-container flex justify-center space-x-6">
            <a href="#" className="text-gray-400 text-2xl hover:text-blue-400"><span className="fa fa-facebook-f" /></a>
            <a href="#" className="text-gray-400 text-2xl hover:text-blue-300"><span className="fa fa-twitter" /></a>
            <a href="#" className="text-gray-400 text-2xl hover:text-red-500"><span className="fa fa-google" /></a>
            <a href="#" className="text-gray-400 text-2xl hover:text-pink-500"><span className="fa fa-instagram" /></a>
            <a href="#" className="text-gray-400 text-2xl hover:text-blue-500"><span className="fa fa-linkedin" /></a>
            <a href="#" className="text-gray-400 text-2xl hover:text-red-600"><span className="fa fa-pinterest-p" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
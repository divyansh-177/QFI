import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

export default function Sendm() {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("hulululu");

  if (state.succeeded) {
    return (
      <section className="contact-form-section text-gray-900 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p>Your message has been sent successfully. We’ll get back to you within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-section text-gray-900 py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Form Column */}
          <div className="col-span-12 lg:col-span-8 w-full">
            <h2 className="text-3xl font-bold mb-4">SEND US MESSAGE</h2>
            <p className="mb-8">
              If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-orange-700 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="col-span-1 w-full placeholder-gray-400 p-3 rounded"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="col-span-1 w-full placeholder-gray-400 p-3 rounded"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone"
                className="col-span-1 w-full placeholder-gray-400 p-3 rounded"
                required
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />

              <input
                id="city"
                type="text"
                name="city"
                placeholder="City"
                className="col-span-1 w-full placeholder-gray-400 p-3 rounded"
                required
              />
              <ValidationError prefix="City" field="city" errors={state.errors} />

              <textarea
                id="requirement"
                name="requirement"
                placeholder="Requirement"
                rows={4}
                className="col-span-1 md:col-span-2 w-full placeholder-gray-400 p-3 rounded resize-none h-40"
                required
              />
              <ValidationError prefix="Requirement" field="requirement" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className={`col-span-1 md:col-span-2 w-full text-white font-semibold p-3 rounded transition ${
                  state.submitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {state.submitting ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-3xl font-bold mb-4">Locations</h2>
            <div className="place-info p-6 rounded-lg shadow-lg space-y-4 bg-white">
              <div>
                <h3 className="text-2xl font-semibold">Rohtak</h3>
                <ul className="contact-info space-y-3 mt-2">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl mr-3 text-blue-400 flex-shrink-0" />
                    <span>Plot No.78, HSIDC, Hisar Road, Rohtak - 124001</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="text-2xl mr-3 text-green-400 flex-shrink-0" />
                    <a href="tel:+917056720653" className="underline hover:text-white">
                      +(91)-7056720653
                    </a>
                    &nbsp;&nbsp;
                    <a href="tel:+918053500556" className="underline hover:text-white">
                      +(91)-8053500556
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="text-2xl mr-3 text-red-400 flex-shrink-0" />
                    <a
                      href="mailto:qualityfastenersindia@gmail.com"
                      className="underline hover:text-white"
                    >
                      qualityfastenersindia@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FaClock className="text-2xl mr-3 text-yellow-400 flex-shrink-0" />
                    <span>Mon - Sat: 10 am - 6 pm</span>
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

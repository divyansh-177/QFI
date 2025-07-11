import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  // Replace "hululuuluu" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("mblynabk");

  if (state.succeeded) {
    return (
      <section className="contact-form-section text-gray-900 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p>Your message has been sent successfully. We’ll get back to you within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Info Column */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                {/* location icon */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Plot No.78, HSIDC, Hisar Road, Rohtak - 124001
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                {/* phone icon */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 .948.684l1.498 4.493a1 1 0 .502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 .684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 70567 20653
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                {/* email icon */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  qualityfastenersindia@gmail.com
                </div>
              </div>
            </div>

            {/* Form Column */}
            <form
              onSubmit={handleSubmit}
              className="p-6 flex flex-col justify-center bg-white sm:rounded-lg"
            >
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="flex flex-col mb-6">
                <label htmlFor="tel" className="hidden">
                  Telephone Number
                </label>
                <input
                  id="tel"
                  type="tel"
                  name="tel"
                  placeholder="Telephone Number"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
                <ValidationError prefix="Telephone" field="tel" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300 ${
                  state.submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

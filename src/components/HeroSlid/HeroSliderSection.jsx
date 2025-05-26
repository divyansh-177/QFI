import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

// Import images so they're pre-bundled and loaded at startup
import supportImg from "./../../../public/nutb/Slide1.jpeg";
import plantImg from "./../../../public/nutb/Slide2.jpeg";
import productsImg from "./../../../public/nutb/Slide3.jpeg";
import whatsappQr from "./../../../public/nutb/Slide1.jpeg";

const slides = [
  {
    img: supportImg,
    subtitle: "Reliable Supplier",
    title: "Always Customer <span class='text-yellow-500'>First</span>",
    desc: [
      "Direct supplier to Tier-1s/ Tier-2s of leading OEMs in India.",
      "Call Us for Order or Inquiry",
    ],
    phone: "+91 9654480999",
    qr: whatsappQr,
  },
  {
    img: plantImg,
    subtitle: "Plant Area",
    title: "45000 <span class='text-yellow-500'>sq. ft.</span>",
    desc: [
      "Main Plant on Jind Road, Rohtak and 5000 sq. ft. Secondary Operations Plant on Hisar Road, Haryana.",
      "Call Us for Order or Inquiry",
    ],
    phone: "+91 9616480999",
    qr: whatsappQr,
  },
  {
    img: productsImg,
    subtitle: "Quality Assurance",
    title: "Best Quality <span class='text-yellow-500'>Products</span>",
    desc: [
      "High quality and precision manufacturer of cold forged nuts, bolts, standard and special fasteners/auto components located in Rohtak (Haryana), India.",
      "Call Us for Order or Inquiry",
    ],
    phone: "+91 9616480999",
    qr: whatsappQr,
  },
];

export default function HeroSlider() {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      gap: 20,
      autoplay: 5000,
      animationDuration: 1500,
      hoverpause: true,
      dragThreshold: 80,
      swipeThreshold: 80,
    });
    glide.mount();
    return () => glide.destroy();
  }, []);

  return (
    <section className=" py-10">
      <style>{`
        .glide__bullet { width: 0.75rem; height: 0.75rem; background-color: #6B7280; border-radius: 9999px; margin: 0 0.25rem; transition: all 0.3s ease; }
        .glide__bullet--active { background-color: #FBBF24; width: 1rem; height: 1rem; }
      `}</style>

      <div className="glide max-w-7xl mx-auto cursor-grab">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides.map((slide, idx) => (
              <li
                key={idx}
                className="glide__slide bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row h-[600px]"
              >
                <div className="lg:w-1/2 h-full">
                  <img
                    src={slide.img}
                    alt="slide-img"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-6 flex flex-col justify-center h-full">
                  <span className="text-lg text-gray-700 font-semibold">
                    {slide.subtitle}
                  </span>
                  <h2
                    className="text-3xl font-bold text-gray-900 mb-4"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  ></h2>
                  {slide.desc.map((d, i) => (
                    <p key={i} className="text-gray-700 mb-2">
                      {d}
                    </p>
                  ))}
                  <a
                    className="mt-4 inline-block text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md shadow-md transition"
                    href={`tel:${slide.phone}`}
                  >
                    <i className="fa fa-mobile fa-lg mr-2"></i>
                    {slide.phone}
                  </a>
                  <p className="mt-4 text-sm">Scan QR code to start Chat with us.</p>
                  <img
                    src={slide.qr}
                    alt="whatsapp-qr"
                    loading="eager"
                    className="mt-2 w-24 h-24 object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="glide__bullets flex justify-center mt-4"
          data-glide-el="controls[nav]"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              className="glide__bullet focus:outline-none"
              data-glide-dir={`=${idx}`}
            ></button>
          ))}
        </div>
      </div>
     
    </section>
  );
}

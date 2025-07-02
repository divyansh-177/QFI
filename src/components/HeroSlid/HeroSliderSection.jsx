import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

// Import images
import supportImg from "./../../../public/cust3.jpg";
import plantImg from "./../../../public/abt.jpeg";
import home3 from "./../../../public/home3.jpeg";
import home4 from "./../../../public/home4.jpeg";
import home5 from "./../../../public/home5.jpeg";

// Each slide can have 1–4 images
const slides = [
  {
    images: [supportImg],
    title:
      "Customer Satisfaction <span class='text-green-400'>is our 1st Priority</span>",
    desc: [
      { heading: "Inspection Process" },
      { text: "100% visual and dimensional inspection at all stages till dispatch." },
      { text: "100% thread plug gauge go / not go." },
      { heading: "Certifications" },
      { text: "Work done as per ISO 9001:2015 standards." },
      { text: "Work done as per IATF 16949:2016 standards." },
      { text: "Planning for BIS." },
    ],
  },
  {
    images: [plantImg, home3, home4, home5],
    title: "Tool room + Manufacturing facilities",
    desc: [
      { heading: "Manufacturing" },
      { text: "2 * 11 B 5 stations nut former machines" },
      { text: "2 * 14 B 6 stations nut forming machines" },
      { text: "1 * 19 B 5 stations machines" },
      { text: "(These machines are capable of manufacturing M2.5 to M12 cold forge nuts)" },
      { heading: "Tapping" },
      { text: "Flange Tapping Machine capable upto M4 to M12 flange nuts." },
      { text: "4 * Tapping Machine capable upto M2.5 to M12 nuts." },
      { heading: "Tool Room Facility" },
      { text: " Electric Discharge Machines." },
      { text: " 3x Surface Grinding Machines." },
      { text: " 3x Lathe Machines." },
      { text: "Cylindrical Grinding Machine." }
    ],
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
    <section className="py-10">
      <style>{`
        .glide__bullet {
          width: 0.75rem;
          height: 0.75rem;
          background-color: #6B7280;
          border-radius: 9999px;
          margin: 0 0.25rem;
          transition: all 0.3s ease;
        }
        .glide__bullet--active {
          background-color: #FBBF24;
          width: 1rem;
          height: 1rem;
        }
      `}</style>

      <div className="glide max-w-7xl mx-auto cursor-grab">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides.map((slide, idx) => {
              const isSingleImage = slide.images.length === 1; // Fixed typo here

              return (
                <li
                  key={idx}
                  className="glide__slide bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row h-[600px]"
                >
                  {/* Image Section */}
                  <div className={`lg:w-1/2 h-1/2 lg:h-full ${isSingleImage ? "" : "grid grid-cols-2 grid-rows-2"}`}> 
                    {slide.images.map((img, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${isSingleImage ? "" : "aspect-square"}`}
                      >
                        <img
                          src={img}
                          alt={`slide-img-${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Text Section */}
                  <div className="lg:w-1/2 p-6 flex flex-col justify-center h-full">
                    {slide.subtitle && (
                      <span className="text-lg text-gray-700 font-semibold mb-1">
                        {slide.subtitle}
                      </span>
                    )}
                    <h2
                      className="text-3xl font-bold text-gray-900 mb-4"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    ></h2>

                    <div className="text-gray-700 mb-4 space-y-2">
                      {slide.desc.map((item, i) =>
                        item.heading ? (
                          <h3
                            key={i}
                            className="text-lg font-semibold mt-4 text-green-400"
                          >
                            {item.heading}
                          </h3>
                        ) : (
                          <ul key={i} className="list-disc pl-5">
                            <li>{item.text}</li>
                          </ul>
                        )
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bullet Nav */}
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

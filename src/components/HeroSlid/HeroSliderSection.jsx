// HeroSliderSection.jsx
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

// Import images (adjust paths as needed)
import supportImg from "./../../../public/cust3.jpg";
import plantImg from "./../../../public/abt.jpeg";
import home3 from "./../../../public/home3.jpeg";
import home4 from "./../../../public/home4.jpeg";
import home5 from "./../../../public/home5.jpeg";

const defaultSlides = [
  {
    images: [supportImg],
    title: "Customer Satisfaction <span class='text-green-400'>is our 1st Priority</span>",
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
      { text: "Electric Discharge Machines." },
      { text: "3x Surface Grinding Machines." },
      { text: "3x Lathe Machines." },
      { text: "Cylindrical Grinding Machine." },
    ],
  },
];

/**
 * HeroSliderSection
 * @param {Object[]} slides - array of slide objects
 * @param {number} autoplayInterval - time in ms between slide auto-changes
 */
export default function HeroSliderSection({ slides = defaultSlides, autoplayInterval = 5000 }) {
  const slideCount = Array.isArray(slides) ? slides.length : 0;

  useEffect(() => {
    if (!slideCount) return;
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      gap: 20,
      autoplay: autoplayInterval,
      animationDuration: 1500,
      hoverpause: true,
      dragThreshold: 80,
      swipeThreshold: 80,
    });
    glide.mount();
    return () => glide.destroy();
  }, [slideCount, autoplayInterval]);

  if (!slideCount) {
    return <p className="text-center p-8">No slides available.</p>;
  }

  return (
    <section className="py-6">
      <style>{`
        .glide__bullet { width: 0.75rem; height: 0.75rem; background-color: #6B7280; border-radius: 9999px; margin: 0 0.25rem; transition: all 0.3s ease; }
        .glide__bullet--active { background-color: #FBBF24; width: 1rem; height: 1rem; }
      `}</style>

      <div className="glide max-w-7xl mx-auto">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides.map((slide, idx) => {
              const isSingle = slide.images.length === 1;
              return (
                <li
                  key={idx}
                  className="glide__slide bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row h-[600px]"
                >
                  {/* Image Panel */}
                  <div
                    className={`order-1 w-full lg:w-1/2 ${isSingle ? 'h-full' : 'grid grid-cols-2 grid-rows-2 gap-1'}`}
                  >
                    {slide.images.map((img, i) => (
                      <div key={i} className={isSingle ? 'w-full h-full' : 'aspect-square'}>
                        <img
                          src={img}
                          alt={`slide-img-${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Text Panel (scrollable) */}
                  <div className="order-2 w-full lg:w-1/2 p-4 md:p-6 flex flex-col overflow-y-auto max-h-full">
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <div className="text-gray-700 space-y-2">
                      {slide.desc.map((item, i) =>
                        item.heading ? (
                          <h3
                            key={i}
                            className="text-base md:text-lg font-semibold mt-4 text-green-400"
                          >
                            {item.heading}
                          </h3>
                        ) : (
                          <ul key={i} className="list-disc pl-5">
                            <li className="text-sm md:text-base">{item.text}</li>
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

        <div
          className="glide__bullets flex justify-center mt-4"
          data-glide-el="controls[nav]"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              className="glide__bullet focus:outline-none"
              data-glide-dir={`=${idx}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

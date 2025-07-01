import React from "react";

const About2 = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-16 mb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="abt2.jpeg"
                  alt="Quality Fasteners India"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <span className="text-xl text-green-700 font-semibold block">Know About Us</span>
              <h2 className="text-3xl font-bold text-gray-800">Quality Fasteners India</h2>
              <p className="text-gray-700 text-justify">
                <strong>Quality Fasteners India</strong> is a renowned name in fastener manufacturing, based in Rohtak (Haryana), just 60 km from Delhi. We bring decades of experience and a strong business foundation focused on meeting industrial requirements with a commitment to quality. We also aim to provide employment opportunities in a challenging economic climate.
              </p>
              <p className="text-gray-700 text-justify">
                We manufacture and supply a complete range of High Tensile and MS Fasteners, including Hex Nuts, Flange Nuts, Weld Nuts (Hex, Square, Step), Nylock Nuts, Cup Washers, T Bush, and CNC-machined special items as per customer drawings/blueprints — all with fast delivery timelines.
              </p>
              <p className="text-gray-700 text-justify">
                Through continuous improvement and adoption of advanced techniques, we deliver world-class fasteners and automotive components that ensure customer satisfaction. Our state-of-the-art plant and evolving infrastructure provide the technological edge required to meet and surpass industry demands.
              </p>
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-800">Mr. Umesh Gambhir</h3>
                <span className="text-sm text-gray-600 block">(Managing Director)</span>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">Mr. Satish Dalal</h3>
                <span className="text-sm text-gray-600 block">(Partner) </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 mb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Vision */}
            <div className="lg:w-1/3 space-y-4">
              <span className="text-xl text-green-700 font-semibold">Our Vision</span>
              <p className="font-bold text-gray-700 text-justify">
                With commitment to quality, continuous improvement, and innovation, we aim to exceed expectations and deliver best-in-class automotive components and fasteners.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:w-1/3space-y-4">
              <span className="text-xl text-green-700 font-semibold">Our Mission</span>
              <ul className="space-y-3">
                {[
                  "Ensuring products of exceptional quality and value for money.",
                  "Continuous improvement in manufacturing processes and productivity.",
                  "Timely deliveries and cost-effective solutions.",
                  "Employee engagement and training.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mt-1 mr-2">●</span>
                    <p className="font-bold text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="lg:w-1/3  space-y-4">
              <span className="text-xl text-green-700 font-semibold">Our Values</span>
              <ul className="space-y-3">
                {[
                  "Customer Satisfaction",
                  "Quality Assurance",
                  "Honesty & Loyalty",
                  "Environmental Responsibility",
                ].map((item, index) => (
                  <li key={index} className="flex items-start ">
                    <span className="text-green-500 mt-1 mr-2 ">●</span>
                    <p className="font-bold text-gray-700 ">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;

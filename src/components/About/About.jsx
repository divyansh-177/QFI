export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
          <div className="md:w-4/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
              Quality Evaluations Certificates
            </h2>
            <p className="mt-4 text-gray-600">
               Work done as per ISO 9001:2015 standards. <br/>
      Work done as per IATF 16949:2016 standards. <br/>
      Planning for BIS.
            </p>
          </div>

          {/* PDF page previews */}
          <div className="md:w-8/12 flex gap-4 overflow-x-auto">
            <div className="w-1/2 space-y-4">
              <img
                src="qfi.jpeg"
                alt="PDF 1 - Page 1"
                className="w-full rounded shadow"
              />
              
            </div>

            <div className="w-1/2 space-y-4">
              <img
                src="./../../public/QFI_IATF.png"
                alt="PDF 2 - Page 1"
                className="w-full rounded shadow"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

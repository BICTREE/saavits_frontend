export default function CorporateSustainability() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center px-6 text-[#2B2B2B]">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl text-center font-helvetica ">
        Corporate Sustainability
      </h1>
      <p className="text-center text-lg mt-4 max-w-3xl">
        In every aspect of our business, The Saavit’s is dedicated to sustainability.
      </p>

      {/* Subheader */}
      <h2 className="text-2xl  text-center mt-16 font-helvetica">
        Our Farms
      </h2>

      <p className="text-center text-base mt-4 max-w-2xl leading-relaxed">
        Mushrooms are not only delicious; they're nature's way of showing us a smarter 
        choice for the planet. We’ve taken the process even further, such as water 
        conservation and recyclable packaging.
      </p>

      {/* Images Section */}
      <div className="mt-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/farm01.png"
            alt="Hanging mushroom bags"
            className="rounded-3xl w-72 h-72 object-cover"
          />
        </div>

        {/* Middle Image with Play Button */}
        <div className="relative flex justify-center">
          <img
            src="/assets/images/farm02.png"
            alt="Farm structure"
            className="rounded-3xl w-full h-72 object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            {/* <div className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div> */}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
          src="/assets/images/farm03.png"
            alt="Metal container on farm"
            className="rounded-3xl w-72 h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

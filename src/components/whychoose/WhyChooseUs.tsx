import React from "react";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Good Service",
      icon: "/assets/images/icon01.png", // <-- replace with your icon path
      text: `The Saavit’s is committed to delivering exceptional service, ensuring every consumer receives timely support, reliable product quality, and a smooth experience built on trust, transparency, 
      and genuine care from start to finish.`,
    },
    {
      title: "Certified Products",
      icon: "/assets/images/icon02.png", // <-- replace with your icon path
      text: `The Saavit’s delivers certified, quality-assured mushroom products that meet strict safety and purity standards, giving consumers complete confidence in every purchase through verified processes, 
      reliable testing, and trusted farm-to-package transparency.`,
    },
    {
      title: "Recycled Package",
      icon: "/assets/images/icon03.png", // <-- replace with your icon path
      text: `Saavit’s uses eco-friendly, recycled packaging to reduce environmental impact, promote sustainability, and ensure products are safely delivered. Every package reflects our commitment to a greener planet 
      and responsible brand practices.`,
    },
  ];

  return (
    <section className="bg-[#D7D0C0] py-10 md:py-20 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-5xl text-[#003049] font-helvetica mb-3">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center px-4">
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />

            <h3 className="text-xl font-medium text-[#23443A] mb-3">
              {item.title}
            </h3>

            <p className="text-[#23443A] leading-relaxed text-[15px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

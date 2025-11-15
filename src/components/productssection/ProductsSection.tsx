"use client";
import React from "react";

const products = [
  {
    id: 1,
    title: "Dried Mushroom",
    img: "/assets/images/dried-mushroom.png",
imgClass: "w-full mx-auto",
    description: `Dried Oyster Mushrooms from The Saavit’s are prepared by carefully 
    dehydrating fresh, naturally grown mushrooms to preserve their flavor and nutrients. 
    This process enhances their shelf life without using preservatives or additives, 
    making them a convenient and healthy ingredient for everyday cooking. When soaked in 
    warm water, the mushrooms return to their soft texture while retaining their rich umami taste.`,
    reverse: false,
  },
  {
    id: 2,
    title: "Mushroom Powder",
    img: "/assets/images/mushroom-powder.png",
   imgClass: "w-full mx-auto",
    description: `The Saavit’s Mushroom Powder is a pure, natural blend made from 
    carefully dried and finely ground Oyster Mushrooms. Packed with essential nutrients 
    and earthy richness, it offers smooth and balanced energy — perfect for daily 
    wellness, focus, and mindful living. Nature’s calm power in every spoon.`,
    reverse: true,
  },
  {
    id: 3,
    title: "Mushroom Pickle",
    img: "/assets/images/mushroom-pickle.png",
    imgClass: "w-full mx-auto",
    description: `Dried Oyster Mushrooms from The Saavit’s are prepared by carefully 
    dehydrating fresh, naturally grown mushrooms to preserve their flavor and nutrients. 
    This process enhances their shelf life without using preservatives or additives, 
    making them a convenient and healthy ingredient for everyday cooking. When soaked in 
    warm water, the mushrooms return to their soft texture while retaining their rich umami taste.`,
    reverse: false,
  },
  {
    id: 4,
    title: "Mushroom Coffee Blend",
    img: "/assets/images/mushroom-coffee.png",
    imgClass: "w-full mx-auto",
    description: `The Saavit’s Mushroom Coffee Powder blends finely roasted coffee with 
    nutrient-rich Oyster Mushrooms grown responsibly in Kasaragod in Kerala, India. The 
    result is a smooth, balanced coffee that is lighter on the stomach and supportive of 
    daily wellness. Known for their antioxidants and adaptogenic properties, oyster 
    mushrooms help your body manage stress. Combined with coffee, it offers a gentle boost 
    of energy without the usual jitters.`,
    reverse: true,
  },
];

export default function ProductsShowcase() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        {products.map((product, index) => (
          <div
            key={product.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              product.reverse ? "md:gap-10" : ""
            }`}
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className={`${product.imgClass} ${
                product.reverse ? "order-1 md:order-2" : ""
              }`}
            />

            {/* Description */}
            <p
              className={`text-[#2B2B2B] text-lg leading-relaxed text-center md:text-left ${
                product.reverse ? "order-2 md:order-1" : ""
              }`}
            >
              {product.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

"use client"
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import ReactCarousel from "../carousel/Carousel";
import { useState, useEffect } from "react";

const plates = [
  { product: "tabak orta boy", price: "2700", image: "/plates/p6.png" },
  { product: "tabak küçük boy", price: "1400", image: "/plates/p1.png" },
  { product: "tabak orta boy", price: "1350", image: "/plates/p7.png" },
  { product: "tepsi orta boy", price: "700", image: "/plates/p8.png" },
  { product: "tabak küçük boy", price: "850", image: "/plates/p4.png" },
  /* { product: "amorf tabak", price: "1600", image: "/plates/p3.png" }, */
 
];
const bags = [
 /*  { product: "askılı kol çantası", price: "3500", image: "/bag/c1.webp" }, */
 { product: "askılı kol çantası", price: "3500", image: "/bag/c2.webp" },
 { product: "askılı kol çantası", price: "2900", image: "/bag/c4.webp" },
 { product: "askılı kol çantası", price: "4500", image: "/bag/c5.webp" },
/*  { product: "askılı kol çantası", price: "6700", image: "/bag/c3.webp" },
  { product: "askılı kol çantası", price: "10000", image: "/bag/c6.webp" }, */
];


const newArrivals = [
  { product: "zincir askılı kol çantası", price: "3500", image: "/new/n1.webp" },
  { product: "zincir askılı kol çantası", price: "3500", image: "/new/n2.jpg" },
  { product: "zincir askılı kol çantası", price: "6700", image: "/new/n3.jpg" },
]

const allProducts = {
  bags,
  plates,
  newArrivals
}

const HomeProducts = ({products, title}) => {
  const [width, setWidth] = useState(null);
  const [isOnClient, setIsOnClient] = useState(true);
  const data = allProducts[products]

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  
  useEffect(() => {
    window.scrollBy(0, 1);
    updateWindowDimensions();
    setIsOnClient(true);
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <section className="relative lg:py-14 py-10 pb-6">
      <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"DIRECT AVAILABLE"}
          second={title}
          third={true}
        />
       
      </div>

        {isOnClient && (
          <ReactCarousel
            centerMode={width >= 630}
            partial={width < 630}
            showDots={width < 630}
          >
            {data.map((productItem, i) => {
              return (
                <div key={i} className=" cursor-pointer p-2 relative  sm:left-0">
                  <div>
                    <div className={`homeproducts-img-cover rounded-sm  bg-napa/10 ${products === "plates" && "p-8"}`}>
                      <Image
                        src={productItem.image}
                        quality={100}
                        width={500}
                        height={700}
                        className="homeproducts-img"
                        /* loading="eager" */
                        alt="photo"
                      />
                    </div>
                    <div className="homeproducts-info pt-4 md:pt-8">
                      <p className="whitespace-nowrap  sm:text-sm ">{productItem.product}</p>
                      <p className="hidden sm:inline px-2">|</p>
                      <p className="font-semibold text-sm mt-1 sm:mt-0">
                        {productItem.price}₺
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ReactCarousel>
        )}
      
    </section>
  );
};
export default HomeProducts;



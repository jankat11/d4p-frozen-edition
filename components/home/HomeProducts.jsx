import Image from "next/image";
import SectionTitle from "../SectionTitle";
import ReactCarousel from "../carousel/Carousel";
import { useState, useEffect } from "react";

const data = [
  { product: "amorf tabak", price: "1600", image: "/plates/p3.png" },
  { product: "tabak orta boy", price: "2700", image: "/plates/p6.png" },
  { product: "tabak küçük boy", price: "1400", image: "/plates/p1.png" },
  { product: "tabak orta boy", price: "1350", image: "/plates/p7.png" },
  { product: "tabak küçük boy", price: "850", image: "/plates/p4.png" },
  { product: "tepsi orta boy", price: "700", image: "/plates/p8.png" },
  { product: "tabak büyük", price: "990", image: "/plates/p5.png" },
];

const HomeProducts = () => {
  const [width, setWidth] = useState(null);
  const [isOnClient, setIsOnClient] = useState(false);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWindowDimensions();
    setIsOnClient(true);
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <section className="relative">
      <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"DIRECT AVAILABLE"}
          second={"IN STOCK"}
          third={true}
        />
      </div>

      {isOnClient && (
        <ReactCarousel
          centerMode={width >= 530}
          partial={width < 530}
          showDots={width < 530}
        >
          {data.map((productItem, i) => {
            return (
              <div key={i} className=" cursor-pointer mx-2">
                <div>
                  <div className="homeproducts-img-cover bg-westar rounded-sm">
                    <Image
                      src={productItem.image}
                      quality={100}
                      width={700}
                      height={825}
                      className="homeproducts-img"
                      alt="photo"
                    />
                  </div>

                  <div className="homeproducts-info">
                    <p className="whitespace-nowrap">{productItem.product}</p>
                    <p className="hidden sm:inline px-4">|</p>
                    <p className="text-base font-semibold sm:text-sm mt-2 sm:mt-0">
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



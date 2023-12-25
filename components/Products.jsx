import { useState, useEffect } from "react";
import Image from "next/image";
import { shopifyFetch, storefront } from "@/utils";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const [isMounted, setIsMounted] = useState({});
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

/*   useEffect(() => {
    storefront(products);
  }, []); */

  return (
    <section
      /* ref={storeRef} */
      id="home-store"
      className="  relative sm:mb-56 mb-4"
    >
      <div className="grid relative md:grid-cols-2 ">
        <div className="md:aspect-square overflow-hidden relative">
          <Image
            src="/homepage/h1.png"
            width={900}
            height={900}
            alt="plates"
            className="relative w-full object-cover"
          />
          <div className="w-full absolute bottom-8">
            <p className="home-images-title ">our collection</p>
          </div>
        </div>
        <div className="md:aspect-square overflow-hidden relative">
          <Image
            src="/homepage/h2.png"
            width={900}
            height={900}
            alt="plates"
            className="relative w-full object-cover"
          />
          <div className="w-full absolute bottom-8">
            <p className="home-images-title ">in stock</p>
          </div>
        </div>
        <div className="md:aspect-square overflow-hidden relative">
          <Image
            src="/homepage/h7.png"
            width={900}
            height={900}
            alt="plates"
            className="relative w-full object-cover"
          />
          <div className="w-full absolute bottom-8">
            <p className="home-images-title ">artists</p>
          </div>
        </div>
        <div className="md:aspect-square relative">
          <Image
            src="/homepage/h4.png"
            width={900}
            height={900}
            alt="plates"
            className="relative w-full object-cover object-bottom  md:aspect-square"
          />
          <div className="w-full absolute bottom-8">
            <p className="home-images-title">art and crafts</p>
          </div>
        </div>
      </div>
      <p className="max-w-3xl p-4 font-raleway leading-loose sm:leading-10 text-center mx-auto text-letter sm:text-2xl text-xl tracking-wide">
        <span className="font-serif text-4xl">W</span>e value our planet and are
        dedicated to contributing to its well-being by upcycling waste materials
        and turning them into one of a kind gadgets, utensils and art objects.
      </p>
    </section>
  );
};
export default Products;

{
  /* <h2 className="text-primary/80 text-4xl text-center py-16">Products</h2> */
}

{
  /*           <div className="overflow-hidden sm:rounded-sm">
            <ReactCompareImage
              leftImage="homepage/yastik.png"
              rightImage="homepage/yumak.png"
            />
          </div> */
}

  /* const products = `
    query Products {
      products(first: 6) {
        edges {
          node {
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;
   */
        {/* <div className="grid relative sm:top-24 p-4 sm-p-0 sm:grid-cols-3  sm:mx-8">
          <div className="home-images-container sm:top-12 sm:left-24 z-30 ">
            <div className="product-layer"></div>
            <Image
              src="/homepage/p3.png"
              width={900}
              height={900}
              alt="plates"
              className="home-images relative "
            />
          </div>
  
          <div className="home-images-container z-20 ">
            <div className="product-layer"></div>
            <Image
              src="/homepage/p4.png"
              width={900}
              height={900}
              alt="plates"
              className="home-images object-bottom"
            />
          </div>
          <div className="home-images-container sm:right-24 sm:bottom-12 ">
            <div className="product-layer"></div>
            <Image
              src="/homepage/ekose2.png"
              width={900}
              height={900}
              alt="plates"
              className="home-images object-bottom"
            />
          </div>
        </div> */}
import { useState, useEffect } from "react";
import Image from "next/image";
import { shopifyFetch, storefront } from "@/utils";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import ReactCompareImage from "react-compare-image";

const Products = () => {
  const [isMounted, setIsMounted] = useState({});
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [ref2, endView1] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref3, endView2] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref4, endView3] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref5, endAll] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref15, controller1] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [ref25, controller2] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [ref35, controller3] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [ref45, controller4] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  /*   useEffect(() => {
    storefront(products);
  }, []); */

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <section
      /* ref={storeRef} */
      id="home-store"
      className="  relative sm:mb-56 mb-4"
    >
      <div className="grid relative md:grid-cols-2 ">
        <div
          ref={ref}
          className="md:aspect-square overflow-hidden relative group"
        >
          <div ref={ref15} className="slideController "></div>
          <Image
            src="/homepage/h1.png"
            width={900}
            height={900}
            alt="plates"
            className="four-images"
          />
          <div className={`w-full absolute  hidden md:block  bottom-8`}>
            <p className="home-images-title">our collection</p>
          </div>
          <div
            className={`w-full ${
              controller1 && !endView1
                ? "fixed animate__animated animate__swing"
                : "absolute"
            } md:hidden bottom-8`}
          >
            <p className="home-images-title ">our collection</p>
          </div>
        </div>
        <div
          ref={ref2}
          className="md:aspect-square overflow-hidden relative group"
        >
          <div ref={ref25} className="slideController "></div>
          <Image
            src="/homepage/h2.png"
            width={900}
            height={900}
            alt="plates"
            className="four-images"
          />
          <div className={`w-full absolute hidden md:block  bottom-8`}>
            <p className="home-images-title ">in stock</p>
          </div>
          <div
            className={`w-full ${
              controller2 && !endView2
                ? "fixed animate__animated animate__swing"
                : "absolute"
            } md:hidden bottom-8`}
          >
            <p className="home-images-title ">in stock</p>
          </div>
        </div>
        <div
          ref={ref3}
          className="md:aspect-square overflow-hidden relative group"
        >
          <div ref={ref35} className="slideController"></div>
          <Image
            src="/homepage/h9.png"
            width={900}
            height={900}
            alt="plates"
            className="four-images"
          />
          <div className={`w-full absolute hidden md:block  bottom-8`}>
            <p className="home-images-title ">artists</p>
          </div>
          <div
            className={`w-full ${
              controller3 && !endView3
                ? "fixed animate__animated animate__swing"
                : "absolute"
            } md:hidden  bottom-8`}
          >
            <p className="home-images-title ">artists</p>
          </div>
        </div>
        <div
          ref={ref4}
          className="md:aspect-square relative overflow-hidden group"
        >
          <div ref={ref45} className="slideController "></div>
          <Image
            src="/homepage/h4.png"
            width={900}
            height={900}
            alt="plates"
            className="four-images object-bottom  md:aspect-square"
          />
          <div className={`w-full absolute hidden md:block  bottom-8`}>
            <p className="home-images-title">art and crafts</p>
          </div>
          <div
            className={`w-full ${
              controller4 && !endAll
                ? "fixed animate__animated animate__swing"
                : "absolute"
            } md:hidden bottom-8`}
          >
            <p className="home-images-title">art and crafts</p>
          </div>
        </div>
      </div>
      <p
        ref={ref5}
        className="max-w-3xl p-4 py-24 font-raleway leading-loose sm:leading-10 text-center mx-auto text-letter sm:text-2xl text-xl tracking-wide"
      >
        <span className="font-serif text-4xl">W</span>e value our planet and are
        dedicated to contributing to its well-being by upcycling waste materials
        and turning them into one of a kind gadgets, utensils and art objects.
      </p>

      <div className="">
        <p className="text-center text-letter text-xl sm:text-2xl lg:text-3xl font-raleway">THE HEALING POVER OF ART</p>
        <div className="overflow-hidden sm:rounded-sm flex flex-col sm:flex-row p-4 gap-4">
          <ReactCompareImage
            leftImage="homepage/comp1.png"
            rightImage="homepage/comp2.png"
          />
          <ReactCompareImage
            leftImage="homepage/comp3.png"
            rightImage="homepage/comp4.png"
          />
        </div>
      </div>
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
{
  /* <div className="grid relative sm:top-24 p-4 sm-p-0 sm:grid-cols-3  sm:mx-8">
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
        </div> */
}

import { useState, useEffect } from "react";
import Image from "next/image";
import { shopifyFetch, storefront} from "@/utils";
import axios from "axios";


const products = `
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
`



const Products = () => {
  const [isMounted, setIsMounted] = useState({})
  

  useEffect(() => {
    
   storefront(products)
  }, []);
  
  return (
    <section
      /* ref={storeRef} */
      id="home-store"
      className="  relative lg:mt-4 sm:mb-56 mb-4"
    >
      <p className="max-w-lg p-4 leading-loose text-center mx-auto text-letter font-semibold">
        <span className="font-serif text-4xl">I</span>nspired by the healing
        power of art, d4p is an up-cycling workshop that designs products by
        blending waste materials with nature-friendly materials.
      </p>
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

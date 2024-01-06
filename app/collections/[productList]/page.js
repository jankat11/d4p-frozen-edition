import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";

const data = [
  { product: "amorf tabak", price: "1600", image: "/plates/p3.png" },
  { product: "tabak küçük boy", price: "1400", image: "/plates/p1.png" },
  { product: "tabak orta boy", price: "2700", image: "/plates/p6.png" },
  { product: "tabak orta boy", price: "1350", image: "/plates/p7.png" },
  { product: "tabak küçük boy", price: "850", image: "/plates/p4.png" },
  { product: "tepsi orta boy", price: "700", image: "/plates/p8.png" },
  { product: "tabak büyük", price: "990", image: "/plates/p5.png" },
];

const ProductList = ({params}) => {
  return (
    <>
      <div className="py-24 pb-8">
        <h1 className="text-center text-2xl tracking-wider text-primary">
          {params.productList}
        </h1>
      </div>

      <section className="py-10 pt-0  ">
        <div className="mx-auto grid gap-10 max-w-7xl grid-cols-1 p-4 pt-0 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
          {data.map((product, i) => (
            <article
              key={i}
              className="relative flex flex-col justify-end border rounded-md  border-westar/70 lg:first:col-span-2  lg:first:row-span-2  lg:hover:transform cursor-pointer "
            >
              <div className="relative overflow-hidden  flex flex-col justify-center items-center self-center w-full h-full rounded-md">
                <Image
                  src={product.image}
                  alt="product"
                  width={500}
                  height={600}
                  style={{width: "500px", height:"auto"}}
                />
              </div>

              <div className=" flex justify-between items-baseline p-2 px-4 bg-westar/40 mt-2  text-primary">
                <p className="whitespace-nowrap sm:text-sm ">
                  {product.product}
                </p>

                <p className="font-semibold text-sm mt-1 sm:mt-0">
                  {product.price}₺
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default ProductList;
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const HomeProducts = () => {
  return (
    <section className="">
      <div className="pb-6 sm:pb-2 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle first={"DIRECT AVAILABLE"} second={"IN STOCK"} third={true}/>
      </div>
      <div className="carousel carousel-center bg-aside p-4 py-0 space-x-4 sm:space-x-0 border-none">
        <div className="carousel-item w-4/5 sm:w-2/5 md:w-[28%] border-none cursor-pointer">
          <div className="sm:p-4 ">
            <Image
              src={"/plates/p2.png"}
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md shadow"
              alt="photo"
            />
            <div className="homeproducts-info">
              <p>büyük tabak</p>
              <p>500tl</p>
            </div>
          </div>
        </div>
        <div className="carousel-item  w-4/5 sm:w-2/5 md:w-[28%] cursor-pointer">
          <div className="sm:p-4 ">
            <Image
              src={"/plates/p3.png"}
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md object-cover shadow"
              alt="photo"
            />
            <div className="homeproducts-info">
              <p>büyük tabak</p>
              <p>500tl</p>
            </div>
          </div>
        </div>
        <div className="carousel-item  w-4/5 sm:w-2/5 md:w-[28%] cursor-pointer">
          <div className="sm:p-4 ">
            <Image
              src={"/plates/p4.png"}
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md object-cover shadow"
              alt="photo"
            />
            <div className="homeproducts-info">
              <p>büyük tabak</p>
              <p>500tl</p>
            </div>
          </div>
        </div>
        <div className="carousel-item hidden md:block w-4/5 sm:w-2/5 md:w-[28%] cursor-pointer">
          <div className="sm:p-4 ">
            <Image
              src={"/plates/p1.png"}
              style={{ width: "700px", height: "auto" }}
              quality={100}
              width={700}
              height={825}
              className="rounded-md object-cover shadow"
              alt="photo"
            />
            <div className="homeproducts-info">
              <p>büyük tabak</p>
              <p>500tl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeProducts;

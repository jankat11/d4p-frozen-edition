import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const HomeInstagram = () => {
  return (
    <section className="pb-8">
      <div className="pb-2 sm:pb-2 max-w-5xl xl:max-w-7xl mx-auto">
        <SectionTitle
          first={"INSTAGRAM"}
          second={"FOLLOW US"}
          third={false}
          classes={"xl:ps-8"}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 pt-4 gap-1">
        <div className="relative group">
          <div className="absolute top-[50%] transition-all duration-300 right-[50%] cursor-pointer group-hover:opacity-100 z-20 opacity-0 translate-x-[50%] translate-y-[-50%]">
            <FaInstagram fill="white" size={24} />
          </div>
          <Image
            src="/homepage/h1.webp"
            width={500}
            height={500}
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300 home-prod-img"
            alt="instagram"
          />
        </div>
        <div className="relative group">
          <div className="absolute top-[50%] transition-all duration-300 right-[50%] cursor-pointer group-hover:opacity-100 z-20 opacity-0 translate-x-[50%] translate-y-[-50%]">
            <FaInstagram fill="white" size={24} />
          </div>
          <Image
            src="/homepage/h2.webp"
            width={500}
            height={500}
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300 home-prod-img"
            alt="instagram"
          />
        </div>
        <div className="relative group">
          <div className="absolute top-[50%] transition-all duration-300 right-[50%] cursor-pointer group-hover:opacity-100 z-20 opacity-0 translate-x-[50%] translate-y-[-50%]">
            <FaInstagram fill="white" size={24} />
          </div>
          <Image
            src="/homepage/h3.webp"
            width={500}
            height={500}
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300 home-prod-img"
            alt="instagram"
          />
        </div>
        <div className="relative group">
          <div className="absolute top-[50%] transition-all duration-300 right-[50%] cursor-pointer group-hover:opacity-100 z-20 opacity-0 translate-x-[50%] translate-y-[-50%]">
            <FaInstagram fill="white" size={24} />
          </div>
          <Image
            src="/homepage/h4.webp"
            width={500}
            height={500}
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300 home-prod-img"
            alt="instagram"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeInstagram;

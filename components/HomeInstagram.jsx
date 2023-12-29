import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const HomeInstagram = () => {
  return (
    <section className="pb-4">
      <p className="ps-4 xl:ps-8 font-raleway"><span className="text-accent">INSTAGRAM</span> <span className="text-accent text-2xl px-2 relative top-[1px]">|</span> <span className="text-letter">FOLLOW US</span></p>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-4">
        <div className="relative group">
          <div className="absolute top-[50%] transition-all duration-300 right-[50%] cursor-pointer group-hover:opacity-100 z-20 opacity-0 translate-x-[50%] translate-y-[-50%]">
            <FaInstagram fill="white" size={24} />
          </div>
          <Image
            src="/homepage/h1.webp"
            width={500}
            height={500}
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300"
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
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300"
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
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300"
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
            className="group-hover:brightness-50 group-hover:cursor-pointer relative z-10 transition-all duration-300"
            alt="instagram"
          />
        </div>
        
          
      </div>
    </section>
  );
};
export default HomeInstagram;

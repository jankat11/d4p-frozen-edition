import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const data = [
  "/homepage/h1.webp",
  "/homepage/h2.webp",
  "/homepage/h3.webp",
  "/homepage/h4.webp",
];

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
        {data.map((imageItem, i) => (
          <div key={i} className="relative group">
            <div className="home-instagram-logo">
              <FaInstagram fill="white" size={24} />
            </div>
            <Image
              src={imageItem}
              width={500}
              height={500}
              className="home-instagram-img"
              alt="instagram"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomeInstagram;

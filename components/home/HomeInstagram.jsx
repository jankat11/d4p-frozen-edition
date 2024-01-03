import SectionTitle from "../SectionTitle";
import InstagramModal from "../InstagramModal";

const data = [
  "/homepage/h1.webp",
  "/homepage/h2.webp",
  "/homepage/h3.webp",
  "/homepage/h4.webp",
];

const HomeInstagram = () => {
  return (
    <section className="pb-12">
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
          <div key={i}>
            <InstagramModal imageItem={imageItem} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomeInstagram;

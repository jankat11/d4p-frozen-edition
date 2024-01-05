import Image from "next/image";

const HomeVitra = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="relative overflow-hidden cursor-pointer">
        <div className="w-full limited-edition">
          <p className=" hero-text inside-container relative  sm:left-16 xl:left-0 text-left text-xl sm:text-2xl md:text-4xl xl:text-5xl">limited edition</p>
        </div>
        <Image
          src={"/homepage/bsd.jpg"}
          width={2000}
          height={2000}
          alt="vitra"
          className="object-cover object-bottom aspect-video home-prod-img"
        />
      </div>
    </section>
  );
};
export default HomeVitra;

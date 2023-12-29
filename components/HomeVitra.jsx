import Image from "next/image";

const HomeVitra = () => {
  return (
    <section className="py-24">
      <div className="relative overflow-hidden border">
        <p className="absolute home-images-title bottom-4 sm:bottom-6 md:bottom-8 xl:left-36 xl:top-36 xl:text-6xl">limited edition</p>
        <Image
          src={"/homepage/bsd.jpg"}
          width={2000}
          height={2000}
          alt="vitra"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
};
export default HomeVitra;

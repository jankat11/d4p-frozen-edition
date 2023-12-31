import Image from "next/image";

const HomeVitra = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="relative overflow-hidden">
        <p className="home-images-title limited-edition">limited edition</p>
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

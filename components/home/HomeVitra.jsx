import Image from "next/image";

const HomeVitra = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="relative overflow-hidden cursor-pointer">
        <p className="home-images-title hero-text limited-edition">limited edition</p>
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

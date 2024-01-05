import Image from "next/image";

const IntroductionItem = ({ introImage, title }) => {
  return (
    <div
      className={`md:aspect-[10/9] group md:relative containerss md:overflow-hidden aspect-[300/400]`}
    >
      <Image
        src={introImage}
        width={900}
        height={900}
        alt="plates"
        className="four-images absolute md:relative object-cover object-center md:aspect-[10/9] home-prod-img"
      />

      <div className={`w-full md:hidden py-8  shark-3 bottom-0`}>
        <p className="home-images-title font-light">{title}</p>
      </div>
        <div className={`w-full absolute hidden md:block  bottom-8`}>
          <p className="home-images-title font-light">{title}</p>
        </div>
    </div>
  );
};
export default IntroductionItem;

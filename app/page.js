import "animate.css";
import Hero from "../components/home/Hero";
import IntroductionList from "../components/home/IntroductionList";
/* import Map from "@/components/map/Map"; */
import HomeProducts from "@/components/home/HomeProducts";
import HomeVitra from "@/components/home/HomeVitra";
import HomeInstagram from "@/components/home/HomeInstagram";
import CompareImages from "@/components/home/CompareImages";



export default function Home() {



  return (
    <>
      <Hero />
      <IntroductionList />
      <HomeProducts products={"newArrivals"} title={"NEW ARRIVALS"} />
      <HomeVitra />
      <HomeProducts products={"plates"}  title={"PLATES"} />
      <CompareImages />
   {/*    <HomeProducts products={"bags"} title={"BAGS"} /> */}
      <HomeInstagram />
    </>
  );
}

import "animate.css";
import Hero from "../components/home/Hero";
import IntroductionList from "../components/home/IntroductionList";
import Features from "@/components/Features";
import Map from "@/components/map/Map";
import { useEffect, useState } from "react";
import HomeProducts from "@/components/home/HomeProducts";
import HomeVitra from "@/components/home/HomeVitra";
import HomeInstagram from "@/components/home/HomeInstagram";
import CompareImages from "@/components/home/CompareImages";
import Opening from "@/components/Opening";

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      {/* <Opening /> */}
      {true && (
        <div className="">
          <Hero />
          <IntroductionList />
          <HomeProducts />
          <HomeVitra />
          <CompareImages />
          <HomeInstagram />
        </div>
      )}
    </>
  );
}

{
  /* <CompareImages /> */
}
{
  /* <Features /> */
}
{
  /*  <Map /> */
}

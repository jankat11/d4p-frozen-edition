import "animate.css";
import Hero from "../components/Hero";
import IntroductionList from "../components/IntroductionList";
import Features from "@/components/Features";
import Map from "@/components/Map";
import { useEffect } from "react";
import HomeProducts from "@/components/HomeProducts";
import HomeVitra from "@/components/HomeVitra";
import HomeInstagram from "@/components/HomeInstagram";
import CompareImages from "@/components/CompareImages";
import Opening from "@/components/Opening";

export default function Home() {

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [])


  return (
    <>
      <Opening />
      <div className="">
        <Hero />
        <IntroductionList />
        <HomeProducts />
        <HomeVitra />
        <HomeInstagram />
      </div>
    </>
  );
}

  {/* <CompareImages /> */}
  {/* <Features /> */}
 {/*  <Map /> */}
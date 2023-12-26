import "animate.css";
import Hero from "../components/Hero";
import IntroductionList from "../components/IntroductionList";
import Features from "@/components/Features";
import Map from "@/components/Map";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [])


  return (
    <>
      <Hero />
      <IntroductionList />
      {/* <Features /> */}
     {/*  <Map /> */}
    </>
  );
}

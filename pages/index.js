import "animate.css";
import Hero from "../components/Hero";
import IntroductionList from "../components/IntroductionList";
import Features from "@/components/Features";
import Map from "@/components/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroductionList />
      {/* <Features /> */}
      <Map />
    </>
  );
}

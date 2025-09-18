import { useRef } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import useSectionObserver from "@/hooks/useSectionObserver";
import { SelectedPage } from "@/shared/types";

import HomeHero from "./components/HomeHero";
import SponsorStrip from "./components/SponsorStrip";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionObserver(sectionRef, SelectedPage.Home, setSelectedPage);

  return (
    <section id="home" ref={sectionRef} className="bg-gray-20 pb-16 pt-24 md:pb-0">
      <HomeHero setSelectedPage={setSelectedPage} />
      {isAboveMediumScreens && <SponsorStrip />}
    </section>
  );
};

export default Home;

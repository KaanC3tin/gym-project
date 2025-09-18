import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HomeHero = ({ setSelectedPage }: Props) => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGsapFadeIn(headingRef, { offsetY: 60 });
  useGsapFadeIn(actionsRef, { offsetY: 40, delay: 0.1 });
  useGsapFadeIn(imageRef, { offsetX: 80 });

  return (
    <div className="mx-auto flex w-5/6 flex-col items-center justify-between gap-16 md:flex-row md:gap-12">
      <div className="z-10 mt-24 flex w-full max-w-xl flex-col md:mt-32 md:basis-3/5">
        <div ref={headingRef}>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:-z-10 md:before:content-evolvetext">
              <img alt="home heading" src={HomePageText} />
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-800 md:text-start">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the body shape you dream of.
            <br />
            Start your transformation today.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-10" ref={actionsRef}>
          <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline transition duration-300 hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            Learn More
          </AnchorLink>
        </div>
      </div>

      <div className="flex w-full justify-center md:basis-2/5 md:justify-end" ref={imageRef}>
        <img src={HomePageGraphic} alt="training graphic" className="w-full max-w-sm" />
      </div>
    </div>
  );
};

export default HomeHero;

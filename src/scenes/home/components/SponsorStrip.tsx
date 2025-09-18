import { useRef } from "react";

import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";

const sponsors = [
  { src: SponsorRedBull, alt: "Red Bull" },
  { src: SponsorForbes, alt: "Forbes" },
  { src: SponsorFortune, alt: "Fortune" },
];

const SponsorStrip = () => {
  const stripRef = useRef<HTMLDivElement | null>(null);
  useGsapFadeIn(stripRef, { offsetY: 40 });

  return (
    <div className="h-[150px] w-full bg-primary-100 py-10">
      <div className="mx-auto flex w-5/6 justify-center md:justify-between" ref={stripRef}>
        <div className="flex w-full max-w-2xl items-center justify-between gap-10">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.alt}
              src={sponsor.src}
              alt={`${sponsor.alt} sponsor`}
              className="max-h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorStrip;

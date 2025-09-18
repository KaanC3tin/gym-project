import { useRef } from "react";
import { Icon } from "@iconify/react";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import useSectionObserver from "@/hooks/useSectionObserver";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import { BenefitType, SelectedPage } from "@/shared/types";

import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: BenefitType[] = [
  {
    icon: <Icon icon="solar:user-linear" height={36} />, 
    title: "State of the Art Facilities",
    description:
      "Train in a modern environment equipped with high-end machines, functional spaces, and everything you need to stay motivated.",
  },
  {
    icon: <Icon icon="heroicons:user-group" height={36} />,
    title: "Hundreds of Diverse Classes",
    description:
      "From high-intensity sessions to mindful yoga, our coaches deliver engaging classes tailored to every skill level.",
  },
  {
    icon: <Icon icon="vaadin:academy-cap" height={36} />,
    title: "Expert and Pro Trainers",
    description:
      "Our certified trainers craft personalised programs, ensuring you progress safely while building lasting healthy habits.",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const graphicRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useSectionObserver(sectionRef, SelectedPage.Benefits, setSelectedPage);
  useGsapFadeIn(headerRef, { offsetY: 50 });
  useGsapFadeIn(listRef, { offsetY: 40, delay: 0.1 });
  useGsapFadeIn(graphicRef, { offsetY: 40, delay: 0.2 });
  useGsapFadeIn(descriptionRef, { offsetY: 40, delay: 0.3 });

  return (
    <section id="benefits" ref={sectionRef} className="mx-auto w-5/6 py-20">
      <div ref={headerRef} className="md:w-3/5">
        <HText>MORE THAN JUST A GYM</HText>
        <p className="my-5 text-sm text-gray-700">
          We offer world-class fitness equipment, passionate trainers, and a vibrant community ready to support your goals.
          Every member receives the attention and care needed to succeed.
        </p>
      </div>

      <ul ref={listRef} className="mt-12 grid gap-8 md:grid-cols-3">
        {benefits.map((benefit) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            onSelect={setSelectedPage}
          />
        ))}
      </ul>

      <div className="mt-20 items-center justify-between gap-16 md:mt-28 md:flex">
        <div className="mx-auto mb-12 max-w-sm md:mb-0" ref={graphicRef}>
          <img src={BenefitsPageGraphic} alt="Members training" className="w-full" />
        </div>

        <div className="md:basis-1/2" ref={descriptionRef}>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:-z-10 before:content-abstractwaves">
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
              </HText>
            </div>
          </div>

          <p className="my-5 text-sm text-gray-700">
            Join a space where progress is celebrated and community matters. Whether you’re lifting for the first time or
            training for competition, we’ve got a program designed for you.
          </p>
          <p className="mb-8 text-sm text-gray-700">
            Our coaching team keeps you accountable, inspired, and informed every step of the way. Together we build habits
            that last a lifetime.
          </p>

          <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

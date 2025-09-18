import { useRef } from "react";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import useSectionObserver from "@/hooks/useSectionObserver";
import HText from "@/shared/HText";
import { ClassesType, SelectedPage } from "@/shared/types";

import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: ClassesType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and confidence with progressive sessions that teach proper technique while pushing your limits safely.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find balance and flexibility through guided practices that combine mindful breathing, mobility, and calm.",
    image: image2,
  },
  {
    name: "Ab Core Training Classes",
    description:
      "Focus on stability and posture with core-centric workouts tailored to strengthen your midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Discover dynamic group sessions featuring functional movements, circuits, and plenty of sweat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "High-energy classes that mix cardio and strength for a full-body burn in a supportive environment.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Personalised coaching in small groups to help you master fundamentals and advance at your own pace.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useSectionObserver(sectionRef, SelectedPage.OurClasses, setSelectedPage);
  useGsapFadeIn(headerRef, { offsetY: 50 });
  useGsapFadeIn(listRef, { offsetY: 40, delay: 0.1, once: false, threshold: 0.2 });

  return (
    <section id="ourclasses" ref={sectionRef} className="w-full bg-primary-100 py-24">
      <div className="mx-auto w-5/6">
        <div ref={headerRef} className="md:w-3/5">
          <HText>OUR CLASSES</HText>
          <p className="py-5 text-sm text-gray-800">
            At KFitness, we offer a variety of classes designed to fit your goals. Whether you love high-intensity workouts or
            prefer mindful sessions, our expert trainers are ready to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul ref={listRef} className="flex w-[2800px] items-stretch whitespace-nowrap">
          {classes.map((item, index) => (
            <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;

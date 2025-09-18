import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import { SelectedPage } from "@/shared/types";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  onSelect: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, onSelect }: Props) => {
  const cardRef = useRef<HTMLLIElement | null>(null);
  useGsapFadeIn(cardRef, { offsetY: 40, duration: 0.6 });

  return (
    <li
      ref={cardRef}
      className="flex flex-col items-center rounded-md border-2 border-gray-100 px-6 py-12 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-100 bg-primary-100 text-secondary-500">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="my-3 text-sm text-gray-700">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline transition duration-300 hover:text-secondary-500"
        onClick={() => onSelect(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </li>
  );
};

export default Benefit;

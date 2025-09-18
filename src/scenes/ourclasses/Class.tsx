import { useRef } from "react";

import useGsapFadeIn from "@/hooks/useGsapFadeIn";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const itemRef = useRef<HTMLLIElement | null>(null);
  useGsapFadeIn(itemRef, { offsetY: 50, once: false, threshold: 0.2 });

  return (
    <li
      ref={itemRef}
      className="relative mx-5 inline-block h-[380px] w-[450px] overflow-hidden rounded-lg shadow-md"
    >
      <div className="absolute inset-0 z-30 flex h-full w-full flex-col items-center justify-center bg-primary-500/90 px-5 text-center opacity-0 transition duration-500 hover:opacity-100">
        <p className="text-2xl font-bold text-white">{name}</p>
        {description && <p className="mt-5 text-sm text-white">{description}</p>}
      </div>
      <img src={image} alt={name} className="h-full w-full object-cover" />
    </li>
  );
};

export default Class;

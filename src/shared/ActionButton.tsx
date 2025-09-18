import type { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => (
  <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 font-semibold text-white transition duration-500 hover:bg-primary-500 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
  >
    {children}
  </AnchorLink>
);

export default ActionButton;

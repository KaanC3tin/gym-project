import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.replace(/\s+/g, "").toLowerCase() as SelectedPage;
  const isActive = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      className={`text-sm font-semibold transition duration-500 hover:text-primary-300 ${
        isActive ? "text-primary-500" : "text-gray-900"
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

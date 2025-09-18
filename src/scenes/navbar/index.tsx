import { useState } from "react";
import { Icon } from "@iconify/react";

import Logooo from "@/assets/Logooo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NAV_LINKS = ["Home", "Benefits", "Our Classes", "Contact Us"];

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-primary-100" : "bg-primary-100 drop-shadow";

  const handleSelectPage = (page: SelectedPage) => {
    setSelectedPage(page);
    if (!isAboveMediumScreens) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${navbarBackground} fixed top-0 z-30 w-full py-6 transition-colors`}>
      <div className="mx-auto flex w-5/6 items-center justify-between gap-4">
        <img src={Logooo} alt="irongym logo" className="h-[66px] w-[66px]" />

        {isAboveMediumScreens ? (
          <div className="flex w-full items-center justify-between gap-10">
            <nav className="flex items-center gap-8 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link}
                  page={link}
                  selectedPage={selectedPage}
                  setSelectedPage={handleSelectPage}
                />
              ))}
            </nav>

            <div className="flex items-center gap-8 text-sm font-semibold">
              <button type="button" className="transition hover:text-primary-500">
                Sign In
              </button>
              <ActionButton setSelectedPage={handleSelectPage}>Become A Member</ActionButton>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="rounded-full bg-secondary-500 p-2 text-white transition hover:bg-secondary-400"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <Icon icon="mdi:menu" width={20} height={20} />
          </button>
        )}
      </div>

      {!isAboveMediumScreens && isMenuOpen && (
        <aside className="fixed right-0 top-0 z-40 flex h-full w-[280px] flex-col gap-10 bg-primary-100 px-8 pb-10 pt-16 shadow-xl">
          <button
            type="button"
            className="ml-auto rounded-full p-2 text-gray-800 transition hover:bg-primary-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon icon="material-symbols-light:close" width={24} height={24} />
          </button>

          <nav className="flex flex-col gap-6 text-lg font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={handleSelectPage}
              />
            ))}
          </nav>

          <ActionButton setSelectedPage={handleSelectPage}>Become A Member</ActionButton>
        </aside>
      )}
    </header>
  );
};

export default Navbar;

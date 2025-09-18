import { MutableRefObject, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

const useSectionObserver = (
  ref: MutableRefObject<HTMLElement | null>,
  page: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void,
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedPage(page);
          }
        });
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [page, ref, setSelectedPage]);
};

export default useSectionObserver;

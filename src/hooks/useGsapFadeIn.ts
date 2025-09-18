import { MutableRefObject, useEffect } from "react";
import gsap, { ScrollTrigger } from "gsap";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  offsetY?: number;
  offsetX?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  once?: boolean;
  threshold?: number;
  trigger?: Element | null;
};

const DEFAULTS: Required<Omit<Options, "trigger" | "ease" | "offsetX" | "offsetY">> = {
  delay: 0,
  duration: 0.9,
  once: true,
  threshold: 0.35,
};

const useGsapFadeIn = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  {
    offsetY = 40,
    offsetX = 0,
    delay = DEFAULTS.delay,
    duration = DEFAULTS.duration,
    ease = "power3.out",
    once = DEFAULTS.once,
    threshold = DEFAULTS.threshold,
    trigger,
  }: Options = {},
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const tween = gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: offsetY,
        x: offsetX,
      },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        delay,
        duration,
        ease,
      },
    );

    const triggerElement = trigger ?? element;
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      threshold,
      once,
      onEnter: () => {
        tween.play();
      },
      onLeaveBack: () => {
        if (!once) {
          tween.reverse();
        }
      },
    });

    return () => {
      scrollTrigger.kill();
      tween.kill();
    };
  }, [delay, duration, ease, offsetX, offsetY, once, ref, threshold, trigger]);
};

export default useGsapFadeIn;

/*
 * A lightweight GSAP-inspired utility tailored for this project.
 * It provides the handful of animation primitives that are required by the UI
 * (fade/translate/scale tweens triggered on scroll) while keeping the API
 * compatible with the parts of GSAP that we use in the components.
 */

type AnimationTarget = Element | Element[] | NodeListOf<Element>;

type Easing = (progress: number) => number;

type TweenState = {
  autoAlpha?: number;
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: number;
};

type TweenLifecycle = {
  onStart?: () => void;
  onComplete?: () => void;
};

type TweenOptions = TweenLifecycle & {
  duration?: number;
  delay?: number;
  ease?: string | Easing;
};

type TweenConfiguration = TweenOptions & TweenState;

type ScrollTriggerConfig = {
  trigger: Element;
  threshold?: number;
  once?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onLeaveBack?: () => void;
};

const DEFAULT_DURATION = 0.8;
const DEFAULT_DELAY = 0;

const DEFAULT_STATE: Required<TweenState> = {
  autoAlpha: 1,
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: 0,
};

const easeMap: Record<string, Easing> = {
  linear: (t) => t,
  "power1.out": (t) => 1 - Math.pow(1 - t, 1),
  "power2.out": (t) => 1 - Math.pow(1 - t, 2),
  "power3.out": (t) => 1 - Math.pow(1 - t, 3),
};

const resolveEase = (ease?: string | Easing): Easing => {
  if (typeof ease === "function") {
    return ease;
  }
  if (!ease) {
    return easeMap["power3.out"];
  }
  return easeMap[ease] ?? easeMap["linear"];
};

const toArray = (target: AnimationTarget): Element[] => {
  if (target instanceof Element) {
    return [target];
  }
  return Array.from(target);
};

const getDefaultFor = (key: keyof TweenState): number => {
  switch (key) {
    case "scale":
    case "scaleX":
    case "scaleY":
      return 1;
    case "autoAlpha":
    case "opacity":
      return 1;
    default:
      return 0;
  }
};

const recognisedKeys: Array<keyof TweenState> = [
  "autoAlpha",
  "opacity",
  "x",
  "y",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
];

const extractState = (vars: Record<string, unknown>): TweenState => {
  const state: TweenState = {};
  recognisedKeys.forEach((key) => {
    const value = vars[key as keyof typeof vars];
    if (typeof value === "number") {
      state[key] = value;
    } else if (typeof value === "string") {
      const parsed = Number.parseFloat(value);
      if (!Number.isNaN(parsed)) {
        state[key] = parsed;
      }
    }
  });
  return state;
};

const interpolate = (
  start: TweenState,
  end: TweenState,
  progress: number,
): TweenState => {
  const state: TweenState = {};
  recognisedKeys.forEach((key) => {
    const startValue = start[key] ?? getDefaultFor(key);
    const endValue = end[key] ?? startValue;
    const interpolated = startValue + (endValue - startValue) * progress;
    state[key] = interpolated;
  });
  return state;
};

const applyTweenState = (element: Element, state: TweenState) => {
  const {
    autoAlpha,
    opacity,
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotate,
  } = state;

  if (autoAlpha !== undefined) {
    const clamped = Math.max(0, Math.min(1, autoAlpha));
    (element as HTMLElement).style.opacity = `${clamped}`;
    (element as HTMLElement).style.visibility = clamped === 0 ? "hidden" : "visible";
  }

  if (opacity !== undefined) {
    (element as HTMLElement).style.opacity = `${opacity}`;
  }

  const transforms: string[] = [];
  if (x !== undefined || y !== undefined) {
    transforms.push(`translate3d(${x ?? 0}px, ${y ?? 0}px, 0)`);
  }
  if (scale !== undefined) {
    transforms.push(`scale(${scale})`);
  }
  if (scaleX !== undefined || scaleY !== undefined) {
    transforms.push(`scale(${scaleX ?? 1}, ${scaleY ?? 1})`);
  }
  if (rotate !== undefined) {
    transforms.push(`rotate(${rotate}deg)`);
  }
  if (transforms.length > 0) {
    (element as HTMLElement).style.transform = transforms.join(" ");
  }
};

class SimpleTween {
  private readonly element: Element;
  private readonly fromState: TweenState;
  private readonly toState: TweenState;
  private readonly duration: number;
  private readonly delay: number;
  private readonly ease: Easing;
  private readonly lifecycle: TweenLifecycle;

  private frameId?: number;
  private startTime = 0;
  private direction: 1 | -1 = 1;

  constructor(
    element: Element,
    fromState: TweenState,
    toState: TweenState,
    options: TweenOptions = {},
  ) {
    this.element = element;
    this.fromState = fromState;
    this.toState = toState;
    this.duration = (options.duration ?? DEFAULT_DURATION) * 1000;
    this.delay = (options.delay ?? DEFAULT_DELAY) * 1000;
    this.ease = resolveEase(options.ease);
    this.lifecycle = { onComplete: options.onComplete, onStart: options.onStart };
  }

  play() {
    this.direction = 1;
    this.start();
    return this;
  }

  reverse() {
    this.direction = -1;
    this.start();
    return this;
  }

  kill() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
      this.frameId = undefined;
    }
  }

  private start() {
    this.kill();

    const origin = this.direction === 1 ? this.fromState : this.toState;
    const destination = this.direction === 1 ? this.toState : this.fromState;

    const originState = { ...DEFAULT_STATE, ...origin };
    const destinationState = { ...DEFAULT_STATE, ...destination };

    applyTweenState(this.element, originState);
    this.lifecycle.onStart?.();

    const originTime = performance.now();
    this.startTime = originTime + this.delay;

    const step = (time: number) => {
      if (time < this.startTime) {
        this.frameId = requestAnimationFrame(step);
        return;
      }

      const elapsed = Math.min(time - this.startTime, this.duration);
      const progress = this.duration === 0 ? 1 : elapsed / this.duration;
      const eased = this.ease(progress);
      const current = interpolate(originState, destinationState, eased);
      applyTweenState(this.element, current);

      if (elapsed < this.duration) {
        this.frameId = requestAnimationFrame(step);
        return;
      }

      this.lifecycle.onComplete?.();
    };

    this.frameId = requestAnimationFrame(step);
  }
}

class TweenGroup {
  private readonly tweens: SimpleTween[];

  constructor(tweens: SimpleTween[]) {
    this.tweens = tweens;
  }

  play() {
    this.tweens.forEach((tween) => tween.play());
    return this;
  }

  reverse() {
    this.tweens.forEach((tween) => tween.reverse());
    return this;
  }

  kill() {
    this.tweens.forEach((tween) => tween.kill());
  }
}

const sanitiseOptions = (options: TweenConfiguration): [TweenState, TweenOptions] => {
  const { duration, delay, ease, onComplete, onStart, ...state } = options;
  return [state, { duration, delay, ease, onComplete, onStart }];
};

const createTween = (
  target: AnimationTarget,
  fromVars: Record<string, unknown>,
  toVars: TweenConfiguration,
) => {
  const elements = toArray(target);
  const [toState, tweenOptions] = sanitiseOptions(toVars);
  const fromState = extractState(fromVars);
  const targetState = extractState(toState);

  const tweens = elements.map(
    (element) => new SimpleTween(element, fromState, targetState, tweenOptions),
  );
  return new TweenGroup(tweens);
};

const set = (target: AnimationTarget, vars: Record<string, unknown>) => {
  const elements = toArray(target);
  const state = extractState(vars);
  elements.forEach((element) => applyTweenState(element, { ...DEFAULT_STATE, ...state }));
};

const to = (target: AnimationTarget, vars: TweenConfiguration) => {
  const elements = toArray(target);
  const [toState, tweenOptions] = sanitiseOptions(vars);
  const currentState = extractState(toState);
  const tweens = elements.map(
    (element) => new SimpleTween(element, currentState, currentState, tweenOptions),
  );
  return new TweenGroup(tweens).play();
};

class SimpleScrollTrigger {
  private readonly observer: IntersectionObserver;
  private readonly config: ScrollTriggerConfig;
  private hasEntered = false;

  constructor(config: ScrollTriggerConfig) {
    this.config = config;
    const threshold = config.threshold ?? 0.2;
    this.observer = new IntersectionObserver(this.handle, { threshold });
    this.observer.observe(config.trigger);
  }

  kill() {
    this.observer.disconnect();
  }

  private handle = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!this.hasEntered) {
          this.config.onEnter?.();
          if (this.config.once) {
            this.hasEntered = true;
            this.kill();
          }
        }
      } else {
        if (this.hasEntered) {
          this.config.onLeaveBack?.();
        } else {
          this.config.onLeave?.();
        }
      }
    });
  };
}

const ScrollTrigger = {
  create: (config: ScrollTriggerConfig) => new SimpleScrollTrigger(config),
  init: () => undefined,
};

type Plugin = { init?: (gsapInstance: typeof gsap) => void };

const registerPlugin = (...plugins: Plugin[]) => {
  plugins.forEach((plugin) => plugin?.init?.(gsap));
};

const gsap = {
  fromTo: createTween,
  to,
  set,
  registerPlugin,
  utils: {
    toArray,
  },
};

export type { TweenConfiguration, TweenState, ScrollTriggerConfig };
export { ScrollTrigger };
export default gsap;

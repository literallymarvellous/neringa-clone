import { gsap, ScrollTrigger } from "./animations";

gsap.registerPlugin(ScrollTrigger);

export const showMenu = () => {
  return gsap.fromTo(
    ".fx",
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 0.75 }
  );
};

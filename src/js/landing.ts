import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const showMenu = () => {
  return gsap.fromTo(
    ".fx",
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 0.75 }
  );
};

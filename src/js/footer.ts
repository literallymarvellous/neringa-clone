import { gsap, ScrollTrigger } from "./animations";

gsap.registerPlugin(ScrollTrigger);

export const footerShow = () => {
  return gsap.fromTo(
    ".footer",
    { y: 350 },
    {
      y: 0,
      scrollTrigger: {
        trigger: ".contact",
        start: "bottom bottom",
        // markers: true,
        scrub: true,
      },
    }
  );
};

export const footerLoad = () => {
  return gsap.fromTo(
    ".footer",
    { opacity: 0 },
    {
      opacity: 1,
      delay: 5,
    }
  );
};

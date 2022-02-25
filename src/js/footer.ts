import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

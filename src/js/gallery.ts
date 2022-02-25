import { Splide } from "@splidejs/splide";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 2,
    autoStart: true,
    pauseOnFocus: true,
    pauseOnHover: false,
  },
});

export const galleryShow = () => {
  return gsap.fromTo(
    ".gallery",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".gallery",
        start: "center bottom",
      },
    }
  );
};

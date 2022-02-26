import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const landingWrapper = document.querySelector(
  ".landing-wrapper"
) as HTMLDivElement;

export const landingIncreaseEffect = () => {
  if (window.innerWidth >= 1024) {
    return gsap.fromTo(
      ".landing-wrapper",
      {
        backgroundSize: "100% 100%",
      },
      {
        backgroundSize: "125% 100%",
        scrollTrigger: {
          trigger: ".landing-wrapper",
          start: "top top",
          // markers: true,
          scrub: true,
          toggleActions: "restart none none none",
        },
      }
    );
  }
};

export const stcikyMenu = () => {
  return gsap.to(".body-container", {
    willChange: "transform",
    scrollTrigger: {
      trigger: ".contact",
      start: "100% bottom",
      // markers: true,
      toggleActions: "play none none reverse",
    },
  });
};

export const buttonColorChange = () => {
  return gsap.to(".bottom-left", {
    backgroundColor: "black",
    color: "white",
    scrollTrigger: {
      trigger: ".landing-wrapper",
      start: "bottom 90%",
      // markers: true,
      toggleActions: "restart none none reverse",
    },
  });
};

export const hamburgerColorChange = () => {
  return gsap.to(".ham", {
    color: "black",
    fill: "black",
    scrollTrigger: {
      trigger: ".landing-wrapper",
      start: "bottom top",
      // markers: true,
      toggleActions: "restart none none reverse",
    },
  });
};

export const menuListColorChange = () => {
  return gsap.to(".suites-list", {
    color: "black",
    scrollTrigger: {
      trigger: ".landing-wrapper",
      start: "55% top",
      // markers: true,
      toggleActions: "restart none none reverse",
    },
  });
};

export const iconsColorChange = () => {
  return gsap.to(".ic", {
    fill: "black",
    scrollTrigger: {
      trigger: ".landing-wrapper",
      start: "bottom 85%",
      // markers: true,
      toggleActions: "restart none none reverse",
    },
  });
};

export { gsap, ScrollTrigger };

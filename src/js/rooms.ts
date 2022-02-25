import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roomTypes = document.querySelectorAll(
  ".room-type"
) as NodeListOf<HTMLSpanElement>;
const roomImageContainers = document.querySelectorAll(
  ".room-img__container"
) as NodeListOf<HTMLDivElement>;

export const showRoomImage = () => {
  roomTypes.forEach((el, i) => {
    el.addEventListener("mouseenter", () => {
      el.classList.add("room-img-show");
      roomImageContainers.forEach((ele, j) => {
        if (i == j) {
          ele.style.display = "block";
          ele.style.zIndex = "4";
          ele.addEventListener("mouseenter", () => {
            el.classList.add("room-img-show");
            ele.style.display = "block";
          });
        } else {
          ele.style.display = "";
        }
      });
    });

    el.addEventListener("mouseleave", () => {
      el.classList.remove("room-img-show");
      el.style.zIndex = "";

      roomImageContainers.forEach((ele, j) => {
        ele.style.display = "";
        ele.addEventListener("mouseleave", () => {
          el.classList.remove("room-img-show");
          ele.style.display = "";
        });
      });
    });
  });
};

export const showhotel = () => {
  return gsap.fromTo(
    ".rooms__hotel",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".rooms__hotel",
        start: "bottom bottom",
        // markers: true,
        toggleClass: "loading-container",
        once: true,
      },
    }
  );
};

export const showRooms = () => {
  return gsap.fromTo(
    ".landing-lc",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".rooms__types",
        start: "15% bottom",
        // markers: true,
        toggleClass: { targets: ".landing-lc", className: "loading-container" },
        once: true,
      },
    }
  );
};

export const showRoomInfo = () => {
  return gsap.fromTo(
    ".info-p",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".info-p",
        start: "bottom bottom",
        toggleClass: { targets: ".room__info", className: "loading-container" },
        once: true,
        markers: true,
      },
    }
  );
};

export const showRooomButton = () => {
  return gsap.fromTo(
    ".btn-a",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".btn-a",
        start: "bottom bottom",
        toggleClass: {
          targets: ".room__button",
          className: "loading-container",
        },
        once: true,
        markers: true,
      },
    }
  );
};

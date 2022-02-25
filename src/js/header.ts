const hamburger = document.querySelector(".menu__hamburger") as HTMLDivElement;
const closeIcon = document.querySelector(".menu__close") as HTMLDivElement;
const suites = document.querySelector(".suites") as HTMLElement;
const bookButton = document.querySelector(".book") as HTMLDivElement;
const icons = document.querySelector(".icons") as HTMLElement;
const headingMobile = document.querySelector(".heading") as HTMLDivElement;
const suitesMobile = document.querySelector(
  ".suites-list-mobile"
) as HTMLUListElement;
const logo = document.querySelector(".logo") as HTMLDivElement;
const logoMobile = document.querySelector(".logo-mobile") as HTMLDivElement;
const chevron = document.querySelectorAll(
  ".chevron"
) as NodeListOf<HTMLElement>;
const features = document.querySelectorAll(
  ".features"
) as NodeListOf<HTMLUListElement>;
const mobileMenu = document.querySelector(".mobile-menu") as HTMLDivElement;
const suitesLists = document.querySelectorAll(
  ".suites-li"
) as NodeListOf<HTMLLIElement>;
const showReel = document.querySelector(".showreel") as HTMLDivElement;
const showList = document.querySelector(".show-list") as HTMLDivElement;
const iconsMobile = document.querySelectorAll(
  ".icons-mobile"
) as NodeListOf<HTMLElement>;

export const menuOpen = () => {
  hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
    suites.classList.add("hidden");
    bookButton.classList.add("hidden");
    icons.classList.add("hidden");
    headingMobile.classList.remove("hidden");
    suitesMobile.classList.remove("hidden");
    logoMobile.classList.remove("hidden");
    logo.classList.add("black");
    mobileMenu.classList.remove("hidden");
  });
};

export const menuClose = () => {
  closeIcon.addEventListener("click", () => {
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
    suites.classList.remove("hidden");
    bookButton.classList.remove("hidden");
    icons.classList.remove("hidden");
    headingMobile.classList.add("hidden");
    suitesMobile.classList.add("hidden");
    logo.classList.remove("black");
    mobileMenu.classList.add("hidden");
  });
};

export const dropDown = () => {
  chevron.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      features.forEach((ele, j) => {
        if (i === j) {
          ele.classList.toggle("hidden");
        }
      });
      iconsMobile.forEach((ele, j) => {
        if (i === j) {
          ele.classList.toggle("hidden");
        }
      });
    });
  });
};

export const showSuites = () => {
  suitesLists.forEach((el, i) => {
    el.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 1024) {
        features.forEach((ele, j) => {
          if (i === j) {
            ele.classList.remove("hidden");
            ele.style.zIndex = "14";
            el.style.zIndex = "15";
          }
        });
        iconsMobile.forEach((ele, j) => {
          if (i === j) {
            ele.classList.remove("hidden");
            ele.style.zIndex = "14";
          }
        });

        const newlist = el.children[1].cloneNode(true);
        const newicons = el.children[2].cloneNode(true);

        if (!showList.firstChild) {
          showList.appendChild(newlist);
          showList.appendChild(newicons);
          showList.style.zIndex = "14";
        }
      }
    });

    el.addEventListener("mouseleave", (e) => {
      if (
        (e.clientX < 450 || e.clientX > 700) &&
        showList.firstChild &&
        showList.lastChild
      ) {
        showList.removeChild(showList.firstChild);
        showList.removeChild(showList.lastChild);

        features.forEach((ele, j) => {
          ele.classList.add("hidden");
        });
        iconsMobile.forEach((ele, j) => {
          ele.classList.remove("hidden");
        });
      }
    });
  });
};

const slider = document.querySelector(".news-wrapper") as HTMLDivElement;
const innerSlider = document.querySelector(".news-slider") as HTMLDivElement;
const btnRight = document.querySelector(".btn-right") as HTMLButtonElement;
const btnLeft = document.querySelector(".btn-left") as HTMLButtonElement;
const secondDiv = document.querySelector(".second") as HTMLDivElement;

let count = 0;

export const newsSlider = () => {
  btnRight.addEventListener("click", (e: MouseEvent) => {
    // if (innerSlider.offsetWidth < 600) {
    //   count++;
    //   if (count == 2) {
    //     count = 0;
    //     btnRight.classList.add("hidden");
    //   }
    //   innerSlider.style.transform = `translateX(${-50 * count}%)`;
    //   btnLeft.classList.remove("hidden");
    // } else {
    //   innerSlider.style.transform = `translateX(-100%)`;
    //   btnLeft.classList.toggle("hidden");
    //   btnRight.classList.toggle("hidden");
    // }

    innerSlider.style.transform = `translateX(-100%)`;
    btnLeft.classList.toggle("hidden");
    btnRight.classList.toggle("hidden");
  });

  btnLeft.addEventListener("click", (e: MouseEvent) => {
    innerSlider.style.transform = `translateX(0%)`;
    btnLeft.classList.toggle("hidden");
    btnRight.classList.toggle("hidden");
  });
};

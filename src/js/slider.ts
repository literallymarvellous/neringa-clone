const innerSlider = document.querySelector(".news-slider") as HTMLDivElement;
const btnRight = document.querySelector(".btn-right") as HTMLButtonElement;
const btnLeft = document.querySelector(".btn-left") as HTMLButtonElement;

export const newsSlider = () => {
  btnRight.addEventListener("click", (e: MouseEvent) => {
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

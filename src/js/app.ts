import {
  buttonColorChange,
  hamburgerColorChange,
  iconsColorChange,
  landingIncreaseEffect,
  menuListColorChange,
  stcikyMenu,
} from "./animations";
import { footerShow } from "./footer";
import { menuOpen, menuClose, dropDown, showSuites } from "./header";
import { showMenu } from "./landing";
import {
  showhotel,
  showRoomImage,
  showRoomInfo,
  showRooms,
  showRooomButton,
} from "./rooms";
import { newsSlider } from "./slider";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { galleryShow, splide } from "./gallery";

showMenu();
menuOpen();
menuClose();
dropDown();
showSuites();
showRoomImage();
stcikyMenu();
landingIncreaseEffect();
buttonColorChange();
hamburgerColorChange();
menuListColorChange();
iconsColorChange();
newsSlider();
footerShow();
showhotel();
showRooms();
galleryShow();
showRoomInfo();
showRooomButton();

splide.mount({ AutoScroll });

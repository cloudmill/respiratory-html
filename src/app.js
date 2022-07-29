import "./styles/app.scss";

import AOS from "aos";
import parsley from "parsleyjs";
import "parsleyjs/dist/i18n/ru";

import { wait } from "./scripts/wait";
import "./scripts/mobile-menu";
import "./scripts/header-modals";
import "./scripts/date-picker";
import "./scripts/partners-modal";

import * as scrollPage from "./scripts/scrollPage";
import * as noTransitionChild from "./scripts/noTransitionChild";
import * as preloader from "./scripts/preloader";
import * as top from "./scripts/top";
import * as drop from "./scripts/drop";
import * as slider from "./scripts/slider";
import * as series from "./scripts/series";
import * as test from "./scripts/test";
import * as header from "./scripts/header";
import * as tab from "./scripts/tab";
import * as select from "./scripts/select";
import * as swiperSlider from "./scripts/swiperSlider";
import * as rails from "./scripts/rails";
import * as aside from "./scripts/aside";
import * as gallery from "./scripts/gallery";
import * as reslider from "./scripts/reslider";
import * as fslider from "./scripts/fslider";
import * as history from "./scripts/history";
import * as sideModal from "./scripts/sideModal";
import * as unit from "./scripts/unit";
import * as filters from "./scripts/filters";

import forms from "./scripts/forms";
import { headerOnScroll } from "./scripts/header-on-scroll";

import { examplesSlider } from "./scripts/examplesSlider";

import "./scripts/backend";

AOS.init();

addEventListener("DOMContentLoaded", () => {
  if (preloader.exist()) {
    scrollPage.lock();
  }

  drop.start();
  slider.start();
  series.start();
  test.start();
  header.start();
  examplesSlider();
  tab.start();
  select.start();
  swiperSlider.start();
  rails.start();
  // aside.start();
  gallery.start();
  reslider.start();
  fslider.start();
  history.start();

  sideModal.start();
  unit.start();

  filters.start();

  forms();
  headerOnScroll();
});

addEventListener("load", async () => {
  noTransitionChild.remove();

  if (preloader.exist()) {
    await preloader.progress();

    top.slider.init();
    top.slider.pause();

    await wait(500);

    top.parallax.start();
    top.zoom.out();

    scrollPage.toTop();
    scrollPage.unlock();

    top.controls.start();

    preloader.hide();

    await wait(1000);

    top.reveal.start();

    await wait(1000);

    top.slider.play();
    top.controls.startProgress();
    top.zoom.in();
  }

  const aboutVideo = document.querySelector("[data-start-video]");

  if (aboutVideo) {

    document.querySelector('[data-start-video]').addEventListener('canplaythrough', () => {

      document.querySelector('[data-start-video]').play();
      document.querySelector('[data-start-video]').setAttribute('autoplay', '');
  
    })
    
  }
});

addEventListener("beforeunload", () => {
  scrollPage.toLeft();
});

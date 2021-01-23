import * as utils from "./utils";
import imageData from "./Data";

const state = {
  timeId: null,
  timeoutId: null,
  tick: 1,
  prefix: "image",
  speed: 6000,
};

function slide(next = true) {
  state.prefix = getImagePrefix();

  if (next) state.tick++;
  else state.tick--;

  if (next && state.tick === imageData.length + 1) {
    state.tick = 1;
  }

  if (!next && state.tick === 0) {
    state.tick = imageData.length;
  }

  view.imgContainer.classList = `hero__left ${state.prefix}-${state.tick}`;
  view.description.innerHTML = imageData[state.tick - 1].description;
}

function afterManualSlide() {
  clearTimeout(state.timeoutId);
  stop();
  state.timeoutId = setTimeout(() => {
    start();
  }, state.speed);
}

function start() {
  loop();
}

function stop() {
  clearInterval(state.timeId);
}

function loop() {
  state.timeId = setInterval(() => {
    slide();
  }, state.speed);
}

// start();

const view = utils.createViewLayer();

view.hamburger.addEventListener("click", handleMenu);
view.next.addEventListener("click", handleNext);
view.prev.addEventListener("click", handlePrev);

function handleMenu(e) {
  e.preventDefault();

  e.target.classList.toggle("hamburger--transform");

  transformHamburger();

  view.nav.classList.toggle("nav--hide");

  view.overlay.classList.toggle("overlay--hide");
}

function handleNext(e) {
  slide();
  afterManualSlide();
}

function handlePrev(e) {
  slide(false);
  afterManualSlide();
}

function transformHamburger() {
  view.lines.forEach((line) =>
    line.classList.toggle("hamburger__line--transform")
  );
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobile) {
  view.imgContainer.classList = `hero__left ${getImagePrefix()}-1`;
}

function getImagePrefix() {
  return isMobile() ? "image-sm" : "image";
}

start();

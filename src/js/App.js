import * as utils from "./utils";

const view = utils.createViewLayer();

view.hamburger.addEventListener("click", handleMenu);

function handleMenu(e) {
  e.preventDefault();

  e.target.classList.toggle("hamburger--transform");

  transformHamburger();

  view.nav.classList.toggle("nav--hide");

  view.overlay.classList.toggle("overlay--hide");
}

function transformHamburger() {
  view.lines.forEach((line) =>
    line.classList.toggle("hamburger__line--transform")
  );
}

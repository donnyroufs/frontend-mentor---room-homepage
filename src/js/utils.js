const query = (selector) => document.querySelector(selector);
const queryAll = (selector) => document.querySelectorAll(selector);

export function createViewLayer() {
  return {
    hamburger: query(".hamburger"),
    lines: queryAll(".hamburger__line"),
    nav: query(".nav"),
    overlay: query(".overlay"),
  };
}

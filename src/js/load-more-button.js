export default class LoadMoreButton {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector(".load-button-label");
    refs.loader = refs.button.querySelector(".loader");
    
    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = "Load More";
    this.refs.loader.classList.add("is-hidden");
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = "Load...";
    this.refs.loader.classList.remove("is-hidden");
  }

  hide() {
    this.refs.button.classList.add("is-hidden");
  }

  show() {
    this.refs.button.classList.remove("is-hidden");
  }
}

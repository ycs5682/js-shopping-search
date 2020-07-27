export default {
  init(el) {
    if (!el) throw el;
    this.el = el;
    return this;
  },

  show() {
    this.el.style.display = '';
    return this;
  }
};

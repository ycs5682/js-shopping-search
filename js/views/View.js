export default {
  init(el) {
    if (!el) throw el;
    this.el = el;
    return this;
  },

  show() {
    this.el.style.display = '';
    return this;
  },

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
    return this;
  },

  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  }
};

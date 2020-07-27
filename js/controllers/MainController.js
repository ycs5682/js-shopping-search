import FormView from '../views/FormView.js';

export default {
  init() {
    FormView.setup(document.querySelector('form'));
  }
};

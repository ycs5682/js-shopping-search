import FormView from '../views/FormView.js';
import ResultView from '../views/ResultView.js';
import SearchModel from '../models/SearchModel.js';

const tag = '[MainController]';

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', (e) => this.onSubmit(e.detail.input))
      .on('@reset', () => this.onResetForm());

    ResultView.setup(document.querySelector('#search-result'));
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input);
    this.search(input);
  },

  onResetForm() {
    console.log(tag, 'onResetForm()');
  },

  search(query) {
    console.log(tag, 'search()', query);
    SearchModel.list(query).then((data) => {
      this.onSearchResult(data);
    });
  },

  onSearchResult(data) {
    ResultView.render(data);
  }
};

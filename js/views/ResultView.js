import View from './View.js';

const tag = '[ResultView]';
const ResultView = Object.create(View);

ResultView.messages = {
  NO_RESULT: '検索結果がありません'
};

ResultView.setup = function(el) {
  this.init(el);
};

ResultView.render = function(data = []) {
  console.log(tag, 'render()', data);
  this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT;
};

ResultView.getSearchResultsHtml = function(data) {
  debugger;
};

export default ResultView;

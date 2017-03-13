// @flow

type Plugin = { term: string, display: (result: Object) => void, actions: Object };

const plugin = ({ term, display, actions }: Plugin) => {
  console.log(term);
  console.log(display);
  console.log(actions);
};

module.exports = {
  fn: plugin,
};

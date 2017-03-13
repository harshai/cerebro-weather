// @flow

type Plugin = { term: string, display: (result: Object) => void, actions: Object };

const plugin = ({ term, display, actions }: Plugin) => {
  console.log(term);
};

module.exports = {
  fn: plugin,
};

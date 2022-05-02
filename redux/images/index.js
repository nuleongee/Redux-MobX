const { createStore } = require('redux');

const reducer = () => {};
const initState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initState);

console.log(store.getState());

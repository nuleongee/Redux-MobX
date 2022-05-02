const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default: // 오타 방지
      return prevState;
  }
};

const initState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initState);
store.subscribe(() => {
  console.log('changed');
});

console.log('1st', store.getState());

// action creator
const changeCompA = (data) => {
  // action
  return {
    type: 'CHANGE_COMP_A',
    data,
  };
};

store.dispatch(changeCompA('b'));

console.log('2nd', store.getState());

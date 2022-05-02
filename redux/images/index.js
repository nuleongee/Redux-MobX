const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        compA: action.data,
        compB: prevState?.compB ?? initState.compB,
        compC: prevState?.compC ?? initState.compC,
      };
    case 'CHANGE_COMP_B':
      return {
        compA: prevState?.compA ?? initState.compA,
        compB: action.data,
        compC: prevState?.compC ?? initState.compC,
      };
    case 'CHANGE_COMP_C':
      return {
        compA: prevState?.compA ?? initState.compA,
        compB: prevState?.compB ?? initState.compB,
        compC: action.data,
      };
  }
};
const initState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initState);

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

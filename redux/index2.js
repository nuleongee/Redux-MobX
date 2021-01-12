const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('changed');
});

console.log('1st', store.getState());

// action
const logIn = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

// -----------------------------------------

store.dispatch(
  logIn({
    id: 1,
    name: 'emsbn',
    admin: true,
  }),
);
console.log('2nd', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요.',
  }),
);
console.log('3rd', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: '안녕하세요. 두번째',
  }),
);
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());

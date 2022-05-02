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
    default: // 오타 방지
      return prevState;
  }
};

const initState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initState);
store.subscribe(() => {
  console.log('changed');
});

console.log('1st', store.getState());

// action creator
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

store.dispatch(logIn({ id: 1, name: 'nuleongee', admin: true }));

console.log('2nd', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '헬로우 리덕스',
  }),
);

console.log('3rd', store.getState());


store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: '바이 리덕스',
  }),
);

console.log('4th', store.getState());

store.dispatch(logOut());

console.log('5th', store.getState());

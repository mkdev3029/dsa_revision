// ACTIONS | REDUCER | STORE

// COUNTER
// INCREMENT AND DECREMENT

// action types
const INC_COUNT = "INC_COUNT";
const DEC_COUNT = "DEC_COUNT";

// actions
const increment = (data) => {
  return {
    type: INC_COUNT,
    payload: data,
  };
};

const decrement = (data) => {
  return {
    type: DEC_COUNT,
    payload: data,
  };
};

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { count: state.count + payload };
    case DEC_COUNT:
      return { count: state.count - payload };

    default:
      return state;
  }
};

var initialState = { count: 0 };

const store = new Store(reducer, initialState);

// IF WE WANT TO UPDATE THE STATE WE NEED DISAPTCH AN ACTION
// WE WILL GET THE DISAPTCH FUNCTION FROM STORE
// WE WILL PASS AN ACTION TO THE DISPATCH FUNCTION

store.dispatch(increment(1));

store.dispatch(increment(1));

console.log(store.getState());

store.dispatch(decrement(1));

console.log(store.getState());

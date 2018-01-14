import { createStore } from 'redux';

const increment = (count = 1) => ({
    type: 'increment',
    payload: count
});

const decrement = (count = 1) => ({
    type: 'decrement',
    payload: count
});

const set = (count = 1) => ({
    type: 'set',
    payload: count
});

const reset = () => ({
    type: 'reset'
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return { count: 0 };
        case 'set':
            return { count: action.payload };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment(2));
store.dispatch(increment(3));
store.dispatch(increment());

store.dispatch(decrement(2));
store.dispatch(decrement());

store.dispatch(reset());

store.dispatch(set(55));
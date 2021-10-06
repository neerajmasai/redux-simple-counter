const { createStore } = require("redux");

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { ...state, counter: state.counter+1 }
        case "Decrement":
            return { ...state, counter: state.counter-1 }
        case "Todo":
            return { ...state, todos: [...state.todos, action.payload] }
        default:
            return { ...state }
    }
}

const initState = { counter: 0 }
export const store = createStore(reducer, initState);

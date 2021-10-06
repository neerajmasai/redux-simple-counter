const { createStore } = require("redux");

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { ...state, counter: state.counter+1 }
        case "Decrement":
            return { ...state, counter: state.counter-1 }
        case "Add":
            return { ...state, counter: state.counter + action.payload }
        case "Subtract":
            return { ...state, counter: state.counter - action.payload }
        case "Multiply":
            return { ...state, counter: state.counter * action.payload }
        case "Divide":
            let result = 0;
            try {
                result = state.counter / action.payload;
                if(isNaN(result)){
                    throw new Error("Invalid Input");
                }
                else{
                    return { ...state, counter: result }
                }
            } catch (error) {
                console.log(error)
                alert("Cannot divide by zero!");
            }
            return { ...state }
        default:
            return { ...state }
    }
}

const initState = { counter: 0 }
export const store = createStore(reducer, initState);

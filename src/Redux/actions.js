//Actions
const increment = "Increment";
const decrement = "Decrement";

//Actions Creators
export const incrementCount = (value) => {
    return { type: increment, payload: value }
}

export const decrementCount = (value) => {
    return { type: decrement, payload: value }
}



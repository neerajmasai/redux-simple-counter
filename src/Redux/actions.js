//Actions
const increment = "Increment";
const decrement = "Decrement";
const addOperation = "Add";
const subtractOperation = "Subtract";
const multiplyOperation = "Multiply";
const divideOperation = "Divide";

//Actions Creators
export const incrementCount = (value) => {
    return { type: increment, payload: value }
}

export const decrementCount = (value) => {
    return { type: decrement, payload: value }
}

export const add = (value) => {
    return { type: addOperation, payload: value }
}

export const subtract = (value) => {
    return { type: subtractOperation, payload: value }
}

export const multiply = (value) => {
    return { type: multiplyOperation, payload: value }
}

export const divide = (value) => {
    return { type: divideOperation, payload: value }
}



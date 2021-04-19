import numbers from "../numbers/numbers"

export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
}

const handleNumber = (value, state) => {
    if(state.currentValue === "0" || state.currentValue === "lmao idk"){
        return { 
            currentValue: "" + value,
            operator: state.operator,
            previousValue: state.previousValue
        }
    }

    return  {
        currentValue: "" + state.currentValue + value,
        operator: state.operator,
        previousValue: state.previousValue
    }
}

const handleEqual = state => {
    if(!state.previousValue) return state;
    const rand = numbers.getRandomNumber(1, 3);

    switch (rand) {
        case 1:
            return {
                currentValue: "" + numbers.getRandomNumber(0, 69420),
                operator: null,
                previousValue: null
            }
        case 2:
            return {
                currentValue: "lmao idk",
                operator: null,
                previousValue: null
            }
        default:
            return getRealResult(state)
    }
}

const getRealResult = state => {
    const { currentValue, previousValue, operator } = state;
    if(!previousValue) return state;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(previousValue);
    const resetState = {
        operator: null,
        previousValue: null
    };
    let result;
    try {
        switch (operator) {
            case "+":
                result = prev + curr;
                break;
            case "-":
                result = prev - curr;
                break;
            case "x":
                result = prev * curr;
                break;
            default:
                result = prev / curr
                break;
        }
        return {
            currentValue: result,
            ...resetState
        }
    } catch (error) {   
        return {
            currentValue: "lmao idk",
            ...resetState
        }
    }
}

const handleOperator = (value, state) => {
    let result;
    if(state.operator){
        const getEqual = handleEqual(state);
        result = {
            operator: value,
            previousValue: getEqual.currentValue,
            currentValue: "0"
        }
    }
    else{
        result = {
            operator: value,
            previousValue: state.currentValue,
            currentValue: "0"
        }
    }
    return result;
}

const calculator = (type, value, state) => {
    switch (type) {
        case "num":
            return handleNumber(value, state);
        case "operator":
            return handleOperator(value, state);
        case "equal":
            return handleEqual(state);
        case "clear":
            return initialState;
        case "neg":
            return {
                currentValue: "" + parseFloat(state.currentValue) * -1
            };
        case "percentage":
            return {
                currentValue: "" + parseFloat(state.currentValue) * 0.01
            }
        default:
            return state;
    }
}

export default calculator;
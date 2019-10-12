import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD:
            return { ...state, result: state.operand1 + state.operand2 };
        case types.SUBTRACT:
            return { ...state, result: state.operand1 - state.operand2 };
        case types.MULTIPLY:
            return { ...state, result: state.operand1 * state.operand2 };
        case types.DIVIDE:
            return { ...state, result: state.operand1 / state.operand2 };
        case types.SET_OPERAND1:
            return { ...state, operand1: action.operand };
        case types.SET_OPERAND2:
            return { ...state, operand2: action.operand };
        case types.SET_OPERATOR:
            return { ...state, operator: action.operator };
        case types.SWITCH_MODE:
            return { ...state, mode: action.mode };
        case types.NUMERIC_KEY:
            return handleNumericKeys(state, action.target);
        case types.KEYPAD_CLICKED:
            return handleKeypadClicks(state, action.target);
        case types.SWITCH_THEME:
            return switchTheme(state, action.theme);
        default:
            return state;
    }
}

const switchTheme = (state, theme) => {
    if (theme === "light") {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        return { ...state, theme: theme };

    } else if (theme === "dark") {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        return { ...state, theme: theme };
    }
}

const handleNumericKeys = (state, target) => {
    if (state.operator && state.operand1) {
        return { ...state, result: +(state.operand2 + "" + target.innerText), operand2: +(state.operand2 + "" + target.innerText) };
    } else {
        return { ...state, result: +(state.result + "" + target.innerText) };
    }
}

const handleKeypadClicks = (state, target) => {
    switch (target.innerText) {
        case "Clear":
            return { ...state, result: 0, operator: "", operand1: 0, operand2: 0, expression: 0 };
        case "Scientific Mode":
            return { ...state, mode: "Normal Mode" };
        case "Normal Mode":
            return { ...state, mode: "Scientific Mode" };
        case "Sign":
            return { ...state, result: state.result * -1 };
        case "Sqr":
            return { ...state, result: state.result * state.result, operand1: state.result * state.result, operand2: 0, operator: '' };
        case "Sqrt":
            if (state.result < 0) return state;
            return { ...state, result: Math.sqrt(state.result), operand1: Math.sqrt(state.result), operand2: 0, operator: '' };
        default:
            break;
    }

    if (state.operator === "=") {
        return { ...state, operator: target.innerText };
    }
    if (state.operator && state.operand1 && state.operand2) {
        switch (state.operator) {
            case "Add (+)": return {
                ...state, result: +state.operand1 + +state.operand2,
                operand1: state.operand1 + state.operand2, operand2: 0, operator: target.innerText
            };
            case "Subtract (-)": return {
                ...state, result: +state.operand1 - +state.operand2,
                operand1: +state.operand1 - +state.operand2, operand2: 0, operator: target.innerText

            };
            case "Multiply (*)": return {
                ...state, result: +state.operand1 * +state.operand2,
                operand1: +state.operand1 * +state.operand2, operand2: 0, operator: target.innerText
            };
            case "Divide (/)": return {
                ...state, result: +state.operand1 / +state.operand2,
                operand1: +state.operand1 / +state.operand2, operand2: 0, operator: target.innerText
            };
            default:
                return state;
        }
    }
    if (state.operator === "") {

        switch (target.innerText) {
            case "Add (+)":
                return { ...state, operator: target.innerText, operand1: +state.result };
            case "Subtract (-)":
                return { ...state, operator: target.innerText, operand1: +state.result };
            case "Multiply (*)":
                return { ...state, operator: target.innerText, operand1: +state.result };
            case "Divide (/)":
                return { ...state, operator: target.innerText, operand1: +state.result };
            default:
                return state;

        }
    }
}
import * as types from "./actionTypes";

export function addition(result) {
    return { type: types.ADD, result };
}

export function subtraction(result) {
    return { type: types.SUBTRACT, result };
}

export function multiplication(result) {
    return { type: types.MULTIPLY, result };
}

export function division(result) {
    return { type: types.DIVIDE, result };
}

export function operand1(operand) {
    return { type: types.SET_OPERAND1, operand };
}

export function operand2(operand) {
    return { type: types.SET_OPERAND2, operand };
}

export function keypad_clicked(target) {
    return { type: types.KEYPAD_CLICKED, target };
}

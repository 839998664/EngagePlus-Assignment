import React from 'react';
import Button from './Button';

function Keypad(props) {

    return <table className="table no-borders">
        <tbody>
            <tr>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="1"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="2"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="3"></Button></td>
                <td><Button onButtonClick={props.onOperatorButtonClick} theme={props.theme} text="Add (+)"></Button></td>
            </tr>
            <tr>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="4"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="5"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="6"></Button></td>
                <td><Button onButtonClick={props.onOperatorButtonClick} theme={props.theme} text="Subtract (-)"></Button></td>
            </tr>
            <tr>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="7"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="8"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="9"></Button></td>
                <td><Button onButtonClick={props.onOperatorButtonClick} theme={props.theme} text="Multiply (*)"></Button></td>
            </tr>
            <tr>
                <td><Button onButtonClick={props.onOperatorButtonClick} theme={props.theme} text="Clear"></Button></td>
                <td><Button onButtonClick={props.onNumericButtonClick} theme={props.theme} text="0"></Button></td>
                <td><Button onButtonClick={props.onOperatorButtonClick} theme={props.theme} text="="></Button></td>
                <td><Button onButtonClick={props.onOperatorButtonClick} theme={props.theme} text="Divide (/)"></Button></td>
            </tr>
            {props.mode === "Scientific Mode" && <tr>
                <td>

                    <Button theme={props.theme} onButtonClick={props.onOperatorButtonClick} text="Sign"></Button></td>
                <td><Button theme={props.theme} onButtonClick={props.onOperatorButtonClick} text="Sqr"></Button></td>
                <td> <Button theme={props.theme} onButtonClick={props.onOperatorButtonClick} text="Sqrt"></Button>
                </td></tr>}
        </tbody>
    </table>
}
export default Keypad;
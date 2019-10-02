import React from "react";
import Keypad from '../common/Keypad';
import * as calculator from "../../redux/actions/calculatorActions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Button from '../common/Button';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operand1: 0,
            operand2: 0,
            operator: "",
            result: 0,
            expression: 0,
            theme: 'light',
            mode: 'Normal Mode'
        }
    }
    render = () => {
        return <div className="container-fluid">
            <h1>EngagePlus Assignment Calculator</h1>
            <Button text={this.props.calculatorState.mode} theme={this.state.theme} onButtonClick={this.onButtonClick} />
            <ThemeSwitcher switchTheme={this.handleThemeSwitch} theme={this.state.theme} />
            <input type='text' value={this.props.calculatorState.result} readOnly />
            <Keypad onButtonClick={this.onButtonClick} theme={this.state.theme} mode={this.props.calculatorState.mode} />
        </div>;
    }

    onButtonClick = ({ target }) => {
        this.props.actions.keypad_clicked(target);
    }
    handleThemeSwitch = ({ target }) => {
        switch (target.innerText) {
            case "Light Theme":
                document.body.style.backgroundColor = "#fff";
                document.body.style.color = "#000";
                this.setState({ theme: "light" });
                break;
            case "Dark Theme":
                document.body.style.backgroundColor = "#000";
                document.body.style.color = "#fff";
                this.setState({ theme: "dark" })
                break;
            default:
                break;
        }
    }
}
const matchStateToProps = (state) => {
    return {
        calculatorState: state.calculatorReducer
    }
}
const matchDispatchToProps = (dispatch) => {
    return {
        actions: {
            add: bindActionCreators(calculator.addition, dispatch),
            subtract: bindActionCreators(calculator.subtraction, dispatch),
            multiply: bindActionCreators(calculator.multiplication, dispatch),
            divide: bindActionCreators(calculator.division, dispatch),
            set_operand1: bindActionCreators(calculator.operand1, dispatch),
            set_operand2: bindActionCreators(calculator.operand2, dispatch),
            keypad_clicked: bindActionCreators(calculator.keypad_clicked, dispatch)
        }
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(HomePage);

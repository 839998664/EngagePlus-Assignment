import React from "react";
import Button from "./Button";

function ThemeSwitcher(props) {
    return <div className="btn-group">
        <Button text="Light Theme" onButtonClick={props.switchTheme} theme={props.theme}></Button>
        <Button text="Dark Theme" onButtonClick={props.switchTheme} theme={props.theme}></Button>
    </div>;
}

export default ThemeSwitcher;
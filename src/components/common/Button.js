import React from 'react';

function Button(props) {
    return <button onClick={props.onButtonClick} className={props.theme + " btn btn-info ml-1 mr-1 mt-1 mb-1 btn-block"} > {props.text}</ button>;
}

export default Button;
import React from 'react';

class LoginFormSubmitButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button type='submit' id='loginFormSubmitButton' form='loginForm'>
                Submit
            </button>
        );
    }
}


export default LoginFormSubmitButton;
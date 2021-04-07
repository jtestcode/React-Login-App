import React from 'react';

class SignUpFormSubmitButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button type='submit' id='signUpFormSubmitButton' form='signUpForm'>
                Submit
            </button>
        );
    }
}


export default SignUpFormSubmitButton;
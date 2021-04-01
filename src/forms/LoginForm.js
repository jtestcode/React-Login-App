import React from 'react';
import LoginFormEmailField from './LoginFormEmailField';
import LoginFormPasswordField from './LoginFormPasswordField';
import LoginFormSubmitButton from './LoginFormSubmitButton';
import LoginFormEmailValidation from './LoginFormEmailValidation';
import LoginFormPasswordValidation from './LoginFormPasswordValidation';

let userDatabase = [
    {username: 'Mike', email: 'mike@gmail.com', password: 'mike'},
    {username: 'Molly', email: 'molly@gmail.com', password: 'molly'}
]

/*function validateInput1(event, stateValue){
    if(event.target.name === 'userEmail'){
        let userEmailInput = event.target.value;
        validateEmail1(userEmailInput, stateValue);
    }
    else{
        console.log('not email');
    }
}*/

//actually don't need stateValue here for validating email input, but will need it for checking valid login
function checkIfEmailIsValidAndPrintError(userEmailInput/*, stateValue*/){
    if(userEmailInput === ''){
        return 'empty';
    }
    if(!/(?=^(.{1,64})[@](.{1,})[\.]([^\.]{1,})$)(?=^.{0,254}$)/.test(userEmailInput)){
        return 'invalid';
            // regex info:
            // checks basic format of something@something.something (@ and . must be present, with any characters following and proceeding them)
            // checks that it doesn't end with a period .
            // checks that the local-part (the part before @) is at least 1 but no more than 64 characters
            // checks that the entire e-mail address is no more than 254 characters
    }
    else{
        return '';
    }
}

//actually don't need stateValue here for validating email input, but will need it for checking valid login
function checkIfPasswordIsValidAndPrintError(userPasswordInput/*, stateValue*/){
    if(userPasswordInput === ''){
        return 'empty';
    }
    else{
        return '';
    }
}


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            userEmailInputError: '',
            userPasswordInputError: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState(
            {
                [event.target.name] : event.target.value
            },
            function(){
                this.validateInput(event/*, this.state[event.target.name]*/);
            }
        );
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('clicked Submit');
    }
    validateInput(event){
            let userInput = event.target.value;
            //let stateValue = this.state[event.target.name];
        if(event.target.name === 'userEmail'){
            this.setState(
                { 
                    userEmailInputError : 
                    checkIfEmailIsValidAndPrintError(userInput/*, stateValue*/)
                }
            );
        }
        else{
            let userPasswordInput = event.target.value;
            //let stateValue = this.state[event.target.name];
                this.setState(
                    { 
                        userPasswordInputError : 
                        checkIfPasswordIsValidAndPrintError(userPasswordInput/*, stateValue*/) 
                    }
                );
        }
    }
    /*validateInput(event){
        if(event.target.name === 'userEmail'){
            let userEmailInput = event.target.value;
            this.validateEmail(userEmailInput);
        }
        else{
            console.log('not email');
        }
    }*/
    validateEmail(userEmailInput){
        if(!userEmailInput.includes('@')){
            console.log('please type valid email');
        }else{
            console.log('email valid');
        }
    }
    render(){
        return(
            <form id='loginForm' method='POST' action='' onSubmit={this.handleSubmit}>
                <LoginFormEmailField 
                    onChange={this.handleChange} value={this.state.userEmail} />
                <LoginFormEmailValidation inputError={this.state.userEmailInputError} />
                <LoginFormPasswordField 
                    onChange={this.handleChange} value={this.state.userPassword} />
                <LoginFormPasswordValidation inputError={this.state.userPasswordInputError} />
                <LoginFormSubmitButton />
            </form>
        );
    }
}


export default LoginForm;
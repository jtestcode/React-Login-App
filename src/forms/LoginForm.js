import React from 'react';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import LoginFormSubmitButton from './LoginFormSubmitButton';
import FormEmailErrorMessage from './FormEmailErrorMessage';
import FormPasswordErrorMessage from './FormPasswordErrorMessage';
import FormSubmitErrorMessage from './FormSubmitErrorMessage';
import inputValidation from './inputValidation.js';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            userEmailInputError: '',
            userPasswordInputError: '',
            submitError: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        let inputValue = event.target.value;
        let inputField = event.target.name;

        this.setState(
            {
                [inputField] : inputValue
            },
            function(){
                inputValidation.validateInputUpdateErrorAndReturnIfValid(inputValue, inputField, this);
            }
        );
    }
    handleSubmit(event){
        event.preventDefault();

        let didSubmitSucceed = true;

        if(!inputValidation.validateAllInputsUpdateErrorsAndReturnIfSubmitValid(this)){
            console.log('login submit is invalid');
            didSubmitSucceed = false;
        }

        if(!inputValidation.checkEmailAndPasswordAgainstDatabaseUpdateSubmitErrorAndReturnIfMatch(this)){
            console.log('no email and password match in database; submit failed');
            didSubmitSucceed = false;

        };

        if(!didSubmitSucceed){
            this.props.setFormShakeState(false);
            return null;
        }

        this.props.setFormShakeState(true);
        let username = inputValidation.returnUsernameFromEmailAndPassword(this.state.userEmail, this.state.userPassword);
        this.props.logIn(username);
        console.log('login submit is valid');
    }


    render(){
        return(
            <form id='loginForm' className={this.props.showHide} method='POST' action='' onSubmit={this.handleSubmit}>
                <FormEmailField 
                    onChange={this.handleChange} value={this.state.userEmail} 
                />
                <FormEmailErrorMessage 
                    inputError={this.state.userEmailInputError} formType='login form' 
                />
                <FormPasswordField 
                    onChange={this.handleChange} value={this.state.userPassword} 
                />
                <FormPasswordErrorMessage 
                    inputError={this.state.userPasswordInputError} formType='login form' 
                />
                <LoginFormSubmitButton />
                <FormSubmitErrorMessage 
                    inputError={this.state.submitError}
                />
            </form>
        );
    }
}


export default LoginForm;
import React from 'react';
import FormUsernameField from './FormUsernameField';
import FormEmailField from './FormEmailField';
import FormPasswordField from './FormPasswordField';
import SignUpFormSubmitButton from './SignUpFormSubmitButton';
import FormUsernameErrorMessage from './FormUsernameErrorMessage';
import FormEmailErrorMessage from './FormEmailErrorMessage';
import FormPasswordErrorMessage from './FormPasswordErrorMessage';
import FormSubmitErrorMessage from './FormSubmitErrorMessage';
import inputValidation from './inputValidation';


class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userEmail: '',
            userPassword: '',
            usernameInputError: '',
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
            console.log('sign up submit is invalid');
            didSubmitSucceed = false;
            this.props.setFormShakeState(didSubmitSucceed);
            return null;
        }
        
        if(!inputValidation.checkEmailAgainstDatabaseUpdateSubmitErrorAndReturnIfUnique(this)){
            console.log('sign up email is not unique; submit failed');
            didSubmitSucceed = false;
            this.props.setFormShakeState(didSubmitSucceed);
            return null;
        };

        this.props.setFormShakeState(didSubmitSucceed);
        this.props.logIn(this.state.username);
        console.log('sign up email is unique; submit succeeded');
         
    }

    render(){
        return(
            <form id='signUpForm'  className={this.props.showHide} method='POST' action='' onSubmit={this.handleSubmit}>
                <FormUsernameField 
                    onChange={this.handleChange} value={this.state.username} 
                />
                <FormUsernameErrorMessage 
                    inputError={this.state.usernameInputError}
                />
                <FormEmailField 
                    onChange={this.handleChange} value={this.state.userEmail} 
                />
                <FormEmailErrorMessage 
                    inputError={this.state.userEmailInputError} formType='sign up form'
                />
                <FormPasswordField 
                    onChange={this.handleChange} value={this.state.userPassword} 
                />
                <FormPasswordErrorMessage 
                    inputError={this.state.userPasswordInputError} formType='sign up form'
                />
                <SignUpFormSubmitButton />
                <FormSubmitErrorMessage 
                    inputError={this.state.submitError}
                />
            </form>
        );
    }
}


export default SignUpForm;
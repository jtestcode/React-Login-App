import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LoginFormSelectButton from './LoginFormSelectButton.js';
import SignUpFormSelectButton from './SignUpFormSelectButton';

class FormBody extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            formName: 'login form',
            formShake: false,
        }
        this.handleFormSelectButtonClick = this.handleFormSelectButtonClick.bind(this);
        this.setFormShakeState = this.setFormShakeState.bind(this);
    }
    handleFormSelectButtonClick(event){
        if(event.currentTarget.id === 'loginFormSelectButton'){
            this.setState(
                { formName : 'login form' }
            );
        }
        else{
            this.setState(
                { formName : 'sign up form' }
            );
        }
    }
    setFormShakeState(didSubmitSucceed){
        if(didSubmitSucceed){
            this.setState(
                { formShake : false }
            );
        }
        else{

            // Setting state formShake to true sets the formBody div's data-shake attribute to 'true', and in the CSS the [data-shake='true'] selector is set to do one shake animation (it would be great if I could set this to an on-click action, but there is no on-click selector for CSS), so when the formShake is set to true the formBody div does one shake animation. However, unless formShake (and by extension the data-shake attribute) is reset to false, setting it to true again will not cause the shake. In other words, the formBody will shake the first time you do an invalid submit, but it will stay static after that unless formShake is reset to false. Thus, while sloppy, I need to first reset the formShake state to false, and immediately afterward I need to set formShake state to true (using a setTimeout function that fires asynchronously in 0 milliseconds) for the shake.
            this.setState(
                { formShake : false }
            );

            setTimeout(
                () => {
                    this.setState(
                        { formShake : true }
                    );
                },
                0
            );

        }
    }
    render(){

        return(
            <div id='formBody' data-shake={this.state.formShake}>
                <LoginFormSelectButton 
                    onClick={this.handleFormSelectButtonClick} 
                    isFormSelected={ (this.state.formName==='login form') ? true : false }
                />
                <SignUpFormSelectButton 
                    onClick= {this.handleFormSelectButtonClick}
                    isFormSelected={ (this.state.formName==='sign up form') ? true : false }
                />
                <LoginForm 
                    showHide={ (this.state.formName==='login form') ? 'show' : 'hide' }
                    setFormShakeState={this.setFormShakeState}
                    logIn={this.props.logIn}
                />
                <SignUpForm 
                    showHide={ (this.state.formName==='sign up form') ? 'show' : 'hide' }
                    setFormShakeState={this.setFormShakeState}
                    logIn={this.props.logIn}
                />
            </div>
        );
    }
}

export default FormBody;
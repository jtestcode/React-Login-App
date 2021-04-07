import React from 'react';

class FormSubmitErrorMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.inputError === 'email already registered'){
            return(
                <div className='formErrorMessageContainer submitErrorMessageContainer'>
                    <div>
                        * email address is already registered
                    </div>
                </div>
            );
        }
        else if (this.props.inputError === 'no database match'){
            return(
                <div className='formErrorMessageContainer submitErrorMessageContainer'>
                    <div>
                        * could not login with email and password combination
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default FormSubmitErrorMessage;
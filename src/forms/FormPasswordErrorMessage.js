import React from 'react';

class FormPasswordErrorMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.inputError === 'empty'){
            return(
                <div className='formErrorMessageContainer'>
                    <div>
                        * enter password
                    </div>
                </div>
            );
        }
        else if (this.props.inputError === 'invalid' && this.props.formType === 'sign up form'){
            return(
                <div className='formErrorMessageContainer'>
                    <div>
                        * password must be 8 to 64 characters and contain at least 1 digit and 1 letter
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default FormPasswordErrorMessage;
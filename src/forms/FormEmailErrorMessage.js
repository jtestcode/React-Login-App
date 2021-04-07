import React from 'react';

class FormEmailErrorMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.inputError === 'empty'){
            return(
                <div className='formErrorMessageContainer'>
                    <div>
                        * enter email address
                    </div>
                </div>
            );
        }
        else if (this.props.inputError === 'invalid' && this.props.formType === 'sign up form'){
            return(
                <div className='formErrorMessageContainer'>
                    <div>
                        * invalid email address
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default FormEmailErrorMessage;
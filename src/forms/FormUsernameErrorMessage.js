import React from 'react';

class FormUsernameErrorMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.inputError === 'empty'){
            return(
                <div className='formErrorMessageContainer'>
                    <div>
                        * enter username
                    </div>
                </div>
            );
        }
        else if (this.props.inputError === 'invalid'){
            return(
                <div className='formErrorMessageContainer'>
                    <div>
                        * username must be 3 to 24 characters and contain only letters and/or numbers
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default FormUsernameErrorMessage;
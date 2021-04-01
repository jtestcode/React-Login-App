import React from 'react';

class LoginFormPasswordValidation extends React.Component{
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
        else{
            return null;
        }
    }
}

export default LoginFormPasswordValidation;
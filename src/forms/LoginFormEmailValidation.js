import React from 'react';

class LoginFormEmailValidation extends React.Component{
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
        else if (this.props.inputError === 'invalid'){
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

export default LoginFormEmailValidation;
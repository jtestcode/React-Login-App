import React from 'react';
import EmailSVG from '../SVG/EmailSVG.js';


class LoginFormEmailField extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='formInputElement' style={{display:'flex'}}>
                <div style={{backgroundColor:'white', width:'40px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <EmailSVG backgroundColor='white'/>
                </div>

                <input type='text' id='loginFormEmailInput' name='userEmail' placeholder='Email' value={this.props.value} onChange={this.props.onChange}>
                </input>
            </div>
        );
    }
}

export default LoginFormEmailField;
import React from 'react';
import LockSVG from '../SVG/LockSVG.js';
import EyeClosedSVG from '../SVG/EyeClosedSVG.js';
import EyeOpenSVG from '../SVG/EyeOpenSVG.js';


class LoginFormPasswordField extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            passwordVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        //console.log('clicked');
        this.setState(
            function(prevState){
                return(
                    { passwordVisible : (!prevState.passwordVisible) }
                );
            }
        );
    }

    render(){

        let passwordFieldInputType = this.state.passwordVisible ? 'text' : 'password';

        return(
            <div className='formInputElement' style={{display:'flex'}}>
                <div style={{backgroundColor:'white', width:'40px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <LockSVG backgroundColor='white'/>
                </div>

                <input type={passwordFieldInputType} id='loginFormPasswordInput' name='userPassword' placeholder='Password' value={this.props.value} onChange={this.props.onChange}>
                </input>

                <div style={{backgroundColor:'white', width:'40px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <EyeSVGController passwordVisible={this.state.passwordVisible} onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}


class EyeSVGController extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.passwordVisible){
            return(
                <EyeClosedSVG backgroundColor='white' onClick={this.props.onClick} />
            );
        }
        else{
            return(
                <EyeOpenSVG backgroundColor='white' onClick={this.props.onClick} />
            );
        }
    }
}

export default LoginFormPasswordField;
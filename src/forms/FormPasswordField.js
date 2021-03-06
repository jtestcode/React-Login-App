import React from 'react';
import LockSVG from '../SVG/LockSVG.js';
import EyeSVGController from './EyeSVGController.js';


class FormPasswordField extends React.Component{
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
            <div className='formInputElement'>
                <div className='SVGContainer'>
                    <LockSVG />
                </div>

                <input type={passwordFieldInputType} id='formPasswordInput' name='userPassword' placeholder='Password' value={this.props.value} onChange={this.props.onChange}>
                </input>

                <div className='SVGContainer'>
                    <EyeSVGController passwordVisible={this.state.passwordVisible} onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}



export default FormPasswordField;
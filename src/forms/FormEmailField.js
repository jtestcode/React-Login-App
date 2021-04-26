import React from 'react';
import EmailSVG from '../SVG/EmailSVG.js';


class FormEmailField extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='formInputElement' >
                <div className='SVGContainer'>
                    <EmailSVG />
                </div>

                <input type='text' id='formEmailInput' name='userEmail' placeholder='Email' value={this.props.value} onChange={this.props.onChange}>
                </input>
            </div>
        );
    }
}

export default FormEmailField;
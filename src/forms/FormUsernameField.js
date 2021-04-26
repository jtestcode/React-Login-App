import React from 'react';
import UsernameSVG from '../SVG/UsernameSVG.js';


class FormUsernameField extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='formInputElement' >
                <div className='SVGContainer'>
                    <UsernameSVG />
                </div>

                <input type='text' id='formUsernameInput' name='username' placeholder='Username' value={this.props.value} onChange={this.props.onChange}>
                </input>
            </div>
        );
    }
}

export default FormUsernameField;
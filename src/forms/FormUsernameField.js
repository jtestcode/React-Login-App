import React from 'react';
import UsernameSVG from '../SVG/UsernameSVG.js';


class FormUsernameField extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='formInputElement' style={{display:'flex'}}>
                <div style={{backgroundColor:'white', width:'40px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <UsernameSVG backgroundColor='white'/>
                </div>

                <input type='text' id='formUsernameInput' name='username' placeholder='Username' value={this.props.value} onChange={this.props.onChange}>
                </input>
            </div>
        );
    }
}

export default FormUsernameField;
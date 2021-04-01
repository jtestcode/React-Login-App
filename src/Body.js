import React from 'react';
import LoginForm from './forms/LoginForm.js';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='bodyContainer'>
                <LoginForm />
            </div>
        );
    }
}

export default Body;
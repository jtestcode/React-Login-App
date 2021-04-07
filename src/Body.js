import React from 'react';
import FormBody from './forms/FormBody.js';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let formBody = 
            <FormBody 
                logIn={this.props.logIn}
            />;

        return(
            <div id='bodyContainer'>
                { (!this.props.loggedIn) ? formBody : null }
            </div>
        );
    }
}

export default Body;
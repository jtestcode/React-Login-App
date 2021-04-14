import React from 'react';
import FormBody from './forms/FormBody.js';
import CoronaBody from './corona/CoronaBody.js';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let formBody = 
            <FormBody 
                logIn={this.props.logIn}
            />;

        let coronaBody = 
            <CoronaBody />

        return(
            <div id='bodyContainer'>
                { (!this.props.loggedIn) ? formBody : coronaBody }
            </div>
        );
    }
}

export default Body;
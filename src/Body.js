import React from 'react';
import FormBody from './forms/FormBody.js';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='bodyContainer'>
                <FormBody />
            </div>
        );
    }
}

export default Body;
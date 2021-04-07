import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let loggedOutHeader = 
            <div id= 'headerContainer' className='headerText'>
                Login or Sign Up To Continue!
            </div>;

        let loggedInHeader = 
            <div id= 'headerContainer' className='headerText'>
                Welcome, {this.props.username}!
            </div>;

        return (
            (!this.props.loggedIn) ? loggedOutHeader : loggedInHeader
        );
    }
}

export default Header;
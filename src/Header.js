import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id= 'headerContainer' className='headerText'>
                Login or Sign Up To Continue!
            </div>
        );
    }
}

export default Header;
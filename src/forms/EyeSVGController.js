import React from 'react';
import EyeClosedSVG from '../SVG/EyeClosedSVG.js';
import EyeOpenSVG from '../SVG/EyeOpenSVG.js';

class EyeSVGController extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.passwordVisible){
            return(
                <EyeClosedSVG backgroundColor='white' onClick={this.props.onClick} />
            );
        }
        else{
            return(
                <EyeOpenSVG backgroundColor='white' onClick={this.props.onClick} />
            );
        }
    }
}

export default EyeSVGController;
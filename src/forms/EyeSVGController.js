import EyeClosedSVG from '../SVG/EyeClosedSVG.js';
import EyeOpenSVG from '../SVG/EyeOpenSVG.js';

function EyeSVGController(props){
    if(!props.passwordVisible){
        return(
            <EyeClosedSVG 
                onClick={props.onClick} 
            />
        );
    }
    else{
        return(
            <EyeOpenSVG 
                onClick={props.onClick} 
            />
        );
    }
}

export default EyeSVGController;
import EyeClosedSVG from '../SVG/EyeClosedSVG.js';
import EyeOpenSVG from '../SVG/EyeOpenSVG.js';

function EyeSVGController(props){
    if(!props.passwordVisible){
        return(
            <EyeClosedSVG backgroundColor='white' onClick={props.onClick} />
        );
    }
    else{
        return(
            <EyeOpenSVG backgroundColor='white' onClick={props.onClick} />
        );
    }
}

export default EyeSVGController;
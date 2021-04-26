function SortArrowSVG(props){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        style={{ backgroundColor: props.backgroundColor, x: '0px', y: '0px', width: '20px', height: '20px'}}
        viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z" fill={props.topArrowColor}/>
            <path d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17" fill={props.bottomArrowColor}/>
        </svg>

    );
}

export default SortArrowSVG;
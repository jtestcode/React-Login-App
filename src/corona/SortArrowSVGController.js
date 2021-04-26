import SortArrowSVG from '../SVG/SortArrowSVG.js';

function SortArrowSVGController(props){


    if(props.propertyName === props.fetchedDataSortProperty){
        return(
            <SortArrowSVG
                topArrowColor={(props.fetchedDataSortOrder === 'ascending') ? 'black' : 'gray'}
                bottomArrowColor={(props.fetchedDataSortOrder === 'descending') ? 'black' : 'gray'} 
            />
        );
    }
    else{
        return(
            <SortArrowSVG
                topArrowColor='gray'
                bottomArrowColor='gray'
            />
        );
    }
}

export default SortArrowSVGController;
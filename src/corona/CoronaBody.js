import React from 'react';
import CoronaTable from './CoronaTable';

class CoronaBody extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            loading : true,
            fetchedData : '',
            numberOfFetchedDataItems : '',
            numberOfPages : '',
            itemsPerPage : 10,
            pageNumber: 1
        }
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }



    componentDidMount(){
        console.log('CoronaBody component mounted');
        let fetchCoronaGlobalSummary = async () => {
            try{
                let response = await fetch('https://api.covid19api.com/summary');
                if(response.ok){
                    let data = await response.json();
                    console.log(data);
                    console.log(data.Countries);
                    /*
                    data.Countries.map((item) => {
                        console.log(item);
                    });
                    */
                    this.setState((prevState)=>{ 
                        return {
                            fetchedData : data.Countries,
                            numberOfFetchedDataItems : data.Countries.length,
                            numberOfPages : Math.ceil(data.Countries.length/prevState.itemsPerPage),
                            loading : false
                        }
                    });
                }
                else{
                    console.log('fetch request could not be completed');
                    this.setState({ loading : false });
                }
            }
            catch(error){
                console.log(`Error: ${error}`);
                this.setState({ loading : false });
            }
        }
        fetchCoronaGlobalSummary();
    }

    previousPage(){
        this.setState((prevState)=>{
            if(prevState.pageNumber > 1){
                return { pageNumber : prevState.pageNumber-1};
            }
        });
    }
    
    nextPage(){
        this.setState((prevState)=>{
            if(prevState.pageNumber < prevState.numberOfPages){
                return { pageNumber : prevState.pageNumber+1};
            }
        });
    }

    render(){
        
        let displayBody;

        if(this.state.loading){
            displayBody = 'Loading...';
        }
        else if(!this.state.fetchedData){
            displayBody = 'Request Failed';
        }
        else{
            displayBody = 
                <CoronaTable 
                    fetchedData={this.state.fetchedData} 
                    itemsPerPage={this.state.itemsPerPage}
                    pageNumber={this.state.pageNumber}
                    numberOfPages={this.state.numberOfPages}
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}  
                />;
        }

        return(
            <div>{displayBody}</div>
        );
    }
}

export default CoronaBody;
import React from 'react';
import SortArrowSVGController from './SortArrowSVGController';
import WorldMapSVG from '../SVG/WorldMapSVG';

class CoronaTable extends React.Component{
    constructor(props){
        super(props);
        this.handleSortClick = this.handleSortClick.bind(this);
    }

    insertCommasIntoNumber(number){
        let numberString = number.toString();
        let numberOfDigits = numberString.length;
        let numberOf3DigitBlocks = Math.floor(numberOfDigits/3);
        let numberOfCommasNeeded = (numberOfDigits%3 != 0) ? numberOf3DigitBlocks : numberOf3DigitBlocks - 1;
        let commaInsertPosition = numberOfDigits - (numberOfCommasNeeded * 3);
        let numberStringWithCommas = numberString;
        for(let i=0; i<numberOfCommasNeeded; i++){
        	numberStringWithCommas = numberStringWithCommas.substring(0, commaInsertPosition) + ',' + numberStringWithCommas.substring(commaInsertPosition);
            commaInsertPosition = commaInsertPosition + 4;
        }
        return numberStringWithCommas;
    }

    handleSortClick(event){
        let sortProperty = event.currentTarget.getAttribute('data-property-name');

        this.props.sortFetchedData(sortProperty);
    }


    render(){

        let indexNumberStart = (this.props.pageNumber - 1) * this.props.itemsPerPage;
        let indexNumberEnd = this.props.pageNumber * this.props.itemsPerPage;

        let displayTableRowData = 
        this.props.fetchedData.map((item, index) => {
            if(index >= indexNumberStart && index < indexNumberEnd){
                return (
                    <tr key={item.ID} className='tableDataRow'>
                        <td>{item.Country}</td>
                        <td>{this.insertCommasIntoNumber(item.TotalConfirmed)}</td>
                        <td>{this.insertCommasIntoNumber(item.TotalDeaths)}</td>
                        <td>{this.insertCommasIntoNumber(item.TotalRecovered)}</td>
                        <td>{this.insertCommasIntoNumber(item.TotalConfirmed - item.TotalDeaths - item.TotalRecovered)}</td>
                    </tr>
                );
            }
        });

        let countryData = this.props.fetchedData[180];
        let totalCases = countryData.TotalConfirmed;
        let totalDeaths = countryData.TotalDeaths;
        let totalRecovered = countryData.TotalRecovered;
        let activeCases = countryData.TotalActive;
        let totalDeathsPercentage = Math.ceil(totalDeaths/totalCases*100);
        let totalRecoveredPercentage = Math.ceil(totalRecovered/totalCases*100);
        let activeCasesPercentage = Math.ceil(activeCases/totalCases*100);
        let totalCasesWithCommas = this.insertCommasIntoNumber(totalCases);
        let totalDeathsWithCommas = this.insertCommasIntoNumber(totalDeaths);
        let totalRecoveredWithCommas = this.insertCommasIntoNumber(totalRecovered);
        let activeCasesWithCommas = this.insertCommasIntoNumber(activeCases);


        let chartDataPoints = `${activeCasesPercentage},${totalRecoveredPercentage},${totalDeathsPercentage}`;
        
        let chartURL = `https://image-charts.com/chart?chco=F2E279,90EE90,FF6347&chd=t:${chartDataPoints}&chdl=Active Cases|Total Recovered|Total Deaths&chdlp=b&chl=${activeCasesWithCommas}|${totalRecoveredWithCommas}|${totalDeathsWithCommas}&chli=${totalCasesWithCommas}&chlps=align,center|textAlign,right|rotation,315&chma=0,0,0,15&chs=400x300&cht=pd&chts=000000,25&chtt=Total Confirmed Cases`;
        

        let displayTable = 
            <table id='covidTable'>
                <tbody>
                    <tr>
                        <th onClick={this.handleSortClick} data-property-name='Country'>
                            <div className='tableHeaderContainer'>
                                    <div>
                                        Country
                                    </div>
                                    <div className='SVGContainer'>
                                        <SortArrowSVGController 
                                            propertyName = 'Country'
                                            fetchedDataSortProperty={this.props.fetchedDataSortProperty}
                                            fetchedDataSortOrder={this.props.fetchedDataSortOrder}
                                        /> 
                                    </div>
                            </div>
                        </th>
                        <th onClick={this.handleSortClick} data-property-name='TotalConfirmed'>
                            <div className='tableHeaderContainer'>
                                    <div>
                                        Total Cases
                                    </div>
                                    <div className='SVGContainer'>
                                        <SortArrowSVGController 
                                            propertyName = 'TotalConfirmed'
                                            fetchedDataSortProperty={this.props.fetchedDataSortProperty}
                                            fetchedDataSortOrder={this.props.fetchedDataSortOrder}
                                        /> 
                                    </div>
                            </div>
                        </th>
                        <th onClick={this.handleSortClick} data-property-name='TotalDeaths'>
                            <div className='tableHeaderContainer'>
                                    <div>
                                        Total Deaths
                                    </div>
                                    <div className='SVGContainer'>
                                        <SortArrowSVGController 
                                            propertyName = 'TotalDeaths'
                                            fetchedDataSortProperty={this.props.fetchedDataSortProperty}
                                            fetchedDataSortOrder={this.props.fetchedDataSortOrder}
                                        /> 
                                    </div>
                            </div>
                        </th>
                        <th onClick={this.handleSortClick} data-property-name='TotalRecovered'>
                            <div className='tableHeaderContainer'>
                                    <div>
                                        Total Recovered
                                    </div>
                                    <div className='SVGContainer'>
                                        <SortArrowSVGController 
                                            propertyName = 'TotalRecovered'
                                            fetchedDataSortProperty={this.props.fetchedDataSortProperty}
                                            fetchedDataSortOrder={this.props.fetchedDataSortOrder}
                                        /> 
                                    </div>
                            </div>
                        </th>
                        <th onClick={this.handleSortClick} data-property-name='TotalActive'>
                            <div className='tableHeaderContainer'>
                                    <div>
                                        Active Cases
                                    </div>
                                    <div className='SVGContainer'>
                                        <SortArrowSVGController 
                                            propertyName = 'TotalActive'
                                            fetchedDataSortProperty={this.props.fetchedDataSortProperty}
                                            fetchedDataSortOrder={this.props.fetchedDataSortOrder}
                                        /> 
                                    </div>
                            </div>
                        </th>
                    </tr>
                    {displayTableRowData}
                </tbody>
            </table>

        return(
            <div>
                <div>
                    <button onClick={this.props.previousPage}>Previous</button>
                    Page {this.props.pageNumber} of {this.props.numberOfPages}
                    <button onClick={this.props.nextPage}>Next</button>
                </div>
                {displayTable}
                <div>
                    <button onClick={this.props.previousPage}>Previous</button>
                    Page {this.props.pageNumber} of {this.props.numberOfPages}
                    <button onClick={this.props.nextPage}>Next</button>
                </div>
                <img src={chartURL} />
                < WorldMapSVG />
            </div>
        );

    }

}


export default CoronaTable;
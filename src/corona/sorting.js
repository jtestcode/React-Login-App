let sorting = {

    sortObjectArray: function(array, property, order){

        let orderAdjuster;
        if (order === 'ascending'){
            orderAdjuster = 1;
        }
        else if (order === 'descending'){
            orderAdjuster = -1;
        }
        
        //console.log('order adjuster:', orderAdjuster);
        
        array.sort(function(a, b){
            if (typeof a[property] === 'string'){
                if(a[property] < b[property]){
                    return (-1 * orderAdjuster);
                }else if(a[property] > b[property]){
                    return (1 * orderAdjuster);
                }else{
                    return 0;
                }
            }
            else if(typeof a[property] === 'number'){
                //console.log(`${a[property]}-${b[property]}:${a[property] - b[property]}`);
                //console.log('compare result: '+(a[property] - b[property]) * orderAdjuster);
                return ((a[property] - b[property]) * orderAdjuster);	
            }
        });


    }


}

export default sorting;
var arrayOfArrays = [];
var subArrays = [];

export default function groupArrayElements(arrayToSplit, numberOfSplits) {
        // count elements in array
    try {
        if (numberOfSplits < 0) throw new Error ('your second input must be a positive number')

        let arrayToSplitLength = arrayToSplit.length
        // divide number of elements in array to numberOfSplits and assign result to numberOfElementsInEachSplit
        let numberOfElementsInEachSplit = Math.floor(arrayToSplitLength / numberOfSplits);
        console.log(numberOfElementsInEachSplit)

        // get the remaining number of elements after dividing up the array
        let remainderAfterSplitting = arrayToSplit.length % numberOfElementsInEachSplit;
    

        var j = 0;
        // count out from first element numberOfElementsInEachSplit
            for (var i = 0; i < arrayToSplitLength - remainderAfterSplitting; i = i + numberOfElementsInEachSplit) {
                console.log(i, 'i')
                // put elements in new arrays

                j=i;
                console.log(j, 'j')
                    for (; j < numberOfElementsInEachSplit+i; j++) {
                        console.log(j, 'j inside the loop')

                        const currentItem = arrayToSplit[j];
                        subArrays.push(currentItem);
                        console.log(subArrays, 'subArrays')
                    }

            
                arrayOfArrays.push('[', [...subArrays], ']');
                console.log(arrayOfArrays, 'arrayOfArrays after adding in subArrays')
                subArrays.length = 0
            };

         //if arrayToSplit divided by numberOfElementInEachSplit has a remainder, add remainer onto arraySplits array
         
        if(remainderAfterSplitting != 0) {
            let remainingElementsAfterSplitting = arrayToSplit.slice(-remainderAfterSplitting);
            arrayOfArrays.push([remainingElementsAfterSplitting]);
        }
        
        return arrayOfArrays.join(" ");

    } catch (e) {
        alert('something went wrong! Try again, check your inputs!')
        return('uhoh! check your inputs!')
    }
        
};
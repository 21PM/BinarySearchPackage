

const unsortedArr = [10, 5, 3, 8, 2, 7, 6, 4, 9, 1];


const BinarysearchElement = (arr,target) =>{
    let ans =  arr.sort((a,b)=>{
        return a-b;
    })

    let first = 0;
    let last = ans.length-1;

    while(first<=last){
        let mid = Math.floor((first+last)/2)
        let midval = ans[mid]

        if(midval === target){
            return mid;
        }else if(midval <= target){
            first = mid + 1;
        }else{
            last = mid - 1
        }
    }
    
    return -1;

}


export default BinarysearchElement;







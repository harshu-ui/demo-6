let arr=[10,20,40,50,30,40,50]
function SecondLargest(arr){
    let max=arr[0]
    let max1=-Infinity
    for(let i=0;i<arr.length;i++){
    if(max1<arr[i] && arr[i]<max){
        max1=arr[i]
    }else if(arr[i]>max){
        max1=max
        max=arr[i]
    }
 
}
return max1
}
let res=SecondLargest(arr)
console.log(res)

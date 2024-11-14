function sumEvenNumbers(arr){

    let res=arr.filter((ele)=>{
        return ele%2==0
    })
    return res.reduce((a,b)=>
         a+b
    )
}
arr=[6,8,12,11]
let res=sumEvenNumbers(arr)
console.log(res)





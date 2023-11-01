let checkSign = (a, b, c) =>{
    let sum = a * b * c
    if(sum >= 0){
        alert("the sign is positive (+)")
    }else{
        alert("the sign is negative(-)")
    }
}

checkSign(1, 2, 6)
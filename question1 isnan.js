// Nan stands for not a number. its data type is number and the isNan() method is used to test if a value is equal to NaN.
const first = 10;
const second = "hello"

const result = first - second
console.log(typeof result, result)
if(isNaN(result)){
    console.log("this is a NAN")
}else{
    console.log("this is not a NAN")
}
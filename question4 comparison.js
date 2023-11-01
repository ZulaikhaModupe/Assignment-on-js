console.log(false == '0') //true
// The double equal sign is a loose equality operator, it compares just the values without taking the data type into consideration. So, Zero is a falsy value, which makes the comparison true
console.log(false === "0") // false
// The triple equality sign is a strict equality operator. It compares both the values and data type during comparison. Just by data type, the LHS (boolean) is not equal to the RHS (string). 
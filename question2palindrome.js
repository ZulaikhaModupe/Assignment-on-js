let check = (word) =>{
    const revWord = word.split("").reverse().join("").toLowerCase()
    console.log(revWord)
   if(word.toLowerCase() === revWord){
        return true
    }else{
        return false
    }
}

console.log(check("madas"))
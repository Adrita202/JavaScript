// let isPallindrome=(str)=>{
//     let rev=str.split("").reverse().join("");
//     return str==rev;
// };
// console.log(isPallindrome("madam"))


let isPallindrome=(str)=>{
    let cleaned=str.toLowerCase();
    let rev=cleaned.split("").reverse().join("");
    return cleaned===rev;
}
console.log(isPallindrome("Madam"))
//function ke parameters ke under function pass krsakhty he or isy kehty he callback function
// const randomFunc=()=>{
//     console.log("HELLO WORLD");
// }
// const hello =(callback:any)=>{
//     console.log(callback);
// }
// hello(randomFunc())
//or
// const randomFunc=()=>{
//     console.log("HELLO WORLD");
// }
// const hello =(callback:any)=>{
//     callback()
// }
// hello(randomFunc)
// const sumOfTwoNumbers =()=>{
// return 2+2
// }
// const getNumbersAndAdd3 =(sumOfTwoNumbers:any)=>{
// console.log(sumOfTwoNumbers());
// }
// getNumbersAndAdd3(sumOfTwoNumbers)//yaha sirf name pass kary ge call nhi kary ge
var sumTwoNumbers = function () {
    return 2 + 2;
};
var anotherFunc = function (param) {
    console.log(param);
};
anotherFunc(sumTwoNumbers);

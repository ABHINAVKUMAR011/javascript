// "use strict";
// // conversion 
// let a = "10"
// console.log(typeof (a))  //string
// let b = Number (a)   //type conversion converted to number
// console.log(typeof(b))   // number

// let c = undefined
// console.log(typeof c)
// let d = Number(c)
// console.log(d)  // NaN is Not a Number  
// // undefined,string, = returns nan
// // null returns 0
// //true = 1 false = 0

// let e = 1
// let f = Boolean(e)
// // " " = false  "abhinav" = true
// console.log(f)

// let g = 33
// let h = String(g)
// console.log(h)
// console.log(typeof (h))

// //operations

let s = 23
let negs = -s
console.log(negs)

// console.log(2+2)
// console.log(2-2)
// console.log(2/2)
// console.log(2*2)
// console.log(2%2)

let str = "abhinav"
let str2 = " singh"
console.log(str+str2)

console.log ("2"+2+1)
console.log(1+"2"+3)
console.log(1+2+2+"122")
console.log(((3+4)*2)/2)

let nstr = +" "
console.log(nstr) // 0
let vstr = +"hii"
console.log(vstr) //nan
let vbool = +true
console.log(vbool) //1

let num1,num2,num3 
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3])

let gamecounter = 100;
gamecounter++ //postincrement
++gamecounter //preincrement
console.log(gamecounter)


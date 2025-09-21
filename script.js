
// var a = 10
// console.log(a)
// console.log("hii abhinav")
// var b = 20
// console.log(b)
// console.warn("Warning")
// console.error("error")
// window.alert("alert")
// alert("second alert")
// prompt("enter your mobile no: ")
// let c = "abhinav"
// console.log(c)
// c="abhinav singh"
// console.log(c)

// const x = 10
// console.log(x)

// var y;
// console.log(y)

// var arr = [1,2,3,4,5]
// console.log(arr)
// var arr1 = arr
// console.log(arr1)
// arr1.pop()
// console.log(arr1)
// console.log(arr)

// var arr3 = [7,8,9,10]
// console.log(arr3)
// var arr4 = [...arr3]
// console.log(arr4)
// arr4.pop()
// console.log(arr4)
// console.log(arr3)


// var a1 = 10
// if(null){
//     console.log("hii")
// }
// else{
//     console.log("not hii")
// }

// var arr3 = [1,2,3,4,5]
// arr3.forEach(data =>{
//     console.log(data)
// })

// function in es 5
//1. function statement normal function
// function greet(){
//     console.log("hii goodmorning")
// }
// greet()
// // function with parameter
// function nme(inpt){
//     console.log("hii :"+inpt)
// }
//   nme("abhinav")
 

// // function with return
// function name(inpt){
//     console.log("hii :"+inpt)
//     return "res"
// }
//  var name1 = name("abhinav")
//  console.log(name1)


//  //2.function with expression
//  var func = function() {
//     console.log("hii this is a function with expression")
//  }
//  func()

//  //anynomus function



//  //ES6


// //1 fat arrow function
// var fun =()=>{
//     console.log("hii i am fatty")
// }
// fun()

// //2 fat arrow with parameter
// var fun1 = (a)=>{
//     console.log("hii the value is:"+a)
// }
// fun1(10)
// //3 fat function with return type
// var fun2 = (name)=>{
//     console.log("hii this is my name:"+name)
//     return "kaise ho?"
// }
// var cfun2 = fun2("abhinav")
// console.log(cfun2)


// //4 fat function with implicit return
// var func3 = ()=> "hello abhinav"
// var res = func3()
// console.log(res)

// var arr = [1,2,"abhinav",[],function(){}]
// console.log(arr[4])

//object in js

// 1st method  var obj = {}

// var obj = {
//     name:"abhinav",
//     age:25,
//     gmail:"abhnv2@gmail.com",
//     contact:"9113115037"
// }
// console.log(obj.age)
// console.log(obj.name)
// console.log(obj.gmail)

//2nd method var obj = new object()

// this keyword in javascript it is used for different different purpose and it has different meaning 
// console.log(this)
// function print(){
// console.log(this)
// }
// print()

// the function inside the object is called object
//es5
// var obj = {
//     name : function(){
//         function fun(){
//         console.log(this)
//         }
//         fun()
//     },
//     age:21
// }
// obj.name()
// console.log(obj.age)
// //es6
// var obj1 = {
//     ew :function(){
//         var nme = ()=>{
//             console.log(this)
//         }
//         nme()
//     }
// }

// obj1.ew()

// constructor = using new object for object

// function fun(){
//         console.log(this)
//     }

// fun = new Object()

//call apply bind

// var obj = {
//     name : "abhinav"
// }

// function print(){
//     console.log(this.name)
// }
// print.call(obj)

//apply
// var obj = {
//     name:"abhinav"

// }
// function print(y,x,z){
//     console.log(this.name,x,y,z)
// }

// print.apply(obj,[1,2,3])

//bind

// var obj = {
//     name:"abhinav"
// }

// function fun(){
//     console.log(this.name)
// }
// var obj1 = fun.bind(obj)
// obj1()


//closure
// function fun(){
//     var p = 10
//     return function child(){
//         console.log(p)
//     }
// }

// var obj = fun()
// obj()

var change = document.querySelector("button")
change.textContent = "downloading"









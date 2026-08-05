console.log('spurs')

var k=14

console.log(k)

let num1

let num2

num1=2

num2=4

console.log(num1>7)

console.log("karalo"+" "+"asmamaw")

function ferran (){
    console.log("abebe")
    console.log("abebe")
    console.log("abebe")
}

ferran ()

function adder(x,y)
{
    var c = x+y
    console.log(k)
    return c
}

var added=adder(5,7)
console.log(added)

function average (x,y)
{
var avg
avg=adder(x,y)/2
}

if (1==1){
    console.log("abebe beso bela")
}

var score=66
var pass=50


if (score > pass){
    console.log("passed")
}else{
    console.log("failed")
}




function atod (age){
if(typeof age !== "number" ){
    return " only number allowed"
}
return (age * 365)
}

var day = atod(5)
console.log(day)


function cube(num){
     if(typeof num !== "number" ){
    return " only number allowed"
 }
 return num**3
}

var cube = cube(10)
console.log(cube)


function tri (base,height){
    if(isNaN(base)||isNaN(height)){
        return "Ony numbers are allowed"
    }
    else if (base<=0||height<=0){
        return "Only positive numbers are allowed"
    }
    else return (base*height/2)

}



I am KARALO 

var triarea=tri(4,4)
console.log(triarea)


function soccer(win,draw,loss){
    if(isNaN(win)||isNaN(draw)||isNaN(loss)){
        return " only numbers are allowed"
    }
    else if(win<0||draw<0||loss<0){
        return "only positive numbers ans 0 are allowed"
    }
    else return (win*3 + draw*1 + loss*0)
}

let point = soccer(3,2,2)
console.log(point)


function secmin(min,){
    if(isNaN(min)){
        return "only number"
    }
    else if(min<=0){
        return"only positive numbers"
    }
    else return min*60
}

let answer=secmin(7)
console.log(answer)


function adding(num){
    if(isNaN(num)){
        return "only numbers"
    }
     else return num+1
}

let answer=adding(98765434567890)
console.log(answer)



function containing 3 arguments 
cheak if its a number
general formula that takes the first value 

function firstvalue([a,b,c]){
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        return "only numbers"
    }
        return a
}

let value=firstvalue([23,45,56])
console.log(value)

function grade(num){
    if(isNaN(num)){
        return "Only numbers are allowed"
    }
  if (num >= 90 && num <= 100) {
 return "A"
}
if  (num >=85 && num <= 89 ){
    return "B"
}
if (num>=80 && num<=84){
    return "C"
}
if (num>=75 && num<=79){
    return "D"
}
if (num <75 && num>=0){
    return"F"
}
if (num>100){
    return "only numbers between 1 and 100"
}
    

}

let result=grade(101)
console.log(result)


for(i=1;i<=10;i=i+1){
console.log("Hello")
}


for(i=-4;i<=6;i++){
    console.log(i)
}

function addup(a){
if(isNaN(a)){
    return "only numbers are allowed"
}
else if (a<0){
    return "only positive numbers"
}
else {
    var result =0
    for(i=0;i<=a;i++)
        result=result+i
}
return result
}
var added=addup(4)
console.log(added)



function power(V,C){
    if(isNaN(V)||isNaN(C)){
        return "only numbers are allowed"
    }
    else return V*C
}
var power=power(230,10)
console.log(power)

function maxrange(a,b){
    if (isNaN(a)||isNaN(b)){
        return "only numbers"
    }
    else return (a+b)-1
}
var maxrange=maxrange(10,8)
console.log(maxrange)

function something(A){

    return "something " + A
    }
var answer=something("is better than nothing")
console.log(answer)

function squared(num){
    if(isNaN(num)){
        return "only numbers please"
    }
    else return num*num
}
var answer=squared(5)
console.log(answer)


VERY EASY



function addup(a){
    if(isNaN(a)){
        return " only numbers please"
    }
    else if(a<0){
        return "only positive numbers please"
    }
    else{ var result=0
        for(i=1;i<=a;i++){
            result=result+i
        }
        return result
    }
}
var added=addup(4)
console.log(added)


let karalo = {
    firstname:"lapulga",
    lastname:"the goat"
}
console.log(karalo)
let num=234.654
console.log(Math.floor(num))


function Detectletter(a){
    let hiddenword=""
for(i=0;i<a.length;i++){
let singleletter=a.charat(i)
}

    return hiddenword
}

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


make a function that takes an argument 
check if the argument is only a nunmber
make a variable of Sum=0
satrts from 1 and add 1 from each number until it is lessthan or equals to form athe argument
add sum and i
return sum

function addup(num){
    let sum=0
    if(isNaN(num)){
        return "only numbers are allowed"
    }

    for(i=1;i<=num;i++){
         sum=sum+i
}
return sum
}

let answer=addup(10)
console.log(answer)

function array(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Both of them need to be an array";
    }

    let arr1sorted = arr1.sort();
    let arr2sorted = arr2.sort();

    let arr1min = arr1sorted[0];
    let arr2min = arr2sorted[0];

    let arr1max = arr1sorted[arr1sorted.length - 1];
    let arr2max = arr2sorted[arr2sorted.length - 1];

    if (arr1min <= arr2min || arr1max >= arr2max) {
        return "False";
    } else {
        return "True";
    }
}

let answer = array([2, 4, 6, 4], [3, 5, 7, 8]);
console.log(answer);

function mathstick(num){
    if(isNaN(num)){
          return "Only numbers are allowed"
    }
    else if(num<=0){
        return "only positive numbers are allowed"
    }

    else{
        return 5*num+1
    }
}

let sticks=mathstick(4)
console.log(sticks)

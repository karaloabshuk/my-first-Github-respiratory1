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


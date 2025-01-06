var data="naviya";
data = 11
data=true 
data =[1,2,3,4]//array
data={key:1 }//object
itsString="hello there"
console.log(data)
console.log(itsString.length)
console.log(itsString.split(" "))//next line
console.log(itsString.split(""))//for a each character
console.log(itsString.trim())
//to store the value in a variable
 itsString =itsString.trim();
console.log(itsString.length)
itsString.charAt(0)
itsString[0]
console.log(itsString.indexOf("")
//console.log(itsString.lastIndexOf("l")
//console.log(itsString.includes("l")
console.log("str"+"1")//concat the num  and the string
var newvar=123
console.log(typeof newvar.toString())//convert the number to string
console.log(typeof ""+newvar)
console.log(`${newvar}`)//convert the number to string--literals

var newvar1=`dsvsdvds
sdsv
svsf
dsdsd ${newvar}`;
console.log(newvar1);
  
//----------------NUMBERS-------------------
var numHolder=123.45;
console.log(Number.parseInt(numHolder)//123
var strHolder=123;
console.log(typeof Number(strHolder))//number--method -01
console.log(typeof +strHolder)  //number--method -02
console.log(Number.isInteger(numHolder))//false
console.log(Number.parseFloat(numHolder)//123.45

//---------------MATHS----------------

var intValue=123.4;
console.log(Math.floor(intValue))//123
console.log(Math.ceil(intValue))//124-ceiling-value-of-the-number-
console.log(Math.round(intValue))//123  method-01
console.log(math.power(2,3))//8
console.log(Math.pow(2,3))//8
console.log(Math.sqrt(9))//3
console.log(Math.cbrt(125))//5
console.log(Math.abs(-9))//9---absolute value of the number-
console.log(Math.max(1,2,3,4,5))//5
console.log(Math.min(1,2,3,4,5))//1
console.log(Math.random())//random number between 0 to 1
console.log(Math.random()*100)//random number between 0 to 100

//---------------   boolean----------------
var boolVar=true;//true means 1 and false means 0
console.log(boolVar.valueOf())//true

//---------------   undefined----------------
var undefVar;
console.log(undefVar)//undefined

//---------------   null----------------
var nullVar=null;
console.log(nullVar)//null

//---------------   arrays----------------

var arr=[1,"hello",{obj:1},4,5];
console.log(arr.length)//5
console.log(arr[0])//1
console.log(arr[1])//hello
console.log(arr[2])//{obj:1}
console.log(arr[3])//4
console.log(arr[4])//5
console.log(arr[5])//undefined
//to push the element to the last 
arr.push(6)

//to pop the element from the last
arr.pop()

//to shift the element from the first
arr.shift()

//to unshift the element to the first
arr.unshift(0)





//-1.----------------strings-------------
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
//2.----------------NUMBERS-------------------
var numHolder=123.45;
console.log(Number.parseInt(numHolder)//123
var strHolder=123;
console.log(typeof Number(strHolder))//number--method -01
console.log(typeof +strHolder)  //number--method -02
console.log(Number.isInteger(numHolder))//false
console.log(Number.parseFloat(numHolder)//123.45
//3.---------------MATHS----------------
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
//4.---------------   boolean----------------
var boolVar=true;//true means 1 and false means 0
console.log(boolVar.valueOf())//true
//5.---------------   undefined----------------
var undefVar;
console.log(undefVar)//undefined
//6.---------------   null----------------
var nullVar=null;
console.log(nullVar)//null
//7.---------------   arrays----------------
var arr=[1,"hello",{obj:1},4,5];
console.log(arr.length)//5
console.log(arr[0])//1
console.log(arr[1])//hello
console.log(arr[2])//{obj:1}
console.log(arr[3])//4
console.log(arr[4])//5
console.log(arr[5])//undefined
console.log(arr.push(6)//to push the element to the last 
//to pop the element from the last
//console.log(arr.pop())
//to shift the element from the first
//consoloe.log(arr.shift()
//to unshift the element to the first--used to add the element in the 0 th index 
//arr.unshift(0)
//-----to reverse the array
var sample = hello;
//8.to reverse the string--
console.log(sample.reverse())//["o","l","l","e","h"]
//9.join the string
console.log(sample.join(" "))//hello
//ass-- methods from string and array to number
//10.---------------iterations----------------
//for loop
for(var i=0;i<5;i++){
    console.log(i)
    }//0,1,2,3,4 
    // to reverse the num
    for(var i=5;i>=0;i--){
        console.log(i)
        }//5,4,3,2,1,0
//while loop
var i=0;
while(i<5){
    console.log(i);
}//
//do while loop
var i=0;
do{
    console.log(i);
    i++;
}while(i<5)
    //11.---------higher order function----used for callback and map and filter and reduce and some other function
    //forEach loop--used for array
    ["apple","mango","banana"].forEach((element,index)=>{
        console.log(index,element)
    })
   //todeclare the variable name and value at the same time using foreach
   var fruits=["apple","mango","banana"];
   fruits.forEach((fruit,index)=>{
    console.log(index,fruit)
   })
   //12.conditional statements
   //if 
   if(true){
    console.log("hi")
   }//hi
   //if else
   if(false){
    console.log("hi")
   }
   else{
    console.log("hello")
   }//hello
   //if else if
   if(false){
    console.log("hi")
   }
   else if(true){
    console.log("hello")
   }
   else{
    console.log("bye")
   }//hello 
   //ex:2:// single character is given to check wheather vowels or constants
   var char="a";
   if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
    console.log("vowel")
   }
   else{
    console.log("constant")
   }
   //switch case to check voewl or constant get a value form a users
/*var char=prompt("enter a character");
   var char=char??"b";
   if(char){
   switch(true){
     case "a":
        case char=="e":
        case char=="i":
        case char=="o":
        case char=="u":
        console.log("vowel")
        break;
    default:
        console.log("constant")
        break;
   }//vowel
   }//constant */
   var char=prompt("enter a character");
   var char=char??"b";
   switch(char){
     case "a":
        case"e":
        case "i":
        case "o":
        case "u":
        console.log("vowel")
        break;
    default:
        console.log("constant")
        break;
   }//vowel
   //13.---------------ternary operator---------------- to check wheather vowel or constant from user
   //syntax__ var varnamr=condi?true:false;
   var char=prompt("enter a character");
   var char=char??"b";
   var result=`char=="a"||char=="e"||char=="i"||char
    ="o"||char=="u"`?"vowel":"constant";
    console.log(result)
//eg 02
var samplevar='a';
samplevar=samplevar=="a"?vowel:samplevar=="e"?"vowel":"constant";
console.log(samplevar);
// 15.global scope and local scope
//global scope--defined outside the function
//local scope--defined inside the function
//eg 01 for global scope
var a=10;
function hello(){
    var b=20;
    console.log(a);
    console.log(b);
}//10
hello();
//eg 02 for local scope
function hello(){
    var a=10;
    console.log(a);
}//10
myfunction();
//16.to create a simple caluclator using eval
//eg 01
var num1=10;
var num2=20;
var result=eval(num1+"+"+num2);
console.log(result);
// strings 
// 1. string concatenation
// 2. string interpolation
// 3. string methods
// 4. string template literals
//eg 01
var name="sai";
var age=20;
var result=name+" "+age;
console.log(result);//sai 20
//eg 02
var name="sai";
var age=20;
var result=`name ${name} age ${age}`;
console.log(result);//name sai age 20   
//eg 03
var name="sai";
var age=20;
var result=name.concat(" ",age);
console.log(result);//sai 20
//eg 04
var name="sai";
var age=20;
var result=`name ${name} age ${age}`;
console.log(result);//name sai age 20
console.log(eval(1+2+3-7+"*4"));//-2
//17.---------------to checkm a number or not using nan and isNan---------------
//eg 01
var num=10;
console.log(isNaN(num)); //false
//eg 02
var num="10";
console.log(isNaN(num)); //true
//18.---------------to checkm a number or not using typeof---------------
//eg 01
var num=10;
console.log(typeof num); //number
//eg 02
var num="10";
console.log(typeof num); //string

//19.------------javascript functions----------------

/*
    // function declaration--syntax - function-NAME(){}
    function add(a,b){
        return a+b;
        }
        console.log(add(10,20)); //30
        // function expression--syntax - var NAME = function(){}
        var add = function(a,b){
            return a+b;
            }
            console.log(add(10,20)); //30
            //arrow functions--syntax - var NAME = () => {}
            var add = () => {
                return 10+20;
                }
                console.log(add(10,20)); //30
                // function constructor--syntax - var NAME = new Function()
                var add = new Function("a","b","return a+b");
                console.log(add(10,20)); //30
                // function call--syntax - NAME() */
//eg 02:
   function multiple(value)
   {
    console.log(value*value);

   }
   multiple(2);//4

   //20.---------------to create a simple print function with function overloading concept----------------
   //eg 02:
   function multiple(value)
   {
    return value*value
   }
   console.logmultiple(2);//4

   function multiple(value,value1)
   {
    return value*value
   }
   console.logmultiple(2,3);//4

   //21.---------------to create a simple -------------
   var ans=multiple(2,2);
   console.log(ans);//4
   function multiple(value,value1)
   {
    return value*value1
   }//4

   //22.-----------------to declare a varibale function 
   console.log(check);
   var check = 10 ;//undefined
   console.log(check);//10

//========================================================================
   /*latest standard js is ES6 or ES2015 
   eg : var is the older way of using the js 
   "let" and "const" is the latest way of using the js because it is block scope and its different from var which is function scope
   const : to delcare a varaible name to be constant 
   let : to declare a variable name to be local variable */


 // 23.... new version of js is ES6 or ES2015 using let and const
 let name = "John";
 let name = "John";
 console.log(name);
 // SyntaxError: Identifier 'name' has already been declared
 const name = "John";
 name = "John";
 console.log(name);
 // TypeError: Assignment to constant variable.


 // function in es06  called as  arrow functions 
 // 24.---------------to declare a function using arrow function-------
 //syntax : let/const varName=(para)=>{return }---------
 let add = (a, b) => {
    return a + b;
    }
    console.log(add(10, 20));

// using without return 
const add1 = (a, b) => {
    
    console.log(a+b)
}
add1(10,20)
// or it can bve like 
 const add2=(a,b)=>a+b;
 console.log(add2(10,20));
     
// task -01 method 01---------------to declare a function using arrow function parameter is passed a array variable and return the value of additon of two variable -------
let addvalue = ([a, b]) => {
    return a + b;
    }
    console.log(addvalue([10, 20]));//30

    // or method 2 using for each 
    const addvalue1 = (a) => {
        let sum =0
        a.forEach((value) => {
            sum += value;
        });
        return sum;
        }
        console.log(addvalue1([10, 20, 30, 40, 50]));//150
        // --------------26. mapp function ,filter, reduce , every , some in es6-------------
        //1.map func: return the array doesn't change the original array
        let arr=[1,2,3,4,5]
        let arr1=arr.map(i=>i+1)
        console.log(arr1)//[2,3,4,5,6]
        console.log(arr)//[1,2,3,4,5]

        //2.filter func: return the array that saticifies the condition and doesn't change the original array
        let arr=[1,2,3,4,5]
        let arr3=arr.filter((i)=>i<4)
        console.log(arr1)//[1,2,3]
        console.log(arr)//[1,2,3,4,5]   

        //task 02_- inter function  and filter the even number from the array by using the foreach array func 
        let arr=[1,2,3,4,5]
        let arr2=arr.filter((i)=>i%2==0)
        console.log(arr2)
        console.log(arr)
//3.every : to verify the data in the array 
let arr=[1,2,3,4,5]
let arr4=arr.every(i=>i<5)
console.log(arr4)//false
//4. some function : condtion should full fill at least one time to return true
let arr=[1,2,3,4,5]
let arr5=arr.some(i=>i>5)
console.log(arr5)//true

//5. destructureing of the array 
let arr=[1,2,3,4,5]
let [a,b,c,d,e]=arr
console.log(a)//1
console.log(b)//2
console.log(c)//3
console.log(d)//4
console.log(e)//5
 //eg 02: 
 let testobj={name:"jhon",age:20};
 console.log(testobj.name);//jhon   
 console.log(testobj.age);//20
 //destructureing of the object
 let testobj1={name:"jhon",age:20};
 let {name:mo,age}=testobj1
 console.log(name);//jhon
 console.log(age);//20
 console.log(mo,age);//jhon 20

 //concatation of the object
 let testobj2={name:"jhon",age:20};
 let testobj3={name:"jhon",age:20};
 let testobj4={name:"jhon",age:20};
 let testobj5={name:"jhon",age:20};
 let testobj6={name:"jhon",age:20};
 let testobj7={name:"jhon",age:20};
 let testobj8={name:"jhon",age:20};
 let testobj9={name:"jhon",age:20};
 let testobj10={name:"jhon",age:20};
 let testobj11={name:"jhon",age:20};
 let testobj12={name:"jhon",age:20};

 //change the object to array
 let testobj13={name:"jhon",age:20};
 let testobj14={name:"jhon",age:20};
 let testobj15={name:"jhon",age:20};
 let testobj16={name:"jhon",age:20};
 let testobj17={name:"jhon",age:20};
 let testobj18={name:"jhon",age:20};
 let testobj19={name:"jhon",age:20};
 let testobj20={name:"jhon",age:20};
 let testobj21={name:"jhon",age:20};
 let testobj22={name:"jhon",age:20};



//wreite a code for the rock paper scissor game using all the intergrated func iton of the js
let userChoice=prompt("enter your choice rock paper scissor");
let computerChoice=Math.floor(Math.random()*3)+1;
if(userChoice==computerChoice){
    console.log("its a tie");
    }else if(userChoice==1 && computerChoice==2){
        console.log("you win");
        }else if(userChoice==2 && computerChoice==3){
            console.log("you win");
            }else if(userChoice==3 && computerChoice==1){
                console.log("you win");
                }else{
                    console.log("you lose");
                }
              
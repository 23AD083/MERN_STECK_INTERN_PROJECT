// /*document.children--to see the collection of the children of the document
// document.body.children--to see the collection of the children of the body
// console.log(document.body.children);//to see the collection of the children of the body
// */
// //----------methods are :
// //1. getElementById--to get the element by id
// //2. getElementsByClassName--to get the element by class name
// //3. getElementsByTagName--to get the element by tag name TAG NAME IS CALLED 
// //4. querySelector--to get the element by selector
// //5. querySelectorAll--to get the element by selector all

// //all are in js is the camel case which is because the first letter is capital
//  //let h1=document.getElementById("tag1");
 
//  //text manipulation
// // h1.innerHTML="hello world1";// inner used to clear all the tags in the html  files 
// /*h1.innertext="hello world2";//it is used to extract the text from the html file 
// h1.textContent="hello world3";
// console.log(h1.textcontent);
// location.assign("https://www.google.com");
// //-------- location,history,screen  for the browser details
// // in location f -- denotes the function 
// */
// //console.log(screen.orientation);
// //history.back();
// /*let div=document.createElement("div");
// div.innerHTML="hello world";
// let textnode=document.createTextNode("created using js ")//it is used to create the text node
// div.classList='divClass class2 class3'//it is used to add the class
// div.append(textnode)
// let body2=document.getElementById("data");
// body.append(div);
// console.log(div);//it is used to print the textnode
// let div=document.createElement("div");
// let list21=docoument.getElementById("one")
// let list22=docoument.getElementsByClassName("ONE")[0]
// let list23=docoument.getElementsByTagName("UL")[0]
// let list24=docoument.querySelector("ul.one")// to pick the first conditon which is poasses 
// let list25=docoument.querySelectorAll("ul.li")//
// console.log(list);
// //------------create element -----
// //eg-01: 
// let body1=document.getElementById("data")
// let ul=document.createElement("ul")

// let li1=document.createElement("li")
// let li2=document.createElement("li")
// let li3=document.createElement("li")
// let li4=document.createElement("li")
// let li5=document.createElement("li")
// ul.append(li1,li2,li3,li4,li5)

// let text1=document.createTextNode("naviya")
// let text2=document.createTextNode("nandhini")
// let text3=document.createTextNode("sathya")
// let text4=document.createTextNode("sivaraj")
// let text5=document.createTextNode("jhovi")
// li1.append(text1)
// li2.append(text2)
// li3.append(text3)
// li4.append(text4)
// li5.append(text5)

// console.log(ul);
// body.append(ul);//to push it in the body
// //ul.className="divclass";//to add the class

// //using set attribute we can change the attribute of the element
// ul.setAttribute("id","tag")

// ul.style.color="green"
// ul.style.backgroundColor="lightblue"
// ul.style.cssText="color:red; background-color:pink"
//  // too create a list and append it to the body
 
//  let body4=document.getElementById("data")
// let ul=document.createElement("ul")
//  let li11=document.createElement("li")    
//   let li12=document.createElement("li")
//  let li13=document.createElement("li")    
//   ul.append(li11,li12,li13)

//   let text11=document.createTextNode("naviya")
//   let text12=document.createTextNode("nandhini")
//   let text13=document.createTextNode("sathya")
//   li11.append(text11)
//   li12.append(text12)
//   li13.append(text13)

//   console.log(ul); */

//   //--------------creating a array varaibles and pushing the elements in the array
//  /* let body=document.getElementById("data")
//   let arr=["naviya","nandhini","sathya","sivaraj","jhovi"]
//   let ul=document.createElement("ul")
//   arr.map=(i)=>{
// console.log(i);
// let li=document.createElement("li")
// let text=document.createTextNode(i)
// li.append(text)
// ul.append(li)
//   }
//   console.log(ul);
//   body.append(ul);*/
// ul.prepend(li)// to add the li at the start of the ul
//   let body1=document.getElementById("data")
//   console.log(body.children[0].remove());//remove is use dto remove the element from the dom

// //to remove more child
// let body=document.getElementById("data")
// li.remove()//another method to remove from the dom
// // -----------time and date---------------------------
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());
// // to get the current date and time
// let date1 = new Date();
// console.log(date1);

// //---------step 01 - to design  (platforms :for 2 d:  figma,sketch,ps,ai,xd,photoshop,3d: spline, blender,3ds max, maya, fusion 360, sketchup)

// //step 02 --

// //--------js function--------

// let button=document.getElementById("btn")
// button.addEventListener("click",function(){
//     alert("hello world")
// })
// let button1=document.getElementById("btn")
// button.addEventListener("dblclick",function(){
//     alert("hello world")
// })
//  let parent=document.getElementsByClassName ("parent")[0];
//  let child=parent.getElementsByClassName("child")[0];
// parent.addEventListener("click",function(){
//   this.alert("hello world")
// })
// child.addEventListener("click",function(){
//   this.alert("hello world")
// })
// // to stop the propagation 
// child.addEventListener("click",function(event){
//   event.stopPropagation()
//   this.alert("hello world")

// })
// //to check the target element
// child.addEventListener("click",function(event){
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.alert("hello world")
// })

// //to creata div to mouseup and maouseleave event and mouseenter
// let div=document.getElementById("div");
// div.addEventListener("mouseup",function(){
//   console.log("mouse up");
//   })
//   div.addEventListener("mouseleave",function(){
//     console.log("mouse leave");
//     })
//     div.addEventListener("mouseenter",function(){
//       console.log("mouse enter");
//       })



      //task is to create the digital clock with time and time for each second ,second,minute,hour,day,month,year and also use the set interval for 1000ms and use the set time out for 1000ms  with more attractive user interface with css
      let hour=document.getElementById("hour");
      let minute=document.getElementById("minute");
      let second=document.getElementById("second");
      let day=document.getElementById("day");
      let month=document.getElementById("month");
      let year=document.getElementById("year");
      let time=setInterval(function(){
        let date=new Date();
        let h=date.getHours();
        let m=date.getMinutes();
        let s=date.getSeconds();
        let d=date.getDate();
        let mo=date.getMonth();
        let y=date.getFullYear();
        hour.innerHTML=h;
        minute.innerHTML=m;
        second.innerHTML=s;
        day.innerHTML=d;
        month.innerHTML=mo;
        year.innerHTML=y;
      },1000)
      setTimeout(function(){
        alert("hello world")
        },1000)

      

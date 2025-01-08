//localStorage.setItem("getItem", 2500);
//console.log(localStorage.getItem("getItem"));
// localStorage.removeItem("getItem");
// console.log(localStorage.getItem("getItem"));
// localStorage.clear();
 //to take  count and browser refresh is reloaded and increament it by one 

 var count = localStorage.getItem("count")?
 localStorage.getItem("count"):0;
 count++;
 localStorage.setItem("count", count);
 console.log(count);

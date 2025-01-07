console.log("hello");
 /* //to create a function for set timer 
  setTimeout(() => {
    console.log("hello");
  }, 1000);
  //to create a function for set interval
  setInterval(() => {
    console.log("hello");
  }, 1000);

  // 2. clear interval
  var intervalId = setInterval(() => {
    console.log("hello");
  }, 1000);
  clearInterval(intervalId);
  //3.call back function
  function add(a, b, callback) {
    var result = a + b;
    callback(result);
  }
  function printResult(result) {
    console.log(result);
  }
  add(10, 20, printResult);
  //4.promise all function--async and await 
 /* var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1 resolved");
    }, 1000);
  });
  var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2 resolved");
    }, 2000);
  });
  Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
  });
  //.promise race function
  var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1 resolved");
    }, 1000);
  });
  var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2 resolved");
    }, 2000);
  });
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
  });
  //. async await 
  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  } //to call the function
  fetchData();
  // async await with promise.all
  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  //async await with promise.all
  async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
      } catch (error) { 
        console.error(error);
      }     
  } //to call the function
  fetchData();
*/
/*const data=()=>{
    const response = fetch("https://jsonplaceholder.typicode.com/posts");
    return response;
}
data().then((e)=>{
    console.log(e));
    console.log("hello")
})
*/
  //--------5.*/

  constdata=async()=>{
    let response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    response=await response.json();
    console.log(response);
}
data()

//
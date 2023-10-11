const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "shawon", email: "shawon@ggmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "nowhsad", password: "predator2521" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = 1;
    if (!error) {
      resolve({ language: "javascript", pin: 2521 });
    } else {
      reject("ERROR: Js went wrong.");
    }
  }, 1000);
});
/*async function consumepromiseFive() {
  const response = await promiseFive;
  console.log(response);
}
consumepromiseFive();*/
async function consumepromiseFiveAlt(){
  try{
    const response = await promiseFive
    console.log(response)
  }catch(error){
    console.log(error)
  }
}
consumepromiseFiveAlt()

/*async function getUserData(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  } catch(error){
    console.log('Error 404!')
  }
}
getUserData()*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data)
}).catch((error)=>console.log(error))


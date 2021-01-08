"use strict"

// Immediatley Resolved
//var myPromise = Promise.resolve('Foo');

//myPromise.then((res) => console.log(res));

/*
var myPromise = new Promise(function(resolve, reject){
  setTimeout(() => resolve(4), 2000);
});
myPromise.then((res) => {
  res +=3;
  console.log(res);
});
*/
/*
function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
  let todos = JSON.parse(data);
  let output = '';
  for(let todo of todos){
    output += `
      <li>
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
      </li>
    `;
  }

  document.getElementById('template').innerHTML = output;
}).catch(function(err){
  console.log(err);
});*/

fetch('https://javascript.info/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", "isAdmin": true}
});


function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500


async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500 (4)
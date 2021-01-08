

function getRandomNumber() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(Math.random()), 5000);
        });
        return promise;
}; 

function returnMyNumer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random()));
    }, 5000);
  })
}

//Async function that's awaiting the result from getRandomNumber & printing the result
async function asyncFunction () {
  console.log('Waiting');  
  let result = await getRandomNumber();
    console.log(`Task complete in ${result} seconds`);
    
};
asyncFunction(); 
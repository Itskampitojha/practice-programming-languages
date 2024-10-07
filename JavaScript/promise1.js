const myPromise = Promise.resolve('Hello, World!');

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.error('An error occurred:', error);
});

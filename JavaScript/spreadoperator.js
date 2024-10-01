// Create an array of names
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Copy the array using the spread operator
const copiedNames = [...names];

console.log('Original array:', names);
console.log('Copied array:', copiedNames);


// creating rest operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, ...rest] = numbers;

console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);

//merging two arrays of data fetched from separate api into a single list

const apiData1 = [1, 2, 3, 4, 5];
const apiData2 = [6, 7, 8, 9, 10];

const mergedData = [...apiData1, ...apiData2];

console.log('Merged data:', mergedData);


//filtering an array of objects to display items based on a search query

const items = [
    { name: 'Book', category: 'Stationery' },
    { name: 'Pen', category: 'Stationery' },
    { name: 'Apple', category: 'Fruit' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' }
];

// Filter items by category
const stationeryItems = items.filter(item => item.category === 'Stationery');
const fruitItems = items.filter(item => item.category === 'Fruit');
const vegetableItems = items.filter(item => item.category === 'Vegetable');

console.log('Stationery items:', stationeryItems);
console.log('Fruit items:', fruitItems);
console.log('Vegetable items:', vegetableItems);

// Filter items by search query
const searchQuery = 'a';
const searchResults = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
);

console.log('Search results for "a":', searchResults);



// Learning about Promises

// 1. Basic Promise usage
console.log('1. Basic Promise usage:');
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved after 1 second');
    }, 1000);
});

simplePromise.then(result => console.log(result));

// 2. Handling errors with Promises
console.log('\n2. Handling errors with Promises:');
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong');
    }, 1000);
});

errorPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// 3. Chaining Promises
console.log('\n3. Chaining Promises:');
const chainedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});

chainedPromise
    .then(result => result * 2)
    .then(result => result + 3)
    .then(finalResult => console.log('Final result:', finalResult));

// 4. Promise.all() for parallel execution
console.log('\n4. Promise.all() for parallel execution:');
const promise1 = Promise.resolve('First');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second'), 1000));
const promise3 = Promise.resolve('Third');

Promise.all([promise1, promise2, promise3])
    .then(results => console.log('All promises resolved:', results));

// Situations to use Promises:

console.log('\nSituations to use Promises:');
console.log('1. Asynchronous operations (e.g., API calls, file I/O)');
console.log('2. Handling multiple asynchronous tasks in parallel');
console.log('3. Improving code readability for complex async logic');
console.log('4. Error handling in asynchronous code');
console.log('5. Avoiding callback hell in nested asynchronous operations');


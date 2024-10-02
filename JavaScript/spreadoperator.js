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

// 5. Mapping over an array of user data to create a list of user cards in React
console.log('\n5. Mapping over user data to create user cards in React:');

// This is a React component, typically in a separate file
const UserCard = ({ user }) => (
  <div className="user-card" key={user.id}>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
  </div>
);

// This would be in your main component file
const UserList = () => {
  const userData = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  return (
    <div className="user-list">
      {userData.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

console.log('React component for rendering user cards created.');
console.log('To use: <UserList />');


// Grouping an array of objects by a specific property
console.log('\n6. Grouping an array of objects by a specific property:');

const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'New York' },
  { name: 'David', age: 28, city: 'Los Angeles' },
  { name: 'Eve', age: 32, city: 'Chicago' }
];

const groupByCity = people.reduce((acc, person) => {
  const { city } = person;
  acc[city] = acc[city] || [];
  acc[city].push(person);
  return acc;
}, {});

console.log('Grouped by city:', groupByCity);



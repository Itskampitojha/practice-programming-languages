const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const filteredNames = names.filter(name => {
    return name.length > 4;
});

console.log(filteredNames);




// Create a user object
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com'
};

// Destructure the user object
const { firstName, lastName, age, email } = user;

// Log the destructured values
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Email: ${email}`);

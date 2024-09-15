import { useState, useEffect } from 'react';
import './MyComponent.css'; // Importing CSS file for styling

function MyComponent() {
  const [name, setName] = useState("John");
  const [isJohn, setIsJohn] = useState(true); // Track if name is John
  const [message, setMessage] = useState(''); // State for message

  const changeName = () => {
    setIsJohn((prev) => !prev); // Toggle between true and false
    setName((prevName) => (prevName === "John" ? "Doe" : "John"));
  };

  useEffect(() => {
    console.log("Component mounted!"); // Log when mounted
    return () => {
      console.log("Component will unmount!"); // Log when unmounted
    };
  }, []); // Empty array means this runs only once when the component mounts

  useEffect(() => {
    console.log(`Name changed to ${name}`); // Log when name changes
    setMessage(`Name changed to ${name}`); // Update message state
  }, [name]); // This runs when the 'name' state changes

  return (
    <div>
      <h1 className={isJohn ? 'john' : 'doe'}>Hello, {name}!</h1>
      <button onClick={changeName}>Change Name</button>
      {message && <p>{message}</p>} {/* Display message when it exists */}
    </div>
  );
}

export default MyComponent;

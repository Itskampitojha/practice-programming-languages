const task1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 1000);
  });
  
  const task2 = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Task 2 failed");
    }, 1500);
  });
  
  const task3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 complete");
    }, 2000);
  });
  
  // Check all promises without stopping on failure
  Promise.allSettled([task1, task2, task3])
    .then((results) => {
      results.forEach((result) => console.log(result));
    });
    
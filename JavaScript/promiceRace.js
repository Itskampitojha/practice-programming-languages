

// promise chaining

const saveMoney = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Paise save ho gaye!");
      }, 1000); // 1 second baad paise save ho jayenge
    });
  };
  
  const buyCycle = (message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Cycle khareed li!");
      }, 2000); // 2 seconds baad cycle khareed lo
    });
  };
  
  const getDelivery = (message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Cycle deliver ho gayi!");
      }, 3000); // 3 seconds baad delivery ho gayi
    });
  };
  
  // Chain the promises
  saveMoney()
    .then(buyCycle)
    .then(getDelivery)
    .then((message) => {
      console.log(message); // Final message: "Cycle deliver ho gayi!"
    });
  
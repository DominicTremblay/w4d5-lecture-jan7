const getUser = cb => {
  console.log('Getting the user, 2 seconds...');
  setTimeout(() => {
    cb(null, {
      name: 'Bob Squarepants',
      email: 'bob@squarepants.com',
    });
  }, 2000);
};

const upperCaseAsync = (inputStr, cb) => {
  console.log('async, taking 2 seconds...');
  setTimeout(() => {
    cb(null, inputStr.toUpperCase());
  }, 3000);
};

// upperCaseAsync('Hello Bob!', (err, str) => {
//   if (err) {
//     console.log('Error');
//     return;
//   }
//   console.log(str);
// });

const sayHello = () => {
  getUser((err, user) => {
    console.log(user);
    if (err) {
      console.log('Error getting the user!');
      return;
    }
    upperCaseAsync(`Hello ${user.name}`, (err, str) => {
      if (err) {
        console.log('Error, cannot print hello message!');
        return;
      }
      console.log(str);
    });
  });
};

sayHello();

const getUser = () => {
  console.log('Getting the user, 2 seconds...');

  return new Promise((resolve, reject) => {
    // if everything turned out fine
    if (true) {
      setTimeout(
        resolve({
          name: 'Bob Squarepants',
          email: 'bob@squarepants.com',
        }),
        2000
      );
    } else {
      reject(Error('Cannot get the user object!'));
    }
  });
};

const upperCaseAsync = inputStr => {
  console.log('async, taking 2 seconds...');

  // if everything turned out fine
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(resolve(inputStr.toUpperCase()), 5000);
    } else {
      reject(Error('Cannot say Hello!'));
    }
  });
};

// upperCaseAsync('Hello Bob!', (err, str) => {
//   if (err) {
//     console.log('Error');
//     return;
//   }
//   console.log(str);
// });

// const sayHello = () => {
//   getUser((err, user) => {
//     console.log(user);
//     if (err) {
//       console.log('Error getting the user!');
//       return;
//     }
//     upperCaseAsync(`Hello ${user.name}`, (err, str) => {
//       if (err) {
//         console.log('Error, cannot print hello message!');
//         return;
//       }
//       console.log(str);
//     });
//   });
// };

const sayHello = () => {
  getUser()
    .then(user => {
      console.log(user);
      return upperCaseAsync(user.name);
    })
    .then(helloStr => console.log(helloStr))
    .catch(err => console.log('error', err.message));
};

// sayHello();

const multipleSayHello = () => {
  const hellos = Promise.all([
    upperCaseAsync('Bob'),
    upperCaseAsync('Alice'),
  ]).then(helloStrs => console.log(helloStrs));
};

multipleSayHello();

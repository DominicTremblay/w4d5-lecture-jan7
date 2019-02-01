// const getUser = () => new Promise((resolve, reject) => resolve('Bob'));

// getUser.then(user => console.log(user));

const fct = () => new Promise((resolve, reject) => resolve('done!'));

fct().then(str => console.log(str)); // done! (shows up right now)

// no error
const jsonData = `{
  "id": "1",
  "email": "email@mail.com"
}`;

class IncompleteDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'IncompleteDataError';
    this.message = message;
  }
}

// const jsonData = `{wrong}`;
try {
  let user = JSON.parse(jsonData);

  if (!user.password) {
    throw new IncompleDataError('Missing password in user object');
  }
} catch (error) {
  console.log(`${error.name} ${error.message}`);
}

const someFct = () => {
  console.log('Executing someFct');
  // This will throw a reference error
  undeclared;
};

try {
  someFct();
} catch (error) {
  console.log(`Catched Error: ${error.name} ${error.message}`);
  console.log(error.stack);
} finally {
  console.log('finally done');
}

console.log('after executing someFtc...');

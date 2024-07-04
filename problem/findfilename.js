// Write a JS program to get the extension of a filename.

const getfileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getfileExtension('index.html'))
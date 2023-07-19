const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost('Titulo do Post', 'Lorem ipsum dolor....')

post.addComment('Guilherme', 'Muito bom')
post.addComment('Lucas', 'Incrível')

console.log(john);
console.log(post);
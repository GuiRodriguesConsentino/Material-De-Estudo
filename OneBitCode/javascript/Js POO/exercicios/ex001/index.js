// const book = {
//    title: 'Eragon',
//    page: 468,
//    published: true,
//    inStock: 20,
//    tags: ['fantasy', 'adventure', 'medieval'],
//    author: {
//       name: 'Christopher Paolini'
//    },
//    addOnStock(quantity) {
//       this.inStock += quantity
//    }
// }


// PascalCase (Primeira letra maiúscula)
function Book(title, pages, tags, author) {
   this.title = title
   this.pages = pages
   this.tags = tags
   this.author = author
   this.published = false
   this.inStoks = 0
   this.addOnStock = function(quantity) {
      this.inStoks += quantity
   } 
   this.save = function () {
     // salva no banco de dados
   }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author)

console.log(eldest);
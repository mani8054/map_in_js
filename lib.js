
    const input = require("readline-sync");

    const library = new Map([
      [1, { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", isAvailable: true }],
      [2, { title: "The Avengers: Age of Ultron", author: "Stan Lee", isAvailable: true }],
      [3, { title: "The Alchemist", author: "Paulo Coelho", isAvailable: true }],
      [4, { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", isAvailable: false }],
      [5, { title: "The Hobbit", author: "J.R.R. Tolkien", isAvailable: true }]
    ]);
    
    /*let title = input.question("Which book do you want to purchase, guys? : ");
    
    let found = false; // to check if book exists
    
    for (let [id, book] of library) {
      if (book.title.toLowerCase() === title.toLowerCase()) { // compare ignoring case
        found = true;
        if (book.isAvailable) {
          console.log(`✅ "${book.title}" is available now!`);
        } else {
          console.log(`❌ "${book.title}" is not available now.`);
        }
        break; // stop after finding the book
      }
    }
    
    if (!found) {
      console.log("Sorry, that book is not in our library list.");
    }
    */
    for (let [id, book] of library) {
        console.log("Book ID:", id);
        console.log("Book Title:", book.title);
      }
      
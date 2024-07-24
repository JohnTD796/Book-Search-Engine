const db = require('../config/connection');
const { Book } = require('../models');

db.once('open', async () => {
  try {
    await Book.deleteMany();

    const books = [
      {
        title: 'Book Title 1',
        author: 'Author 1',
        description: 'Description of Book 1',
        image: 'book1.jpg',
        link: 'https://example.com/book1'
      },
      {
        title: 'Book Title 2',
        author: 'Author 2',
        description: 'Description of Book 2',
        image: 'book2.jpg',
        link: 'https://example.com/book2'
      },
      // Add more books as needed
    ];

    await Book.create(books);

    console.log('Books seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
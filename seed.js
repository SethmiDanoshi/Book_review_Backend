const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('./models/Review'); // Adjust the path to your Review model
const connectDB = require('./config/db'); // Adjust the path to your DB config

dotenv.config();
connectDB();

const reviews = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 3,
    reviewText: "A tragic story about the American Dream and the excess of the Jazz Age."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 5,
    reviewText: "A timeless masterpiece that explores human morality and justice in the Deep South."
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4,
    reviewText: "A chilling dystopian novel about surveillance, control, and the loss of freedom."
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 5,
    reviewText: "A witty and romantic exploration of society and relationships in the Regency era."
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    rating: 2,
    reviewText: "A dense but powerful narrative about obsession, revenge, and the sea."
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4,
    reviewText: "An iconic tale of teenage rebellion and identity in mid-20th century America."
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 5,
    reviewText: "A thrilling adventure filled with magic, courage, and camaraderie."
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    rating: 4,
    reviewText: "A provocative vision of a future society driven by technology, control, and pleasure."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 5,
    reviewText: "A poetic journey of self-discovery and following one's dreams."
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    rating: 5,
    reviewText: "An epic fantasy saga of friendship, courage, and the struggle between good and evil."
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    rating: 5,
    reviewText: "A heartbreaking story of friendship, betrayal, and redemption set in Afghanistan."
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    rating: 4,
    reviewText: "A captivating tale of survival and spirituality, set on a lifeboat with a tiger."
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    rating: 3,
    reviewText: "A haunting post-apocalyptic journey of a father and son through a desolate world."
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    rating: 5,
    reviewText: "A magical start to a beloved series about courage, friendship, and adventure."
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    rating: 5,
    reviewText: "An intricate tale of political intrigue, war, and dragons in a fantasy world."
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    rating: 4,
    reviewText: "A thrilling mystery that combines art, religion, and history in a modern treasure hunt."
  },
  {
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    rating: 4,
    reviewText: "A heartwarming story of an imaginative and spirited orphan girl in rural Canada."
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    rating: 4,
    reviewText: "A gothic horror novel that introduced the iconic vampire, Count Dracula."
  },
  {
    title: "The Shining",
    author: "Stephen King",
    rating: 5,
    reviewText: "A chilling horror story of a haunted hotel and a family's descent into madness."
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    rating: 4,
    reviewText: "A poignant love story of two teenagers battling cancer and finding hope in each other."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    rating: 5,
    reviewText: "A science fiction epic of politics, religion, and the battle for control of a desert planet."
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    rating: 4,
    reviewText: "A dystopian tale of survival, rebellion, and hope in a world of oppression."
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    rating: 4,
    reviewText: "A thought-provoking dystopian novel about the cost of utopia and the power of memory."
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    rating: 5,
    reviewText: "A dark and elegant exploration of vanity, morality, and the pursuit of pleasure."
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    rating: 4,
    reviewText: "A dystopian story of a woman's struggle for freedom in a theocratic regime."
  },
  {
    title: "The Catch-22",
    author: "Joseph Heller",
    rating: 3,
    reviewText: "A satirical novel about the absurdity of war and bureaucracy."
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    rating: 4,
    reviewText: "A surreal and anti-war tale of a soldier's experience with time and trauma."
  },
  {
    title: "The Stand",
    author: "Stephen King",
    rating: 5,
    reviewText: "A gripping post-apocalyptic tale of good versus evil."
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    rating: 4,
    reviewText: "A heartwarming story of healing and friendship through the discovery of a hidden garden."
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    rating: 5,
    reviewText: "A passionate and tumultuous tale of love and revenge on the Yorkshire moors."
  }
];

const seedDatabase = async () => {
  try {
    await Review.deleteMany(); // Optional: Clears the collection before adding new data
    await Review.insertMany(reviews); // Insert the 30 reviews
    console.log('Database seeded with sample reviews!');
    process.exit();
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedDatabase();

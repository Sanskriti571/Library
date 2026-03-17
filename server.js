const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Book = require("./models/Book");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();
// app.get("/", (req, res) => {
//   res.send("Library Backend API Running");
  
// });

app.set("json spaces", 2);

app.get("/", (req, res) => {
  const books = [
    {
      _id: "1",
      title: "The Alchemist",
      isbn: "9780061122415",
      author: "Paulo Coelho",
      totalCopies: 10,
      genre: "Fiction",
      publisher: "HarperCollins",
      status: "Available"
    },
    {
      _id: "2",
      title: "Rich Dad Poor Dad",
      isbn: "9781612680194",
      author: "Robert Kiyosaki",
      totalCopies: 5,
      genre: "Finance",
      publisher: "Plata Publishing",
      status: "Available"
    },
    {
      _id: "3",
      title: "Atomic Habits",
      isbn: "9780735211292",
      author: "James Clear",
      totalCopies: 7,
      genre: "Self-help",
      publisher: "Avery",
      status: "Available"
    }
  ];

  res.json(books);
});

// app.get("/books", async (req, res) => {
//   const books = await Book.find();
//   res.json(books);
// });

app.use("/api", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


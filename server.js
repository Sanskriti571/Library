const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.send("Library Backend API Running");
});

app.use("/api", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


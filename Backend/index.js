import express from 'express'
import "dotenv/config"
import connectDB from './db/index.js';
import router from './routes/index.js';
const app = express();
const PORT = process.env.PORT  || 5000;

app.use(express.json())
app.use("/api" , router)
connectDB()

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`I'm running from nodemon server at http://localhost:${PORT}`);
});
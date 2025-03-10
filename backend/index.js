const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database/db');

app.use(express.json());
app.use(cors());
app.use("/api/auth", require('./routers/auth.router'));
connection();

app.get("", (req, res) => {
    res.json({ message: "API Working" });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


app.get("/", (req, res) => {
  res.send('rfd');
});

app.get("/about", (req, res) => {
  res.send('about me');
});

app.get("/contact", (req, res) => {
  res.send('dont contact me.');
});

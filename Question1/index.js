const express = require("express");
const app = express();
const port = 8008;

app.get("/numbers", async (req, res) => {
  try {
    const { url } = req.query || { url: [] };
    
    let promiseArray = [];
    for (let i of url) promiseArray.push(fetch(i));
    const responses = await Promise.all(promiseArray);

    let promiseArray2 = [];
    for (let i of responses) promiseArray2.push(i.json());
    const data = await Promise.all(promiseArray2);
    const set = new Set();
    
    for (let { numbers } of data) for (let i of numbers) set.add(i);

    const numbers = [...set];
    numbers.sort((a, b) => a - b);

    res.json({ numbers });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ error: "internal" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 5500;

let items = [
  ["11-inch iPad Pro M5 chip Wi-Fi 256GB - Space Black", "Newest iPad with lowest storage!", 100, "ipad.webp"], 
  ["GIGABYTE - NVIDIA GeForce RTX 5090", "Newest graphic card on the market!", 200, "graphicCard.webp"],
  ["Fresh Bananas", "Luxury Bananas", 1000, "banana.avif"],
  ["Samsung QN98QN990F", "Originally $35,000!", 1000, "tv.jpg"]

];

app.get("/api/getItem", (req, res) => {
    res.json(items);
});

app.post("/api/sendItem", (req,res) => {
    let currentItemFromUser = req.body;

    console.log(currentItemFromUser);
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
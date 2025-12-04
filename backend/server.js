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
  ["Samsung QN98QN990F", "Originally $35,000!", 1500, "tv.jpg"]

];

let currentItemServer = [];


//getItem
app.get("/api/products", (req, res) => {
    res.json(items);
});

//getCurrentItem
app.get("/api/selected-product", (req, res) => {
    res.json(currentItemServer);
    
});

//sendItem
app.post("/api/select-product", (req,res) => {
    let currentItemUser = req.body;
    currentItemServer = currentItemUser;
    

    
});

app.post("/api/submit-order", (req,res) => {
  if(!req.body){
    res.json({message: "Issue with server, resubmit the order!."})
  }
  else{
    let itemInfo = req.body;
 
    console.log("User ordered: |" + itemInfo[0] + "|");

    res.json({
      message: "Your item will be delivered soon."
    })
  }
  
    
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
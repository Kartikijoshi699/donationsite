const dotenv=require('dotenv')
dotenv.config();

const mongoose = require('mongoose');
const express = require('express');
const routes=require('./routes/ngoRoutes');
const restaurantRoutes = require("./routes/restaurantRoutes");

const cors=require('cors');

const MONGO_URI = process.env.MONGODB_URI;

const app=express();
app.use(cors());
app.use(express.json()); 




app.use('/api/ngo',routes);
app.use("/api/restaurants", restaurantRoutes); // ✅ add this



if (!MONGO_URI) {
  console.error("❌ MONGODB_URI not found in .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`);
    
  }) 
})
.catch((err) => {
  console.error(err.message);
});

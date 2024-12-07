const mongoose = require("mongoose");

const connectionString = "mongodb+srv://prashant:goobar123@prashant.hdnp5.mongodb.net/?retryWrites=true&w=majority&appName=prashant"
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // serverSelectionTimeoutMS: 5000
}).then(() => {
  console.log("Connection to MongoDB Atlas successful");
}).catch((error) => {
  console.log("Error connecting to MongoDB Atlas:", error);
});

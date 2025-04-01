const app = require("./app");
const connectDB = require("./config/db.js");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
console.log("PORT:", process.env.PORT);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

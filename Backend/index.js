const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Import Routes
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoutes");
const cartRoute = require("./routes/cartRoutes");

app.use(bodyParser.json());

// ✅ CORS CONFIGURATION
const allowedOrigins = [
  "https://ecommercefrontend-sepia-psi.vercel.app",  // Deployed Frontend
  "http://localhost:5173" // Local Development (Optional)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Handle Preflight Requests
app.options("*", cors());

// ✅ API Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/images", express.static("uploads/images"));
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/cart", cartRoute);

// ✅ Fix Port Issue
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("Error Connecting MongoDB", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
require('dotenv').config();
const userRoute=require("./routes/userRoutes")
const adminRoute=require("./routes/adminRoutes")
const cartRoute=require("./routes/cartRoutes")

app.use(bodyParser.json());

const allowedOrigin = "https://ecommercefrontend-sepia-psi.vercel.app";

app.use(cors({
  origin: allowedOrigin,  // Use the exact frontend URL here
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true  // Allow credentials to be sent
}));



app.get("/",(req,res)=>{
  res.send("Hello World")
})


app.use("/images",express.static("uploads/images"))
app.use("/api/user",userRoute)
app.use("/api/admin",adminRoute)
app.use("/api/cart",cartRoute)

  const PORT = process.env.PORT || 0;

  mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb Connected Succesfully"))
.catch((err)=>console.log("error with connecting mongodb",err))

app.listen(PORT,()=>{
    console.log(`server connected succesfully ${PORT}`)
})

import Express  from "express";
import cors from "cors";
// import connectToMongo from "./config/db.js";
import "./config/db.js"
import authRoutes from "./routes/blog.js";


const app=Express();
const PORT= process.env.PORT || 8081;

// connectToMongo();

app.use(cors());
app.use(Express.json());
app.use(Express.static("public/upload"));

app.get("/",(req,res) => {
    res.send("RUNNED")
});

app.use("/api/v1",authRoutes);

app.listen(PORT,() => {
    console.log("server is listening");
});
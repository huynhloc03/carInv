import express from "express";
import carRoutes from "./routes/cars.js"
import authenticationRoutes from "./routes/authentication.js"
import agentsRoutes from "./routes/agents.js"
const app = express()

app.use(express.json())
app.use("/api/cars",carRoutes)
app.use("/api/agents",agentsRoutes)
app.use("/api/authentication",authenticationRoutes)
app.listen(5000, () =>{
    console.log("Server running on port 5000")
})
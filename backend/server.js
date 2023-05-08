const express=require("express")
const cors=require("cors");

const connection=require("./Config/db");
const addsRoute = require("./Routes/Adds.route");
const companyRoute = require("./Routes/Company.route");
const app=express();
app.use(express.json());
app.use(cors({
     origin:"*"
}));

app.use("/adds",addsRoute)
app.use("/company",companyRoute)

app.listen(7000,async()=>{
     await connection
     console.log("server is running on port 7000")
})
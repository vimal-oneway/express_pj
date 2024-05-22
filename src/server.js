import express from "express";

const app = express();

app.use(express.json())

app.get("/", (req, res)=>{
	res.send("server is running")
})

app.post("/", (req, res)=>{
	console.log(req.body)
	res.json({serverMessage:req.body.message})
})

app.patch("/", (req, res)=>{
	res.send(req.body);
})

app.listen(8080, () => {
	console.log("server is up at port 8080");
})

import express from "express";
import {Bot} from "./bot/bot";
import {join} from "path";

const app = express();
const port = 8080;

//stores clientside script
app.use("/res",express.static(join(__dirname,'..\\public')));

//arrival page
app.get("/",(req,res) => {
    res.sendFile(join(__dirname,"..\\public\\index.html"));
});

//returns data to ajax
app.get("/data",(req,res)=>{
    res.send(`${observerbot.getLastMessage()} sent by ${observerbot.getLastUser()}`);
});

//start the bot
const observerbot = new Bot("Nzk1Mjg3MDA1OTc3MTE2Njgy.X_HKvQ.Q5sVds9b7Trkyj5L7-G-ParjUNM");

app.listen(port,()=>{
    console.log(`http server up on port ${port}`);
});


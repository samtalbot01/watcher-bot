"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bot_1 = require("./bot/bot");
const path_1 = require("path");
const app = express_1.default();
const port = 8080;
//stores clientside script
app.use("/res", express_1.default.static(path_1.join(__dirname, '..\\public')));
//arrival page
app.get("/", (req, res) => {
    res.sendFile(path_1.join(__dirname, "..\\public\\index.html"));
});
//returns data to ajax
app.get("/data", (req, res) => {
    res.send(`${observerbot.getLastMessage()} sent by ${observerbot.getLastUser()}`);
});
//start the bot
const observerbot = new bot_1.Bot("Nzk1Mjg3MDA1OTc3MTE2Njgy.X_HKvQ.Q5sVds9b7Trkyj5L7-G-ParjUNM");
app.listen(port, () => {
    console.log(`http server up on port ${port}`);
});

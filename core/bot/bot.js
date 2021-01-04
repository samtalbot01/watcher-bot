"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
class Bot extends discord_js_1.Client {
    constructor(token) {
        super();
        this.msg = "default";
        this.sender = "default";
        this.once("ready", () => {
            console.log("Bot online");
        });
        this.on("message", (message) => {
            this.msg = message.content;
            this.sender = message.author.username;
        });
        this.login(token);
    }
    getLastMessage() {
        return this.msg;
    }
    getLastUser() {
        return this.sender;
    }
}
exports.Bot = Bot;

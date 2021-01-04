import {Client} from "discord.js";

export class Bot extends Client
{
    private msg: string;
    private sender: string;

    constructor(token: string)
    {
        super();
        this.msg = "default";
        this.sender = "default";

        this.once("ready",()=>{
            console.log("Bot online");
        });

        this.on("message", (message)=>{
            this.msg = message.content;
            this.sender = message.author.username;
        });

        this.login(token);
    }

    public getLastMessage():string 
    {
        return this.msg;
    }

    public getLastUser():string
    {
        return this.sender;
    }
}
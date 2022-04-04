const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "INPUT TOKEN"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello!")
    }
})

const welcomeChannelId = "Channel ID Here"

client.on ("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome To The Server`)
})


client.login(process.env.TOKEN)

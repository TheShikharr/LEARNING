import { Client, Events, GatewayIntentBits } from 'discord.js';
import URL from "./models/url.js"
import { nanoid } from "nanoid";


import connectMongoDB from './connection.js'


connectMongoDB('mongodb://localhost:27017/Discordshort-url')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB not Connected: ', err))



const client = new Client({ 
    intents: 
    [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

client.on("messageCreate", async (message) => {
    // console.log(message.content);
    if(message.author.bot) return

    if(message.content.startsWith('create')) {
    const url = message.content.replace("create ", "").trim();

        if(!url) {
            return message.reply('please enter a url')
        }

        const shortID = nanoid(6)

        await URL.create({
            shortID: shortID,
            redirectURL: url
        })


        return message.reply({
            content:`shortid: ${shortID}`
        })
    }

    message.reply({
        content: 'Hii, From BOT'
    })
})

// client.on('interactionCreate', interaction => {
//     interaction.reply("pong!!")
// })

client.login("MTQ3ODMwMTIzNzI1MzM3Mzk5Mg.G-RcGP.wFyWw-ZzjErbsA_pC_TEW0BPlKQ9nHHL_sxoZY")
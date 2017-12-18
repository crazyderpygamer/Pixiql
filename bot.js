

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('Systems ready, ready to launch!' + '\n' + 'Please report any bugs to xOrlxndo#9153');
});

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'with memes', type: 1 } });
});

client.on("message", (message) => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let args = message.content.split(' ').slice(1);

 if (message.content.toLowerCase().startsWith('-ping')) {
  message.channel.send("Pong! I'm alive");
}
      
      var random = [ 
        "Username:
        Email/Username:
        rocpagames@gmail.com
        Password:
        rocpb2468",
    ]
    if (message.content.toLowerCase().startsWith('-random')) { 
       message.author.send(random[Math.floor(Math.random() * random.length).toString(16)]);
       message.channel.send(":incoming_envelope: **" + message.author.username + "**" + " a random meme has been sent!") 
  }
});

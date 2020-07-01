const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '%';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('GalaxyBot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'an'){
        client.commands.get('an').execute(message, args);
    }else if(command === 'lat'){
        client.commands.get('lat').execute(message, args);
    }else if(command === 'lay'){
        client.commands.get('lay').execute(message, args);
    }else if(command === 'lad'){
        client.commands.get('lad').execute(message, args);
    }else if(command === 'nw'){
        client.commands.get('nw').execute(message, args);
    }else if(command === 'cf'){
        client.commands.get('cf').execute(message, args);
    }else if(command === 'laye'){
        client.commands.get('laye').execute(message, args);
    }else if(command === 'late'){
        client.commands.get('late').execute(message, args);
    }else if(command === 'lade'){
        client.commands.get('lade').execute(message, args);
    }else if(command === 'dsum'){
        client.commands.get('dsum').execute(message, args);
    }else if(command === 'dsume'){
        client.commands.get('dsume').execute(message, args);
    }
});
 
client.login('NzI3NTg0MDQwNzg1NTQzMTk4.Xvt9pQ.zJnxz9lBfQjZiXUdurcTCdGuyG8');
 
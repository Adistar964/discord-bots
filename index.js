require('dotenv').config();

const client_id = process.env.DISCORD_API_KEY;

const { Client } = require('discord.js');

const client = new Client();

client.on('ready', function(){
    console.log(`Hey I am ${client.user.tag}!`)
});

client.on('message', function(message){
    if(message.author.bot){return}
    if (message.content.startsWith('!')){
       const [cmnd, ...args] = message.content
       .trim()
       .substring(1)
       .split(/\s+/)
       console.log(args, cmnd)
      if(cmnd === 'kick'){ if (args.length === 0){message.reply('Give an ID After the command!')}
       else{
           member = message.guild.members.cache.get(args[0])
            if (member){
                member
                .kick()
                .then( function(member) {
                    message.channel.send(`${member} was successfully kicked! :)`)
                } )
                .catch( function(err) {
                    message
                    .channel
                    .send(
                        `I do not have the permission to kick the member you mentioned!`
                    );
                }
                );
                    // console.log(err)
                }else {
                message.channel.send('The member You mentioned Does not exist!')
            }} }
    }
});

client.login(client_id);

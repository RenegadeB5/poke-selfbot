//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const prefix = "!";
var client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: process.env.playing, type: 0 } });
    console.log('successfully Logged In As spam bot!');
});
client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
  if (command === "role") {
      if (message.author.id === process.env.ownerID) {
         let [task,member] = args; 
         let role = args.slice(2).join(" ");  
         
     else {
         message.channel.send('Only Rene can use this command. ');
       }
     }
  }});    

client.on ('message', message => {
  if (message.content === "Crackhead") {
    message.channel.send('white');
  }
});    

client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "spam") {
        if (message.author.id === process.env.ownerID) {
          let [ammount] = args;
          let text = args.slice(1).join(" "); 
          message.delete();  
           
                     function repeat(func, times) {
                    func();
                    --times && repeat(func, times);
                }
          
        repeat(function () { message.channel.send(text); }, ammount);
            }     
      
       else { 
                message.channel.send('Only Rene can use this command. ');
  }
  }});   
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);

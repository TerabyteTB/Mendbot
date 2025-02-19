//import jquery and utils
//TODO
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
import { fullEmbed, smallEmbed } from './utils.js';

//import discord
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({
	allowedMentions: {
		parse: ['users'],
		repliedUser: true,
	},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS"
	],
});
//import config
const config = require("./config.js");
console.log(config.token)

//client setup
client.login(config.token);

//vars
let sayCMD = ""
let suggestCount = 0

//main client
client.on("ready", () =>{
	console.log("Bot started up.")
})

//process commands
client.on("messageCreate", async messageCreate => {
	if (messageCreate.author.bot) return;

	//!say command
	if (messageCreate.content.startsWith('!say')){
		sayCMD = messageCreate.content.slice(4)
		messageCreate.channel.send(sayCMD)
	}
  //rr rat
	if (messageCreate.author.id === "314197872209821699"){
		var randomNum = Math.floor(Math.random() * (10));
		if (randomNum === 4){
			messageCreate.channel.send("rat")
		}
		if (randomNum === 5){
			messageCreate.channel.send("rat")
		}
	}

	//jokes
	if (messageCreate.content === "!joke"){
		var rngJoke = Math.floor(Math.random() * (30)) + 1;
		if (rngJoke === 1){
		messageCreate.channel.send("Why can't a bicycle stand on its own? It's two-tired.")
		}
		if (rngJoke === 2){
		messageCreate.channel.send("Found out I was color blind the other day. That one came right out of the orange.")
		}
		if (rngJoke === 3){
		messageCreate.channel.send("What did the grape say when it was stepped on? Nothing, it just let out a little wine.")
		}
		if (rngJoke === 4){
		messageCreate.channel.send("Why can't you play poker on the African Savanna? There's too many cheetahs.")
		}
		if (rngJoke === 5){
		messageCreate.channel.send("To the guy who invented zero: Thanks for nothing!")
		}
		if (rngJoke === 6){
		messageCreate.channel.send("What do a tick and the Eiffel Tower have in common? They're both Paris sites.")
		}
		if (rngJoke === 7){
		messageCreate.channel.send("What's more amazing than a talking dog? A spelling bee.")
		}
		if (rngJoke === 8){
		messageCreate.channel.send("Once you've seen one shopping center, you've seen the mall.")
		}
		if (rngJoke === 9){
		messageCreate.channel.send("I'm reading a book about anti-gravity. I can't put it down.")
		}
		if (rngJoke === 10){
		messageCreate.channel.send("I'm thinking of reasons to go to Switzerland. The flag is a big plus.")
		}
		if (rngJoke === 11){
		messageCreate.channel.send("Why do seagulls live by the sea? ||Cause if they lived by the bay, they'd be bagels.||")
		}
		if (rngJoke === 12){
		messageCreate.channel.send("How did Darth Vader know what Luke Skywalker was getting for Christmas? ||He felt his presence.||")
		}
		if (rngJoke === 13){
		messageCreate.channel.send("If the mushroom was such a fun-guy why didn't they have the party at his house? ||There wasn't much-room.||")
		}
		if (rngJoke === 14){
		messageCreate.channel.send("What do you get if you drop a piano down a mineshaft? ||A flat miner.||")
		}
		if (rngJoke === 15){
		messageCreate.channel.send("A horse walks into a bar. Hey, says the barman. Yes please, says the horse.")
		}
		if (rngJoke === 16){
		messageCreate.channel.send("A horse walks into a bar. The bartender asked him, Why the long face?")
		}
		if (rngJoke === 17){
		messageCreate.channel.send("A horse walks into a bar and the bartender says, Why the long face? ||And the horse says, I'm finally realizing that my alcoholism is driving my family apart.||")
		}
		if (rngJoke === 18){
		messageCreate.channel.send("Why was the broom late for work? ||It overswept||")
		}
		if (rngJoke === 19){
		messageCreate.channel.send("Which side of the chicken has more feathers? ||The outside||")
		}
		if (rngJoke === 20){
		messageCreate.channel.send("What are the strongest days of the week? ||Saturday and Sunday. All the rest are weak-days.||")
		}
		if (rngJoke === 21){
		messageCreate.channel.send("The past, present, and future walk into a bar. It was tense.")
		}
		if (rngJoke === 22){
		messageCreate.channel.send("People make such a big deal with vegans, but I don't get it. ||I've never had beef with one||\n*made by Larimar bot*")
		}
		if (rngJoke === 23){
		messageCreate.channel.send("I've been working for 24 hours straight... ||So I called it a day||\n*made by Larimar bot*")
		}
		if (rngJoke === 24){
		messageCreate.channel.send("Tetris is a very good game, some might even call it a blockbuster!\n*made by Larimar bot*")
		}
		if (rngJoke === 25){
		messageCreate.channel.send("How about adding a farmer NPC to the game? ||I can't imagine all the CORNY jokes it'll add!||")
		}
		if (rngJoke === 26){
		messageCreate.channel.send("Little Timmy stepped on a landmine. Where did he go next? ||Everywhere.||")
		setTimeout(() => {messageCreate.channel.send("What did it say on his gravestone? ||Rest in pieces.||");}, 3000)
		}
		if (rngJoke === 27){
		messageCreate.channel.send("6:30 is the best time on a clock, hands down.\n*made by Larimar bot*")
		}
		if (rngJoke === 28){
		messageCreate.channel.send("You know what they say about cliffhangers... ||_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _||\n*made by Larimar bot*")
		}
		if (rngJoke === 29){
		messageCreate.channel.send("A preposition is not a good word to end a sentence with. ||And don't start a sentence with a conjunction.||")
		}
		if (rngJoke === 30){
		messageCreate.channel.send("Do you know a hospital where invisible men can't hide? ||The I.C.U||\n*made by Larimar bot*")
		}
	}

	//skycrypt viewer
	if (messageCreate.content.startsWith("!skycrypt")){
		skycryptMsg1 = messageCreate.content.slice(10)
		messageCreate.reply("https://sky.shiiyu.moe/stats/" + skycryptMsg1)
	}
	//short version of !skycrypt
	if (messageCreate.content.startsWith("!sc")){
		skycryptMsg2 = messageCreate.content.slice(4)
		messageCreate.reply("https://sky.shiiyu.moe/stats/" + skycryptMsg2)
	}

	//lesser orb of healing checker
	if (messageCreate.content === ("!looh")){
		const loohEmbed = fullEmbed('#80aaff', '**Lesser Orb of Healing`s Status**', { name: 'Made by Sadan', iconURL: 'https://media.discordapp.net/attachments/906597529842507856/936020635702919188/prr1ahlv11g41.jpg'}
		  'Current Status', 'https://media.discordapp.net/attachments/906597529842507856/935342047576072192/Lesser_Orb_of_Healing.png'
	    { name: ':exclamation:Currently: Disabled :warning: :cry:', value: 'Im malding. Disabled since <t:1601524800:R>, or <t:1601524800>' }
		  { text: 'Is it fixed yet? DM KevinPlayz#0001 to report changes.', iconURL: 'https://media.discordapp.net/attachments/906597529842507856/936020091261308999/Mender_Crown.png' });
		messageCreate.channel.send({ embeds: [loohEmbed] });
	}
  //suggest command
	if (messageCreate.content.startsWith("!suggest")){
		suggestMsg = messageCreate.content.slice(8)
		suggestCount = suggestCount + 1
		const channel = client.channels.cache.find(channel => channel.name === "suggestions")

		const suggestEmbed = smallEmbed('#80aaff', '**Suggestion #' + suggestCount + "**",
		suggestMsg, {text: 'Created by ' + messageCreate.author.username})
		channel.send({ embeds: [suggestEmbed] });
	}

  //help command
	if (messageCreate.content === "!help"){
		messageCreate.reply("**Current Commands + Planned Features**\n!help - display this list\n!say - repeat any message after the !say command\n!joke - send a joke from a list\n!skycrypt [ign] - Send a users skycrypt, in case you're lazy for some reason. {!sc}\n!looh - Current status on the lesser orb of healing, and whether its fixed\n\nPlanned Features:\n!healer-stats - Displays a user's stats which are relevant to the healer class (armor, weapon, pet, healer level, cata level, etc) once I learn how to access the api\nprobably more, although make a ticket if you have any suggestions, ty")
	}

	// admin only commands below

	//shutdown
	if (messageCreate.content === "!shutdown"){
		if (messageCreate.author.id === "626401322542956546"){
			messageCreate.channel.send(":warning: Shutting Down...")
			setTimeout(() => {client.destroy();}, 2000)
		}
	}
	//kick
	if (messageCreate.content.startsWith("!kick")){
		if (messageCreate.author.id === "626401322542956546"){
			var member = messageCreate.mentions.members.first();

			member.kick()
			messageCreate.channel.send(":wave: " + member.displayName + "has been kicked")
		}
	}
	//ban
	if (messageCreate.content.startsWith("!ban")){
		if (messageCreate.author.id === "626401322542956546"){
			var member = messageCreate.mentions.members.first();

			member.ban()
			messageCreate.channel.send(":wave: " + member.displayName + "has been banned")
		}
	}
	//clear messages
	if (messageCreate.content.startsWith("!clear")){
		if (messageCreate.member.roles.cache.has("906312693466685450")) {
			num = messageCreate.content.slice(6)

			messageCreate.channel.bulkDelete(num)
			.then(messages => {messageCreate.channel.send(`** \`${messages.size}/${num}\` messages deleted successfully** `)})
		} else {
			messageCreate.reply("You are not a staff member!")
		}
	}
	//assign role thingy
	if (messageCreate.content.startsWith("!role-add-config")){
		if (messageCreate.member.roles.cache.has("906312693466685450")) {
			// below is code for when I work on a role add all command that accepts any role from the message
			// let role = messageCreate.content.slice(13)
			// messageCreate.reply(role)

			// find the role with the name provided
			let roleName = messageCreate.guild.roles.cache.find(role => role.name === "Member - Default");

			// find all guild members that aren't bots, and add the role to each
			messageCreate.guild.members.cache.forEach(member => member.roles.add(roleName))

			// notify the author of the command that the role was successfully added to all members
			messageCreate.channel.send(`**${messageCreate.author.username}**, role **${roleName}** was added to all members`)
		} else {
			messageCreate.reply("You are not a staff member!")
		}
	}
})

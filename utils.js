// at the top of your file
const { EmbedBuilder } = require('discord.js');


const buildEmbedLink = (checkId, url) => {
// inside a command, event listener, etc.
	const exampleEmbed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Verify mail')
		.setURL(url)
		.setDescription('Verify your email address to gain access')
		.setThumbnail('https://i.imgur.com/AfFp7pu.png')
		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
		.setImage('https://i.imgur.com/AfFp7pu.png')
		.setTimestamp()
		.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

	return exampleEmbed;
}

module.exports = {
	buildEmbedLink,
}
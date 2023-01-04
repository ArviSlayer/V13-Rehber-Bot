const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "buton",
async execute(client, message, args) {

    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: 'Bu Komutu Kullanabilmek İçin Gerekli Yetkilere Sahip Değilsin', ephemeral: true});

    const arvsbed = new MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`**${message.guild.name}** Sunucusuna Hoş Geldin`)
   .setDescription(`<a:mutlupanda_arvis0011:997610164544868454> Eğlencenin Dibine Vurmak İçin Aramıza Katıl!`);

    let arvs = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Kuralları Oku")
    .setCustomId("kurallar")
    .setEmoji('1058005321504804934');

    let arbed1 = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Başlangıç Turu")
    .setCustomId("baslangicturu")
    .setEmoji('997610195997966507');

    let arbed2 = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("İstek/Öneri")
    .setCustomId("istekoneri")
    .setEmoji('1052278328280764536');

    let arbed3 = new MessageButton()
    .setStyle("DANGER")
    .setLabel("Destek Talebi")
    .setCustomId("destek")
    .setEmoji('1051894482381062164');

    message.channel.send({components: [arvsrow], embeds: [arvsbed] });
  }
}
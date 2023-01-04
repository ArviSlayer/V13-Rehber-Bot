const { Client, Collection, MessageEmbed } = require('discord.js');
const axios = require('axios');

const { Modal, TextInputComponent, showModal } = require('discord-modals');
const fs = require('fs');

const client = new Client({ 
    intents: [
      'GUILDS',
      'GUILD_MESSAGES',
      'GUILD_MEMBERS'
    ] 
});


const discordModals = require('discord-modals');

fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var cmd = require(`./commands/${file}`);
        client.commands.set(cmd.name, cmd);
    });
});


const prefix = client.config.prefix;
client.on('messageCreate', async (message) => {
    client.events.get('messageCreate').execute(client, message, prefix)
});

client.on('ready', async () => 
  console.log(`[AKTİF] ${client.user.tag}`));


client.on('interactionCreate', async (i) => {
  
  if (!i.isButton()) return;

  if (i.customId == "kurallar") {

    var arbed = new MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`
    <a:yesilsagok_arvis0011:1057990123251302410> Burayı İstediğiniz Gibi Çoğaltabilirsiniz

    <a:yesilsagok_arvis0011:1057990123251302410> ArviS#0011`)  
    .setImage("https://media.discordapp.net/attachments/997105193256747028/1060152747036520468/ArviS.jpg?width=585&height=585")
    
    i.reply({ephemeral: true, embeds: [arbed] });
  

  } else if (i.customId == "destek") {

    i.message.guild.channels.create(i.user.username, {
      type: "GUILD_TEXT",
      parent: "990362728734556211",
      reason: "Talep Of Destek",
      permissionOverwrites: [
        {
          id: i.message.guild.id,
          deny: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "SEND_MESSAGES"]
        },
        {
          id: i.user.id,
          allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "SEND_MESSAGES"]
        }
      ]
    }).then(async (chan) => {
      chan.send(`Destek Talebini Oluşturan \n> (**${i.user.tag}**)`);
    });


}  else if (i.customId == "baslangicturu") {

    var kanal1 = "997105193256747028"
    var kanal2 = "1056154742306394162"
    var kanal3 = "1051192355446853662"
    var kanal4 = "1051565581469499473" 
   i.reply({ephemeral: true, content: `<a:yukleniyor_arvis0011:1058007845364322354> Tur Başlıyor, 20 Saniyen Var` })
    i.guild.channels.cache.get(kanal1).send({ content: `**[ArviS#0011]** <@${i.user.id}> Bu Kanal BlaBlaBla Kanalıdır, Burada BlaBlaBla Yapabilirsiniz`, ephemeral: true }).then((ozel)=> {
  setTimeout(function(){
    ozel.delete()
  }, 20000) // 2000 Milisaniye = 20 Saniye
}); 

 i.guild.channels.cache.get(kanal2).send({ content: `**[ArviS#0011]** <@${i.user.id}> Bu Kanal BlaBlaBla Kanalıdır, Burada BlaBlaBla Yapabilirsiniz`, ephemeral: true }).then((ozel1)=> {
  setTimeout(function(){
    ozel1.delete()
  }, 20000) // 2000 Milisaniye = 20 Saniye
}); 

 i.guild.channels.cache.get(kanal3).send({ content: `**[ArviS#0011]** <@${i.user.id}> Bu Kanal BlaBlaBla Kanalıdır, Burada BlaBlaBla Yapabilirsiniz`, ephemeral: true }).then((ozel2)=> {
  setTimeout(function(){
    ozel2.delete()
  }, 20000) // 2000 Milisaniye = 20 Saniye
}); 

i.guild.channels.cache.get(kanal4).send({ content: `**[ArviS#0011]** <@${i.user.id}> Bu Kanal BlaBlaBla Kanalıdır, Burada BlaBlaBla Yapabilirsiniz`, ephemeral: true }).then((ozel2)=> {
  setTimeout(function(){
    ozel2.delete()
  }, 20000) // 2000 Milisaniye = 20 Saniye
}); 
  }
});


client.on('interactionCreate', async (interaction) => {

  if (interaction.customId == "istekoneri") {
    const modal = new Modal()
      .setCustomId('istekoneri-menü')
      .setTitle('İstek/Öneri Menüsü')
      .addComponents(
        new TextInputComponent()
        .setCustomId('istekonerike')
        .setLabel('Lütfen İsteğini Belirt')
        .setStyle('SHORT')
        .setMinLength(5)
        .setMaxLength(100)
        .setPlaceholder('Örnk: ArviS#0011 Banlansın')
        .setRequired(true),
      );
      showModal(modal, { client, interaction });
    }
  })
      

client.on('modalSubmit', async (modal) => {
  if(modal.customId === 'istekoneri-menü') {
    const firstResponse = modal.getTextInputValue('istekonerike'); 
    modal.reply({
      content: `İsteğin/Önerin Yetkililere İletildi`,
      ephemeral: true
    });

    const channel = modal.guild.channels.cache.get('1056154742306394162');

    const arvs = await channel.send({
      content: `Yeni Bir İstek/Öneri Var \n> (**${firstResponse}**) \n\n İstek/Öneri Sunan \n> (**${modal.user.tag}**)`
    });
    
    client.on('interactionCreate', async (akla) => client.use(modal, akla, channel.id, arvs.id));
  }  
});


client.login(client.config.token);

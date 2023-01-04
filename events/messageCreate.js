module.exports = {
    name: "messageCreate",
    async execute(client, message, prefix) {
        
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        var cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.execute(client, message, args);
    }
}
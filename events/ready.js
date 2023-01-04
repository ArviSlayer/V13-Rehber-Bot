module.exports = {
    name: "ready",
    async execute(client) {

        client.user.setPresence({ activities: [{
                    name: `Made by ❤️ ArviS#0011`,
                    type: "PLAYING"}],
            status: "online"
            
        });
    }
}
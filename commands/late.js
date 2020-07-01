module.exports = {
    name: 'late',
    description: "this is a livestream announcement!",
    execute(message, args){
        message.channel.send('@everyone a livestream ended on twich');
        message.channel.send('@everyone The link for the replay is on  https://www.twitch.tv/galaxygamingboytwich');
    }
}
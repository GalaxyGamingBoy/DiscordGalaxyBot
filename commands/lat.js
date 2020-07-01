module.exports = {
    name: 'lat',
    description: "this is a livestream announcement!",
    execute(message, args){
        message.channel.send('@everyone a livestream is happening on twich');
        message.channel.send('@everyone The link is https://www.twitch.tv/galaxygamingboytwich');
    }
}
module.exports = {
    name: 'lad',
    description: "this is a livestream announcement!",
    execute(message, args){
        message.channel.send('@everyone a livestream is happening on discord');
        message.channel.send('@everyone On the livestream voice channel!');
    }
}
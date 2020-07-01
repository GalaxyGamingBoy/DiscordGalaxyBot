module.exports = {
    name: 'lade',
    description: "this is a livestream announcement!",
    execute(message, args){
        message.channel.send('@everyone a livestream ended on discord');
    }
}
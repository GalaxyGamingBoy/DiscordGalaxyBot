module.exports = {
    name: 'nv',
    description: "this is a new video announcement!",
    execute(message, args){
        message.channel.send('@everyone a new video is uploded on youtube check it out!');
    }
}
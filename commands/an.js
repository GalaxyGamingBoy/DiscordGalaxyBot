module.exports = {
    name: 'an',
    description: "this is an announcement command!",
    execute(message, args){
        message.channel.send('@everyone !!ANNOUNCEMENT READ BELOW!!');
    }
}
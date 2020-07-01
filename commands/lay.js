module.exports = {
    name: 'lay',
    description: "this is a livestream announcement!",
    execute(message, args){
        message.channel.send('@everyone a livestream is happening on youtube');
        message.channel.send('@everyone The link is https://www.youtube.com/channel/UCkBZFi_acIdsJZpmOvdzVvg?view_as=subscriber');
    }
}
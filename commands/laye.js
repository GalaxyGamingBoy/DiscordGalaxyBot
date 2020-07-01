module.exports = {
    name: 'laye',
    description: "this is a livestream announcement!",
    execute(message, args){
        message.channel.send('@everyone a livestream is ended on youtube');
        message.channel.send('@everyone The link for the replay is https://www.youtube.com/playlist?list=PLu9Uof0MsGOuRHZOWbViJoCNgbInvU2GI');
    }
}
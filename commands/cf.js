
module.exports = {
    name: 'cf',
    description: "this is a coinflip command!",
    execute(message, args){
        var random = Math.random();
        var conc;
        if (random < 0.5){
            conc = 'Heads';
        }else{
            conc = 'Tails';
        }
    message.channel.send(conc);
    }
}
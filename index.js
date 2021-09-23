const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const opus = require("opusscript");
const ffmpeg = require("ffmpeg-static");

const Client = new Discord.Client;

const prefix = "!so play";
const prefix2 = "!so disco";


Client.on("ready", () => {
  console.log("bot ok");
});

Client.on("message", message => {
  if(message.author.bot) return;
  
  if(message.content == "!so"){
    message.reply("ouaip ?");
  }
  if(message.content == "!so help"){
    message.reply("voici la liste des commandes possibles (attention ils existent d'autres commandes qui ne sont pas référencer car se sont des easter-eggs a vous de trouver !) : !so , !so info , !so je t'aime , !so youtube , !so tik tok , !so discord , !so help");
  }
  if(message.content == "!so non rien"){
    message.reply("mais euuuh");
  }
  if(message.content == "!so info"){
    message.reply("HEY YO, moi c'est soraï, je suis un bot crée par @qoyri kun#7748, pour tout problème n'hésitez pas à contacter mon maître 😁");
  }
  if(message.content == "!so je t'aime"){
    message.reply("mwa auchi 😍")
  }
  if(message.content == "c'est pas gentil d'être méchant"){
      message.reply("mais tu oublis que ce n'est pas méchant d'être gentil !");
  }
  if(message.content == "?"){
    message.reply("non rien");
  }
  if(message.content == "rocket league c'est de la merde"){
    message.reply("tg tou wé moche !!");
  }
  if(message.content == "rocket league c de la merde"){
    message.reply("tg tou wé moche !!");
  }
  if(message.content == "rl c'est de la merde"){
    message.reply("tg tou wé moche !!");
  }
  if(message.content == "rl c de la merde"){
    message.reply("tg tou wé moche !!");
  }
  if(message.content == "tg le bot"){
    message.reply("moi au moins j'ai été crée pour servir a quelque chose au moins")
  }
  if(message.content == "ta gueule le bot"){
    message.reply("moi au moins j'ai été crée pour servir a quelque chose au moins")
  }
  if(message.content == "ferme ta gueule le bot"){
    message.reply("moi au moins j'ai été crée pour servir a quelque chose au moins")
  }
  if(message.content == "bot ta mère"){
    message.reply("moi au moins j'ai été crée pour servir a quelque chose au moins")
  }
  if(message.content == "c pas gentil d'être méchant"){
    message.reply("mais tu oublis que ce n'est pas méchant d'être gentil !");
}
if(message.content == "c pas gentil detre mechant"){
  message.reply("mais tu oublis que ce n'est pas méchant d'être gentil !");
}
if(message.content == "c pas gentil d etre mechant"){
  message.reply("mais tu oublis que ce n'est pas méchant d'être gentil !");
}
if(message.content == "prout"){
  message.reply("a se pépite de chocolat");
}
if(message.content == "envoie fesse"){
  message.reply("moi je dit grosse fesse");
}
if(message.content == "burger"){
  message.reply("pas maintenant Armin");
}
if(message.content == "Burger"){
  message.reply("pas maintenant Armin");
}
if(message.content == "!so tik tok"){
  message.reply("tik tok de qoyri : @qoyri kun (vidéo sur beat saber).");
}
if(message.content == "!so youtube"){
  message.reply("youtube de qoyri : qoyri Kun.");
}
if(message.content == "!so ytb"){
  message.reply("youtube de qoyri : qoyri Kun.");
}
if(message.content == "!so discord"){
  message.reply("voici le pseudo de mon créateur si vous voulez le contacter : qoyri kun#7748");
}
if(message.content == "ara ara"){
  message.reply("ara ara");
}
if(message.content == "Ara ara"){
  message.reply("ara ara");
}
if(message.content == "y a quoi comme devoirs a faire"){
  message.reply("alors d'après se que j'ai dans mon planning je dois, venir chez toi manger ton pot de nutella et violer ta mère");
}
if(message.content == "@everyone y a quoi comme devoirs a faire"){
  message.reply("alors d'après se que j'ai dans mon planning je dois, venir chez toi manger ton pot de nutella et violer ta mère");
}
if(message.content == "se manque de respect"){
  message.reply("tg on ta rien demandé");
}
if(message.content == "carre"){
  message.reply("c'est carré dans l'axe");
}
if(message.content == "c carre"){
  message.reply("c'est carré dans l'axe");
}
if(message.content == "c'est carre"){
  message.reply("c'est carré dans l'axe");
}
if(message.content == "carré"){
  message.reply("c'est carré dans l'axe");
}
if(message.content == "c carré"){
  message.reply("c'est carré dans l'axe");
}
if(message.content == "c'est carré"){
  message.reply("c'est carré dans l'axe");
}
if(message.content == "cheh"){
  message.reply("double cheh");
}
if(message.content == "Cheh"){
  message.reply("double cheh");
}
if(message.content == "che"){
  message.reply("double cheh");
}
if(message.content == "Che"){
  message.reply("double cheh");
}
if(message.content == "c mon bot"){
  message.reply("qoyri je t'adore tu es mon waifu le premier qui le touche je le ban :eyes: ");
}
if(message.content == "^^lc qoyri sorai"){
  message.reply("c FÔÔÔ, qoyri et mwa c 100% de love pour la vie !! okéé ?! :rage: ");
}
if(message.content == "XDDD"){
  message.reply("XDPTDR");
}
if(message.content == "enculé"){
  message.reply("de tes morts");
}
if(message.content == "connard"){
  message.reply("sale fils de kangourou albinos");
}
if(message.content == "CONNARD"){
  message.reply("sale fils de kangourou albinos");
}
if(message.content == "https://media.discordapp.net/attachments/637994255410921473/852710893905379368/speed-1.gif"){
  message.reply("AMOGUS");
}
});

Client.on("message", message => {
  if(message.member.permissions.has("MANAGE_MESSAGES")){
    if(message.content.startsWith("!so clear")){
      let args = message.content.split(" : ");
      
      if(args[1] == undefined){
        message.reply("nombre ou commande invalid sergent !");
      }
      else {
        let number = parseInt(args[1]);
        
        if(isNaN(number)){
          message.reply("nombre ou commande invalid sergent !");
        }
        else {
          message.channel.bulkDelete(number).then(message => {
            console.log("suppression de " + message.size + "reussi");
          }).catch(err => {
            console.log("erreur lors de la suppresion");
          });
        }
      }
    }
  }
});

Client.on("message", message => {
    if(message.content.startsWith(prefix)){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");

                if(!args[1]){
                  message.reply("lien invalid ou mal copié le boss");
                  connection.disconnect();
                }
                else {
                let dispatcher = connection.play(ytdl(args[2], { quality: "highestaudio"}));
                
                dispatcher.on("finish", () => {
                  dispatcher.destroy();
                  connection.disconnect();
                });

                dispatcher.on("error", err => {
                  console.log("err$ur lors de la connection : " + err);
                });

              }
            }).catch(err => {
              message.reply("err$ur lors de la connection" + err);
            });
        }
        else {
            message.reply("comment voulez-vous écouter votre music si vous n'êtes pas dans un salon vocal ? c'est embêtant sa dit donc");
        }
    }
    if(message.content == "!so disconnect"){
      message.member.voice.channel.leave()
      }
});

Client.login(process.env.TOKEN);

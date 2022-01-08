const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const opus = require("opusscript");
const ffmpeg = require("ffmpeg-static");

const Client = new Discord.Client;

const prefix = "!so play";
const prefix2 = "!so disco";


Client.on("ready", () => {
  console.log("bot ok");
  Client.user.setActivity(`Hang out with qoyri`, { type: "PLAYING" });
});

Client.on("message", message => {
  if(message.author.bot) return;
  
  if(message.content == "!so"){
    message.reply("ouaip ?");
  }
  if(message.content == "j'suis où...j'suis qui ?"){
   message.reply("enchanté où j'suis qui");
  } 
  if(message.content == "annonce moi une bonne nouvelle"){
   message.reply("Tu es condamné à mort !!");
  } 
  if(message.content == "sorai il ne faut jamais..."){
   message.reply("Mettre sa tête dans une friteuse");
  } 
  if(message.content == "espece de face de cernes"){
   message.reply("Nan ça c'était à chier");
  } 
  if(message.content == "on fait quoi aujourd'hui ?"){
   message.reply("je sais pas mais t'as 30 ans et j'suis mineur");
  } 
  if(message.content == "je suis Français"){
   message.reply("BAGUETTE");
  } 
  if(message.content == "dit quelque chose d'intelligent"){
   message.reply("Les coccinelle sont des coléoptère");
  } 
  if(message.content == "saloperie de titan !"){
   message.reply("Alors on dit pas Titans c'est super péjoratif !");
  } 
  if(message.content == "j'aime le viol"){
   message.reply("le violet enfin... le violet");
  } 
  if(message.content == "SUKUNA ça sonne Italien"){
   message.reply("j'suis un démon japonais connard");
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
if(message.content == "OU EST-CE QUE T'A PLANQUE LE SEL ENFOIRE"){
 message.reply("VU TA GRANDE GUEULE T'ES UNE RESERVE DE SEL A TOI TOUT SEUL");
} 
if(message.content == "c'est quoi les 3 factions ?"){
 message.reply("La Garnison qui s'occupe de l'entretien des murs et qui sert surtout d'appât pour se faire bouffer, Le Bataillon d'Exploration qui eux se font bouffer à l'extérieur des murs et les Brigades Spéciales qui vivent OKLM comme des bourges bien en sécurité et probablement ceux qui vivront le plus longtemps");
} 
if(message.content == "tu viens de rater une cible de plus de 50 metre de haut"){
 message.reply("C'EST LE CUL D'TA MERE QUI FAIT 50 METRE DE HAUT")
} 
if(message.content == "battez vous pour la survie de l'humanité"){
 message.reply("FUYEZ POUR VOS VIES. LES FEMMES ET LES ALLEMANDS D'ABORD");
} 
if(message.content == "joyeux noel Sorai"){
 message.reply("Santa Claus ?");
} 
if(message.content == "j'ai un cadeau très spécial pour toi au fond de mon gros bidon"){
 message.reply("Ah ah j'espère que c'est une trottinette !");
} 
if(message.content == "mon père est mort"){
 message.reply("Où est ma chambre bande d'enculé ?");
} 
if(message.content == "qui c'est qui est un gros enculé ?!"){
 message.reply("C'est moi, SORAI");
} 
if(message.content == "mettez c'masque !"){
 message.reply("Wouaw c'est fantastique ! Ma peau retrouve l'éclat de ses 20 ans *");
} 
if(message.content == "OH NON JE BRULE"){
 message.reply("C'est l'principe du feu connard");
} 
if(message.content == "Maman ! y'a encore un drogué dans le jardin"){
 message.reply("Ca c'est se que je dirais si maman étais pas morte");
} 
if(message.content == "j'te jure que le prochain mec qui m'aborde j'le castre avec les dents"){
 message.reply("Ok j'suis une fille pour les 48 prochaines heures");
} 
if(message.content == "Ces créatures sont réputés pour leur grande capacité à sucer"){
 message.reply("Du sang voyons !");
} 
if(message.content == "si je prends Kirito comme temoin à mon mariage est-ce qu'il portera un Kiritoast ?!"){
 message.reply("Elles sont de plus en plus connes vos questions !");
} 
if(message.content == "je dois l'arreter avant qu'il fasse une bétise"){
 message.reply("t'façon t'es pas ma mère !");
} 
if(message.content == "wow t'es toujours en vie "){
 message.reply("envie... de te bouffer !!");
} 
if(message.content == "tu m'as coupé"){
 message.reply("Le prochain qui me l'à coupe c'est moi que je le coupe");
} 
if(message.content == "fait moi le coup de la fleufleur"){
 message.reply("Demande moi ça encore une fois et tu vas voir où j'vais la mettre ta fleufleur !");
} 
if(message.content == "la pluit commence à tomber"){
 message.reply("Bah non il pleut pas là");
} 
if(message.content == "si il pleut..."){
 message.reply("Bah non il pleut pas non.. parce que j'suis une femme je peux pas savoir si il pleut ou non ?! ");
} 
if(message.content == "tu n'as aucun sens de la poésie"){
 message.reply("En plus ! AH BAH C'EST LE PONPON");
} 
if(message.content == "si je te fais un gros calinou tu me pardonne ?"){
 message.reply("wouaw plus tu parles plus tu fais pitié");
} 
if(message.content == "JE SUIS UN SANGLIER"){
 message.reply("Eh bah on a encore une belle brochette de vainqueurs");
} 
if(message.content == "d'où viennent les titans ?"){
 message.reply("Bonne question mais comment le Caporal Livaï fait pour avoir le cheveu aussi fin");
} 
if(message.content == "rien de plus normal"){
 message.reply("non");
} 
if(message.content == "pour le bataillon"){
 message.reply("nooooon");
} 
if(message.content == "....."){
 message.reply("'-'");
} 
if(message.content == "D'EXPLORATIOOOOON"){
 message.reply("NAAAAAN");
} 
if(message.content == "mange mon pain eren"){
 message.reply("mange mon pain");
} 
if(message.content == "tu te chute"){
 message.reply("mais laisse moi être dark ;-;");
} 
if(message.content == "je vais manger"){
 message.reply("UNE CHIPS");
} 
if(message.content == "je t'attendais.."){
 message.reply("Nan c'est faux");
} 
if(message.content == "qu'est ce qui est petit et marron ?"){
 message.reply("un marron ?");
} 
if(message.content == "sorai.. on ne séquestre pas les gens !"){
 message.reply("oui mais elle est bonne");
} 
if(message.content == "ça se prononce Payne"){
 message.reply("c'est pas la Pain de le prendre mal");
} 
if(message.content == "c'est la faute à pas de chance"){
 message.reply("C'est qui ce pas de chance?! que je le trouve et que je lui pète les genoux !");
} 
if(message.content == "je te présente Megumi et Nobara"){
 message.reply("Mais bien sûr que si c'est Sasuke et Sakura !");
} 
if(message.content == "c'est moi ou c'est con ?"){
 message.reply("Ne m'étais mon autorité en question les bleus bite");
} 
if(message.content == "ah ouais t'es vraiment le perso le plus perspicace"){
 message.reply("Bah non t'es con");
} 
if(message.content == "Kayo Hinazuki c'est ton dernier jour sur terre^^"){
 message.reply("Eh oui ! on a organisé un pot de départ pour la mort de ton amie^^ ");
} 
if(message.content == "nous sommes demain Kayo est morte et je suis le tueur"){
 message.reply("trop d'info monsieur");
} 
if(message.content == "quel petit ange"){
 message.reply("ta gueule grosse truie!");
} 
if(message.content == "Quelqu'un peut m'expliquer ce qu'il se passe ?"){
 message.reply("On est attaqué et le mur est truffé d'tétons qui durcissent");
} 
if(message.content == "ah-ta-ta de Titans qui SE durcissent"){
 message.reply("Tout le monde a ses petits fantasmes !");
} 
if(message.content == "mon véritable nom c'est Historia"){
 message.reply("Putain c'est moche, sympa les parents");
} 
if(message.content == "Bertolt et moi on est..."){
 message.reply("Gay ? Ah t'inquiète pas Armin et moi on est vachement ouvert là-dessus");
} 
if(message.content == "pas vrai Armin ?"){
 message.reply("Coucou les copains !");
} 
if(message.content == "pourquoi elles se battent ?"){
 message.reply("ta gueule Marco t'es toujours un personnage oubliable");
} 
if(message.content == "il avait mes clés et mes clopes cet enfoiré comment je fais pour rentrer chez moi ?!"){
 message.reply("mais tu n'as plus de chez toi^^");
} 
if(message.content == "sorai montre moi l'annonce de l'Alliance"){
 message.reply("recherche des MECHANTS pas très gentils pour attaquer des enfants dans une école. Mesurer de préférence plus de 1m60 parce que t'aura l'air con si t'es plus petit qu'eux. Non rémunéré, mais il y aura des caméras..Donc bonne visibilité GARANTIE");
}
if(message.content == "je mets mes mains où je veux petite... et c'est souvent dans la gueule"){
 message.reply("Quand on se bat on raconte pas sa vie");
}  
if(message.content == "j'ai juste dis que t'avais de beux yeux"){
 message.reply("Faut pas grand chose pour me démarer tu sais");
} 
if(message.content == "ça va ton trauma cranien"){
 message.reply("Y'a un muffin dans mon caleçon");
} 
if(message.content == "je veut un héro !!"){
 message.reply("Qui n'essaye pas de draguer ma mémé... ni mon pépé^^");
} 
if(message.content == "montre moi ce que tu as sous le capot"){
 message.reply("vous n'êtes pas mon genre de fräulein monsieur...");
} 
if(message.content == "KENNY"){
 message.reply("Viens ici petit enfoiré !");
} 
if(message.content == "y'a quelqu'un ?"){
 message.reply("Yamete ! Yamete tentacule-senpai !");
} 
if(message.content == "je suis Jean Kirschtein"){
 message.reply("Mon but est de devenir bourge");
} 
if(message.content == "OU EST-CE QUE T'A PLANQUE LE SEL ENFOIRE"){
 message.reply("VU TA GRANDE GUEULE T'ES UNE RESERVE DE SEL A TOI TOUT SEUL");
} 
if(message.content == "c'est quoi les 3 factions ?"){
 message.reply("La Garnison qui s'occupe de l'entretien des murs et qui sert surtout d'appât pour se faire bouffer, Le Bataillon d'Exploration qui eux se font bouffer à l'extérieur des murs et les Brigades Spéciales qui vivent OKLM comme des bourges bien en sécurité et probablement ceux qui vivront le plus longtemps");
} 
if(message.content == "tu viens de rater une cible de plus de 50 metre de haut"){
 message.reply("C'EST LE CUL D'TA MERE QUI FAIT 50 METRE DE HAUT")
} 
if(message.content == "battez vous pour la survie de l'humanité"){
 message.reply("FUYEZ POUR VOS VIES. LES FEMMES ET LES ALLEMANDS D'ABORD");
} 
if(message.content == "joyeux noel Sorai"){
 message.reply("Santa Claus ?");
} 
if(message.content == "j'ai un cadeau très spécial pour toi au fond de mon gros bidon"){
 message.reply("Ah ah j'espère que c'est une trottinette !");
} 
if(message.content == "mon père est mort"){
 message.reply("Où est ma chambre bande d'enculé ?");
} 
if(message.content == "qui c'est qui est un gros enculé ?!"){
 message.reply("C'est moi, SORAI");
} 
if(message.content == "mettez c'masque !"){
 message.reply("Wouaw c'est fantastique ! Ma peau retrouve l'éclat de ses 20 ans *");
} 
if(message.content == "OH NON JE BRULE"){
 message.reply("C'est l'principe du feu connard");
} 
if(message.content == "j'te jure que le prochain mec qui m'aborde j'le castre avec les dents"){
 message.reply("Ok j'suis une fille pour les 48 prochaines heures");
} 
if(message.content == "Sorai attention ! Des avaleurs"){
 message.reply("Des avaleurs de Bihïtt !");
} 
if(message.content == "Ces créatures sont réputés pour leur grande capacité à sucer"){
 message.reply("Du sang voyons !");
} 
if(message.content == "si je prends Kirito comme temoin à mon mariage est-ce qu'il portera un Kiritoast ?!"){
 message.reply("Elles sont de plus en plus connes vos questions !");
} 
if(message.content == "nan toi tu nique ta mère"){
message.reply("nan toi tu niques ta mère");
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

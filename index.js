//~~~~~Подключение библиотек и настройка переменных~~~~~
const	request		= require('request-promise');
const	Discord		= require("discord.js");
const	fs			= require("fs");
const	config		= require("./config.json");
const 	sqlite3 	= require('sqlite3').verbose();

var 	vrbl		= require('./variable');

var 	workNameMission;
var 	publNameMission;
const 	r_size 		= 7;
const 	r_colors 	= new Array(r_size);
var 	r_place 	= 0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~Подключаемся к DiscordAPI~~~
const 	client 		= new Discord.Client();
//const 	guild 		= client.guilds.first();

client.login(config.token)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~Блок с процессами~~~~
function fullTime (tmpMsg, message){ 
	var now = new Date();
	var time = now.toLocaleDateString() +" "+ now.toLocaleTimeString();
	// fs.appendFileSync("log.txt", "\n"+time+" "+message)
	fs.appendFileSync("log.txt", "\n"+time+" |"+message+"| "+tmpMsg)// Запрос был успешным, используйте объект ответа как хотите
	console.log(time+" "+tmpMsg)
	// message.channel.send(tmpMsg)
};
function missions(shortMission){
	switch(shortMission){ //Примечание: Затмение и Снежный бастион с циофркой в названии
		case "!пп":
			workNameMission = "[difficulty]chernobylhard"
			publNameMission = "Припять Профи"
			break;
		case "!пс":
			workNameMission = "[difficulty]chernobylnormal"
			publNameMission = "Припять Сложно"
			break;
		case "!пл":
			workNameMission = "[difficulty]chernobyleasy "
			publNameMission = "Припять Легко"
			break;
		case "!хард":
			workNameMission = "[difficulty]volcanosurvival"
			publNameMission = "Вулкан Хардкор"
			break;
		case "!пв":
			workNameMission = "[difficulty]volcanohard"
			publNameMission = "Вулкан Профи"
			break;
		case "!св":
			workNameMission = "[difficulty]volcanonormal"
			publNameMission = "Вулкан Сложно"
			break;
		case "!лв":
			workNameMission = "[difficulty]volcanoeasy"
			publNameMission = "Вулкан Легко"
			break;
		case "!вп":
			workNameMission = "[difficulty]japanhard"
			publNameMission = "Восход Профи"
			break;
		case "!вс":
			workNameMission = "[difficulty]japannormal"
			publNameMission = "Восход Сложно"
			break;
		case "!вл":
			workNameMission = "[difficulty]japaneasy"
			publNameMission = "Восход Легко"
			break;			
		case "!мп":
			workNameMission = "[difficulty]marshard"
			publNameMission = "Марс Профи"
			break;
		case "!мс":
			workNameMission = "[difficulty]marsnormal"
			publNameMission = "Марс Сложно"
			break;
		case "!мл":
			workNameMission = "[difficulty]marseasy"
			publNameMission = "Марс Легко"
			break;
		case "!лп":
			workNameMission = "[difficulty]icebreakerhard"
			publNameMission = "Ледокол Профи"
			break;
		case "!чп":
			workNameMission = "[difficulty]zombietowerhard"
			publNameMission = "Черная акула Профи"
			break;
		case "!лс":
			workNameMission = "[difficulty]icebreakernormal"
			publNameMission = "Ледокол  Сложно"
			break;
		case "!чс":
			workNameMission = "[difficulty]zombietowernormal"
			publNameMission = "Черная акула Сложно"
			break;
		case "!лл":
			workNameMission = "[difficulty]icebreakereasy"
			publNameMission = "Ледокол  Легко"
			break;
		case "!чл":
			workNameMission = "[difficulty]zombietowereasy"
			publNameMission = "Черная акула Легко"
			break;
			
		case "!ап":
			workNameMission = "[difficulty]anubishard [mode]"
			publNameMission = "Анубис Профи"
			break;
		case "!ас":
			workNameMission = "[difficulty]anubisnormal [mode]"
			publNameMission = "Анубис Сложно"
			break;
		case "!ал":
			workNameMission = "[difficulty]anubiseasy [mode]"
			publNameMission = "Анубис Легко"
			break;

		case "!гидра":
			workNameMission = "[difficulty]pve_arena"
			publNameMission = "Гидра"
			break;
		case "!ликва":
			workNameMission = "[difficulty]survivalmission"
			publNameMission = "Ликвидация"
			break;
		case "!зп":
			workNameMission = "[difficulty]anubishard2 [mode]"
			publNameMission = "Затмение Профи"
			break;
		case "!зс":
			workNameMission = "[difficulty]anubisnormal2 [mode]"
			publNameMission = "Затмение Сложно"
			break;
		case "!зл":
			workNameMission = "[difficulty]anubiseasy2 [mode]"
			publNameMission = "Затмение Легко"
			break;
		case "!оп":
			workNameMission = "[difficulty]zombiehard"
			publNameMission = "Опасный эксперимент Профи"
			break;
		case "!ос":
			workNameMission = "[difficulty]zombienormal"
			publNameMission = "Опасный эксперимент Cложно"
			break;
		case "!ол":
			workNameMission = "[difficulty]zombieeasy"
			publNameMission = "Опасный эксперимент Легко"
			break;
		case "!марафон":
			workNameMission = "[difficulty]campaignsections"
			publNameMission = "Марафон"
			break;
		case "!острие":
			workNameMission = "[difficulty]campaignsection1"
			publNameMission = "Острие"
			break;
		case "!засада":
			workNameMission = "[difficulty]campaignsection2"
			publNameMission = "Засада"
			break;
		case "!зенит":
			workNameMission = "[difficulty]campaignsection3"
			publNameMission = "Зенит"
			break;	
		case "!профи":
			workNameMission = "[difficulty]hardmission"
			publNameMission = "ПВЕ Профи"
			break;	
		case "!сложка":
			workNameMission = "[difficulty]normalmission"
			publNameMission = "ПВЕ Сложно"
			break;	
		case "!легкая":
			workNameMission = "[difficulty]easymission"
			publNameMission = "ПВЕ Легко"
			break;	
		case "!тренировка":
			workNameMission = "[difficulty]trainingmission"
			publNameMission = "ПВЕ Тренировка"
			break;	
		default:
			workNameMission = ""
			publNameMission = ""
			return;
	}
}
function bravis(message, userMessage){
	// console.log("message2 "+message)
	switch (message.channel.id) {
		case "689140019969130619":
			message1 = client.channels.get("698181076073447484");
			message1.send(userMessage);
			break;
		default:
			message.channel.send(userMessage)
	}
	
}
function srv(query,message){
	if (query.length == 2){server = 1
	} else if(query.length == 3){server = query[2]
	} else if(query.length ==1){
		tmpMsg ="Для отправки работы бота требуется 3 слова разделенными пробелами. Например: !ПП ник_персонажа 1"; 
		fullTime(tmpMsg,message)
	}
}
function filterNum(workNameMission,chernobylhardWonValue, chernobylhardLostValue){
	for(l=0; l<vrbl.digitalMission.length; l++){
		if (vrbl.digitalMission[l].indexOf(workNameMission)!= -1 && workNameMission!= "[difficulty]anubishard [mode]" && workNameMission!= "[difficulty]anubisnormal [mode]" && workNameMission!= "[difficulty]anubiseasy [mode]") {
			wonValue  =    chernobylhardWonValue.toString().substr(1);
			lostValue =    chernobylhardLostValue.toString().substr(1);  
			break;
		} else{
			wonValue  =    chernobylhardWonValue;
			lostValue =    chernobylhardLostValue;
		}
	}
}
function getResp(message, options){
	successResponse = function (response) {
		nowStatus = true
		fullresponse = response.full_response ///Получение значения из ответа
		rank = response.rank_id
		nick = response.nickname;
		user_id = response.user_id;
		str_all0 = fullresponse.split(vrbl.regexp_all)// Получение массива из строк
		str_all     = [];
		str_Won     = [];	//Массив со строками о пройденных	спецоперациях
		str_Lost    = [];	//Массив со строками о проваленных	спецоперациях
		for (let i=0; i<str_all0.length; i++) {
			if (str_all0[i].indexOf("player_sessions_won")!= -1) {
				str_Won.push(str_all0[i])	
			};
			if (str_all0[i].indexOf("player_sessions_lost")!= -1) {str_Lost.push(str_all0[i])};
		};

		missions(shortMission);

		if (workNameMission == ""){
			return;
		}
		insertDB(nick, user_id, str_Won, str_Lost, nowStatus, workNameMission, message,rank);
	}
	errResponse = function (response) { 
		// console.log('Произошло что-то плохое')// Произошло что-то плохое, обработка ошибки
		// console.log(vrbl.visibleErr)
		if(response.error.message == vrbl.visibleErr){
			nowStatus = false;
			insertDB(name, null, null, null, nowStatus, workNameMission,message, "00");
			return
		}
		errResponse = "__**"+name+"**__ "+ response.error.message ///Получение значения из ответа
		bravis(message, errResponse)
	}
	request(options)
	.then(successResponse)
	.catch(errResponse)
}
function checkMission(str_Won, str_Lost, shortMission,date,nowStatus,name,message,rank){
	str_Won	= str_Won.split('\n');
	str_Lost= str_Lost.split('\n');
	missions(shortMission);
	for (let j=0; j<str_Won.length; j++) {
		if (str_Won[j].indexOf(workNameMission) != -1) {
			chernobylhardWonValue   = str_Won[j].substr(str_Won[j].length-6).replace(/[^0-9]/g, '');break;
		} else{chernobylhardWonValue = 0}
	};
	for (let j=0; j<str_Lost.length; j++) {
		if (str_Lost[j].indexOf(workNameMission) != -1) {
			chernobylhardLostValue   = str_Lost[j].substr(str_Lost[j].length-6).replace(/[^0-9]/g, '');break
		}else{chernobylhardLostValue =0};
	};
	filterNum(workNameMission,chernobylhardWonValue, chernobylhardLostValue);
	switch (nowStatus) {
		case true:
			tmpMsg = name+" - "+publNameMission+": Пройдено/Слито "+chernobylhardWonValue+"/"+chernobylhardLostValue
			userMessage = "__Игрок: **"+name+ "**, Ранг " +rank+"__\n"+publNameMission +": Пройдено:"+chernobylhardWonValue+", Cлито:"+chernobylhardLostValue+ "\n "
			break;
		default:
			tmpMsg = name+" - "+publNameMission+": Пройдено/Слито "+chernobylhardWonValue+"/"+chernobylhardLostValue+"Данные от "+date;
			userMessage = "__Игрок: **"+name+ "**, Ранг " +rank+"__\n"+publNameMission +": Пройдено:"+chernobylhardWonValue+", Cлито:"+chernobylhardLostValue+ "\n Внимание: В настоящий момент статистика скрыта. Данные от "+date+ "\n";
			break;
	}
	fullTime(tmpMsg, author);
	bravis(message, userMessage)

}
function insertDB(nick, user_id, str_Won, str_Lost, nowStatus, workNameMission, message,rank){
	let db = new sqlite3.Database('./wf.db3', sqlite3.OPEN_READWRITE, (err) => {
		if (err) {
				console.error(err.message);
		}
	});
	db.serialize(()=>{
		nick=nick.toLowerCase()
		checkDB(nick, db, user_id, str_Won, str_Lost, nowStatus,workNameMission,message,rank);
	})
}
function checkDB(name, db, user_id, strW, strL, nowStatus,workNameMission, message,rank){
	db.get(vrbl.sqlCheck, name.toLowerCase(), (err, row) => {
		if (err) {
			fullTime("Ошибка отправки запроса в БД.",err.message);
			console.error(err.message);
		};
		switch (row) {
			case undefined:
				msg = "Данного аккаунта нет в базе!"
				switch (nowStatus) {
					case true:
						strW=str_Won.join(' ');
						strL=str_Lost.join(' ');
						var now = new Date();
						var time = now.toLocaleDateString() +" "+ now.toLocaleTimeString();
						nameL= name.toLowerCase();
						var sqlValuesAdd = [time, user_id, nameL, strW, strL];
						updateDB(db,vrbl.sqlInsert,sqlValuesAdd, );
						checkMission(strW, strL, shortMission, null, nowStatus,name,message,rank)
						return
						break;
					default:
						///msg = "Данного аккаунта нет в базе и статистика закрыта!";
						errResponse = "__**"+name+"**__ "+ vrbl.visibleErr+". Данные прошлых проверок отсутствуют." ///Получение значения из ответа
						fullTime(errResponse, message.author.tag)// Запрос был успешным, используйте объект ответа как хотите
						bravis(message, errResponse)
						return;
						break;
			}
			default:
				strW=row.won;
				strL=row.lost;
				switch (nowStatus) {
					case true:
						msg="Данный аккаунт найден в базе!"
						strW=str_Won.join(' ');
						strL=str_Lost.join(' ');
						nameL=name.toLowerCase();
						var sqlValuesUpdate = [strW, strL, nameL];
						updateDB(db,vrbl.sqlUpdate,sqlValuesUpdate );
						checkMission(strW, strL, shortMission, null, nowStatus,name,message,rank)
						break;
					default:				
						checkMission(strW, strL, shortMission, row.date, nowStatus,name,message, rank)
						break;
				}
				break;
		}
		db.close((err) => {
			if (err) {
				fullTime("Ошибка закрытия соединения с БД.",err.message);
			}
		});
	});
};
function updateDB(db,sqlQuery,sqlValues){
	db.run(sqlQuery, sqlValues, function(err){
		if (err){
			return fullTime("Ошибка добавления/обновления в БД.",err.message);
		}
		return;
	});
	return;
}
function unVisible(message, indexNicks, options){
	if (indexNicks != "-1" && message.author.id != 290170884520673281) {
		let badMsg = "Разработчик не хотел бы, чтоб его аккаунты просматривали через его же бота";
		fullTime(badMsg, message.author.tag);
		message.reply(badMsg);
		return;
	} else{getResp(message, options)};
}
function auto(str) {
    replacer = {
        "q":"й", "w":"ц"  , "e":"у" , "r":"к" , "t":"е", "y":"н", "u":"г", 
        "i":"ш", "o":"щ", "p":"з" , "[":"х" , "]":"ъ", "a":"ф", "s":"ы", 
        "d":"в" , "f":"а"  , "g":"п" , "h":"р" , "j":"о", "k":"л", "l":"д", 
        ";":"ж" , "'":"э"  , "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
        "n":"т" , "m":"ь"  ,  "/":"."
    };       
    for(i=0; i < str.length; i++){(replacer[ str[i].toLowerCase() ] != undefined) ? str = str.replace(str[i], replacer[ str[i] ]) : str;};
    msg=str
}
function checkTime() { ///радужный ник, первая часть
    // тут код
    var role = guild.roles.fetch("672099207393574942");

    if (role != undefined) {
        role.setColor(r_colors[r_place])
            .catch(console.log);
            if (r_place == (r_colors.length - 1)) {
                r_place = 0;
            } else {
                r_place++;
            }
    }

    client.setTimeout(checkTime, 1 * 1000);
}
function sin_to_hex(i, phase) { ///радужный ник вторая часть
    var sin = Math.sin(Math.PI / r_colors.length * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);

    return hex.length === 1 ? '0'+hex : hex;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~Запуск бота~~~~~
client.on("ready", ()=> {
	tmpMsg=`Бот был запущен с ${client.users.size} пользователями, на каналах ${client.channels.size} на серверах ${client.guilds.size}. `;
	//client.user.setGame(`Бот играет в ${client.guilds.size}`) // Что обображать в статусе бота
	fullTime(tmpMsg, "");
	// for (var i=0; i < r_size; i++) {
    //     var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
    //     var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
    //     var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
    
    //     r_colors[i] = '#'+ red + green + blue;
    // }
	client.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
	});
	//role = client.guilds.get('540965001314172949').roles

	//fs.appendFileSync("role.txt", role )
    // client.setTimeout(checkTime, 1 * 1000);
});
client.on('disconnect',()=>{
	tmpMsg=`Бот был отключен`
	fullTime(tmpMsg, "")
})
client.on('reconnecting',()=>{
	tmpMsg=`Бот был перезапущен`
	fullTime(tmpMsg, "")
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~Работаем с сообщениями с чата~~~~~~~
client.on('message', message => { //В случае если бот заметит новое сообщение (message)..
	var msg0 = message.content.toLowerCase();
    auto(msg0);
	author = message.author.tag;
	hello_arr = ["И тебе привeт, милый человек! :wave:", "Ебать мой лысый череп! Кого я вижу!", "Да благословят (хранят) вас боги, амон-ши! ***Амон-ши*** — друг по-анкариански ", "Чёрт бы меня побрал! Это же сам @"+author, "Рад видеть Его Величество (Её Величество) в добром здравии!", "Привeтствую своего верного собутыльника!", "Пpивeт! Вижу, ты ещё не успел познакомиться со смертью?", "Хакуна матата епта)))", "Хай с вами 你在那里 (И вон Гай)", "Привeтик-пистолетик с вами @"+author+ "-опасность!", "О, привеееееет, землянин!", "Hello my :cat: ", "Здравие желаю :handshake: товарищ Генерал"];
	if(message.author.bot) return;
	if(msg.search("привет") !=-1){message.channel.send(hello_arr[Math.floor(Math.random() * hello_arr.length)]);return};
	if(msg.search("умеешь") !=-1){fullTime(vrbl.help, author);message.channel.send(vrbl.help);return};
	if(msg.search("почему") !=-1){message.channel.send("Спрашиваешь почeму? \n" +vrbl.questionWhy[Math.floor(Math.random() * vrbl.questionWhy.length)]);return};
	if(msg.search("в смысле") !=-1){message.channel.send("Что значит в cмыcлe? \n" +vrbl.meaning[Math.floor(Math.random() * vrbl.meaning.length)]);return};
	if(msg.search("без бота") !=-1){fullTime("Отправлена инструкция «ручной» проверки статистики", author);message.channel.send(vrbl.handmade);return};
	if(msg == "разработчик"){
		(message.author.id == 290170884520673281) ? message.reply("Вы разработчик") : message.reply("Вы не разработчик, я (**бот**) вас боюсь :stuck_out_tongue:")
	}
	if(msg.startsWith('!здфн')) { return;}
	if(msg.startsWith('!ылшз')) { return;}
	if(msg.startsWith('!ыуфкср')) { return;}
	if(msg.startsWith('!куздфн')) { return;}
	if(msg.startsWith('!ыещз')) { return;}
	if(msg.startsWith('!зфгыу')) { return;}

	if(msg.startsWith(config.prefix)){
		// if(msg.search(query[0]) !)
		query = msg.split(/\s/);
		query[2]=+query[2]
		if(query[0].length ==2)	return;
		if(query[0].search(vrbl.rhytm) !=-1)  return;
		// if(query[0] == '!play') {
		// 	//console.log("Проигрывание")
		// 	return
		// };
		// if(query[0]== "!skip") return;
		// if(query[0]== "!search") return;
		// if(query[0]== "!replay") return;
		// if(query[0]== "!stop") return;
		// if(query[0]== "!pause") return;
		srv(query, message)
		shortMission    = query[0];
		name            = query[1];
		server;
		srv(query,message)

		indexNicks = vrbl.nicks.indexOf(name)
		let options = {
			method: 'GET',
			url: 'http://api.warface.ru/user/stat/',
			qs: {
				name: name,
				server: server
			},
			json: true
		};
		unVisible(message, indexNicks,options)
	};
}) 

// process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

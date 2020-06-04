var hello       =   "И тебе привeт, милый человек! :wave:";
var err         =   "Произошло что-то плохое c сервером Mail-Group. Надеюсь это не из-за меня :yum:"
var help        =   "Этот бот мониторит чат в ожидании команд:\n «**!пп** *пробел* **ник**».\nАналогичным образом: **!хард**, **!вп**, **!мп**, **!лп**, **!ча**, **!ликва**, **!ап**, **!зп** ,**!оэ**, **!гидра** \n P.S. Сложки, вулкан профи и обычные ПВЕшки можно добавить, но... \n Во-первых, эт врятли вообще кому-то понадобится. Во-вторых, какую команду вызова придумать? :((("
var server_err  = "Для отправки работы бота требуется 3 слова разделенными пробелами. Например: !ПП ник_персонажа 1"
nicks           = ["г.манчестер", "эдинбургский"]
var handmade    = "Для просмотра статистики при выключенном боте нужно:\n1) Переходите по ссылке:\nhttp://api.warface.ru/user/stat/?name=НИК&server=1 \nгде после name= вставляете свой ник, после server= пишите номер сервера (1-альфа, 2-браво, 3-чарли, (хз зачем, но 4-дельта).\n2)Жмете F3 (ctrl + F), ищете название спецоперации, покажет 2 совпадения после него 2 надписи: player_sessions_lost (проигранно игровых сессий) и player_sessions_won (выигранно игровых сессий).\nНазвания миссий:\npve_arena    Гидра;\nchernobylhard     ПП;\nvolcanosurvival Хард;\njapanhard    ВП;\nmarshard    МП;\nicebreakerhard    ЛП;\nzombietowerhard    ЧА;\nanubishard    АП;\nanubishard2    ЗП;\n";
digitalMission  = ["[difficulty]anubishard2 [mode]","[difficulty]anubisnormal2 [mode]", "[difficulty]anubiseasy2 [mode]","[difficulty]campaignsection1", "[difficulty]campaignsection2", "[difficulty]campaignsection3 [mode]"];
questionWhy     = ["- согласно пророчеству","- так исторически сложилось", "- таков мой <<Божеский>> замысел","- во славу сатане","- потому что это тоже имеет цену", "-потому что каждый год около 200 человек умирают от нападения диких муравьев"]
meaning         = ["В здравом!", "А смысла нет :woman_shrugging: ", "В настолько глубоком, что не каждому дано понять" ,"Зачем тебе смысл? Вот лови Енотика ))) \n /tts :raccoon: "]
rhytm           = ["!play", "!disconnect", "!skip", "!search", "!pause", "!replay"]
var regexp_all  = /<Sum>/
var sqlCheck    = `SELECT date, nick, won, lost FROM stat WHERE nick=?`
var sqlInsert   = `INSERT INTO    stat (date, id, nick, won, lost) VALUES(?,?,?,?,?)`
var sqlUpdate   = `UPDATE stat    SET won = ?, lost = ?	WHERE nick = ?`;
var visibleErr  = 'Игрок скрыл свою статистику'


module.exports.hello = hello;
module.exports.err = err;
module.exports.help = help;
module.exports.server_err = server_err;
module.exports.nicks = nicks;
module.exports.handmade = handmade;
module.exports.digitalMission = digitalMission
module.exports.questionWhy = questionWhy
module.exports.meaning = meaning
module.exports.rhytm = rhytm
module.exports.regexp_all=regexp_all
module.exports.sqlCheck=sqlCheck
module.exports.sqlInsert =sqlInsert
module.exports.sqlUpdate=sqlUpdate
module.exports.visibleErr=visibleErr
// module.exports.
// module.exports.

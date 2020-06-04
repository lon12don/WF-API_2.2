var str0 = "difficulty]anubishard2 [mode]PVE [stat]player_sessions_won = 4564644"

console.log(str0.length);
str1 = str0.substr(str0.length-4).replace(/[^0-9]/g, '')
console.log(str1)
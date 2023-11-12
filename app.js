//console.log("Yo, it's working.")

const tools = [
    {name: "Teeth", generates: 1, cost: 0}, //unlimited use
    {name: "Rusty scissors", generates: 5, cost: 5}, //purchase once, unlimited use
    {name: "Old-timey push mower", generates: 50, cost: 25}, //purchase once, unlimited use
    {name: "Fancy battery mower", generates: 100, cost: 250}, //purchase once, unlimited use
    {name: "Team of starving students", generates: 250, cost: 500}, //purchase once, unlimited use
]

const player = {
    money: 0,
    tool: 0,
    wonGame: false
}

const tool = tools[player.tool];

function mowLawn() {
    alert(`You mowed a lawn with ${tool.name} and made ${tool.generates} dollars!`);
    player.money += tool.generates
}

function buyTool() {
    if (player.tool + 1 < tools.length) {
        const newTool = tools[player.tool + 1];
        if (newTool.cost <= player.money) {
            alert(`You have bought a ${newTool.name} for ${newTool.cost} dollars. Now get back to work!`);
            player.tool += 1;
            player.money -= newTool.cost 
        } else {alert("You cannot afford a new tool right now.")    
        } 
    } else {alert(`There are no new tools available to buy.`)}
}

function winConditions() {
if (player.tool === tools.length - 1 && player.money >= 10) {
    alert(`You've hire;d a team and generated ${player.money}! You've won the game!`) 
    player.wonGame === true;
}}


alert("Welcome to capitalism! You're a landscaper. Get to work!")


while (!player.wonGame) {
    const response = prompt(`You currently have ${player.money} dollars. Do you want to [m]ow lawns or [b]uy a new tool?`) 
    if (response === "m") {
        mowLawn()
    } else if (response === "b") {
        buyTool()
    } else {
        alert("That's not a valid option. This is capitalism, baby! You gotta work, buy, or die. Type 'c' to grind or 'u' to consume.")
    }
}
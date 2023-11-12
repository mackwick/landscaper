console.log("Yo, it's working.")

const tools = [
    {name: "your teeth", generates: 1, cost: 0},
    {name: "rusty scissors", generates: 5, cost: 5}, 
    {name: "old-timey push mower", generates: 50, cost: 25}, 
    {name: "fancy battery mower", generates: 100, cost: 250},
    {name: "team of starving students", generates: 250, cost: 500}, 
]

const player = {
    money: 0,
    tool: 0,
    wonGame: false
}

function mowLawn() {
    const tool = tools[player.tool];
    alert(`You mowed a lawn with ${tool.name} and made ${tool.generates} dollars!`);
    player.money += tool.generates;
}

function buyTool() {
    if (player.tool + 1 < tools.length) {
        const newTool = tools[player.tool + 1];
        if (newTool.cost <= player.money) {
            player.money -= newTool.cost;
            player.tool += 1;
            alert(`You have purchased a new tool. Congrats! Now get back to work.`)
            } else {alert("You cannot afford a new tool right now.")    
        } 
    } else {alert(`There are no new tools available to buy.`)}
}

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

function winConditions() {
if (player.tool === tools.length - 1 && player.money >= 1000) {
    alert(`You've hired a team and generated ${player.money}! You've won the game!`) 
    player.wonGame = true;
}}
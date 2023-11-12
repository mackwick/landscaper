//console.log("Yo, it's working.")

//you cut lawns
//you start with your teeth, which generates $1/day

const tools = [
    {name: "Teeth", generates: 1, cost: 0}
    {name: "Rusty scisors", generates: "unknown", cost: 5}
]

const player = {
    money: 0,
    tool: 0
}

function mowLawn() {
    const tool = tools[player.tool];
    alert(`You mowed a lawn with ${tool.name} and made ${tool.generates} dollars!`);
    player.money += tool.generates
}

function buyTool() {
    if (player.tool + 1 < tools.length) {
        const newTool = tools[player.tool + 1];
        if (newTool.cost <= player.money) {
            alert(`You have purchased a ${newTool.name} and spent ${newTool.cost}.`);
            player.tool = newTool;
            player.money -= tool.cost
        } else {
            alert(`There are no new tools available to buy.`)
        }
    }
}
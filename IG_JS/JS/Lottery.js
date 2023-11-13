var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];

function drawLottery() {
    var randomNumber = Math.random() * 100;
    var cumulativeProbability = 0;

    for (var i = 0; i < rarities.length; i++) {
        cumulativeProbability += rarities[i].probability;
        if (randomNumber < cumulativeProbability) {
            var resultElement = document.getElementById("result");
            resultElement.innerHTML = "Type: " + rarities[i].type + "<br>Name: " + rarities[i].name;
            break;
        }
    }
}
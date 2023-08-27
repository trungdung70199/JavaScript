// Probability

//  Data
const lotteryData = [
    { prize: "一等", probability: 0.1 },
    { prize: "二等", probability: 0.2 },
    { prize: "三等", probability: 0.3 },
    { prize: "ハズレ", probability: 0.4 }
];

// function
function drawLottery(data) {
    const randomNumber = Math.random(); // 0から1の間のランダムな数値

    let accumulatedProbability = 0;
    for (const item of data) {
        accumulatedProbability += item.probability;
        if (randomNumber < accumulatedProbability) {
            return item.prize;
        }
    }

    return "ハズレ"; // 全ての確率を足してもランダム数値を超えない場合はハズレ
}

// result
const result = drawLottery(lotteryData);
console.log("当選結果:", result);
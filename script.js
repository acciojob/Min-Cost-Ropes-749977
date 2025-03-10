function mincost(arr) {
    let minHeap = [...arr].sort((a, b) => a - b);
    let cost = 0;

    while (minHeap.length > 1) {
        let first = minHeap.shift();
        let second = minHeap.shift();
        let sum = first + second;
        cost += sum;
        minHeap.push(sum);
        minHeap.sort((a, b) => a - b);
    }
    
    return cost;
}

function calculateMinCost() {
    let input = document.getElementById("ropes").value;
    let ropes = input.split(",").map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (ropes.length === 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }
    let result = mincost(ropes);
    document.getElementById("result").innerText = "Minimum cost: " + result;
}

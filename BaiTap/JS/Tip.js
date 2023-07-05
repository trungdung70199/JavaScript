// Calculate Tip

function calculateTip() {
    var billamt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    // Validate input
    if (billamt === "" || serviceQual == 0) {
        alert("Please enter values: ");
        return;
    }

    // Check to see if this input
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Calculate Tip
    var total = (billamt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
// click to call func
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
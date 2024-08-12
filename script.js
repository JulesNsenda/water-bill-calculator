function calculateWaterBill(consumption) {
    let bill = 0;

    if (consumption > 40) {
        bill += (consumption - 40) * 57.36; // Calculate for >30-40 kl band
        consumption = 40;
    }
    if (consumption > 30) {
        bill += (consumption - 30) * 52.44; // Calculate for >20-30 kl band
        consumption = 30;
    }
    if (consumption > 20) {
        bill += (consumption - 20) * 37.95; // Calculate for >15-20 kl band
        consumption = 20;
    }
    if (consumption > 15) {
        bill += (consumption - 15) * 27.07; // Calculate for >10-15 kl band
        consumption = 15;
    }
    if (consumption > 6) {
        bill += (consumption - 6) * 25.94; // Calculate for >6-10 kl band
    }
    // The first 6 kl is free, so no charge for 0-6 kl.

    return bill;
}

function calculate() {
    let consumption = parseFloat(document.getElementById("consumption").value);
    if (isNaN(consumption) || consumption < 0) {
        alert("Please enter a valid water consumption value.");
        return;
    }

    let totalBill = calculateWaterBill(consumption);
    document.getElementById("result").innerText = `R${totalBill.toFixed(2)}`;
}

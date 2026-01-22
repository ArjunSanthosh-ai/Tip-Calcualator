let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");
let calculateButtonEl = document.getElementById("calculateButton");

calculateButtonEl.onclick = function() {
    let billAmount = billAmountEl.value;
    let percentageTip = percentageTipEl.value;

    if (billAmount === "" && percentageTip === "") {
        errorMessageEl.textContent =
            "Please Enter Bill Amount and Percentage Tip";
    } else if (billAmount === "") {
        errorMessageEl.textContent = "Please Enter Bill Amount";
    } else if (percentageTip === "") {
        errorMessageEl.textContent = "Please Enter Percentage Tip";
    } else {
        errorMessageEl.textContent = "";

        let calculatedTip = (percentageTip / 100) * billAmount;
        let totalAmount = parseInt(billAmount) + calculatedTip;

        tipAmountEl.value = calculatedTip;
        totalAmountEl.value = totalAmount;
    }
};

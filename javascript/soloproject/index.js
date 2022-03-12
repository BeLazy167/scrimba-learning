let number = 20;
document.getElementById("number").textContent = number;
meterToFeet(number);
feetToMeter(number);
literToGallon(number);
gallonToLiter(number);
kilosToPound(number);
poundToKilos(number);

function convert() {
    let number = document.getElementById("fnumber").value;
    document.getElementById("number").textContent = number;
    meterToFeet(number);
    feetToMeter(number);
    literToGallon(number);
    gallonToLiter(number);
    kilosToPound(number);
    poundToKilos(number);
}

function meterToFeet(number) {
    let conversion = number * 3.28084;
    let final = number + " meters = " + conversion.toFixed(3) + " feet";
    document.getElementById("meters").textContent = final;
}
function feetToMeter(number) {
    let conversion = number * 0.3048;
    let final = number + " feet = " + conversion.toFixed(3) + " meter";
    document.getElementById("feet").textContent = final;
}
function literToGallon(number) {
    let conversion = number * 0.26417;
    let final = number + " liters = " + conversion.toFixed(3) + " gallon";
    document.getElementById("liter").textContent = final;
}
function gallonToLiter(number) {
    let conversion = number * 3.7854;
    let final = number + " gallon = " + conversion.toFixed(3) + " liters";
    document.getElementById("gallon").textContent = final;
}
function kilosToPound(number) {
    let conversion = number * 2.204623;
    let final = number + " kilos = " + conversion.toFixed(3) + " pounds";
    document.getElementById("kilo").textContent = final;
}
function poundToKilos(number) {
    let conversion = number * 0.4535924;
    let final = number + " pound = " + conversion.toFixed(3) + " kilos";
    document.getElementById("pound").textContent = final;
}

document.getElementById("fnumber").defaultValue = 20;

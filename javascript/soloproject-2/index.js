//genrate password
document.getElementById("length").textContent = 12;

function givePass() {
    let length = parseInt(document.getElementById("length").value);
    document.getElementById("b1").textContent = generatePassword(length);
    document.getElementById("b2").textContent = generatePassword(length);
    document.getElementById("b3").textContent = generatePassword(length);
    document.getElementById("b4").textContent = generatePassword(length);
}

function generatePassword(length) {
    (charset =
        "!@#$%^&*_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
        (retVal = "");
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function toCopy(idNumber) {
    let password = document.getElementById(idNumber);
    navigator.clipboard.writeText(password.textContent);
    password.textContent = "Copied";
}
function b1Copy() {
    toCopy("b1");
}
function b2Copy() {
    toCopy("b2");
}
function b4Copy() {
    toCopy("b4");
}
function b3Copy() {
    toCopy("b3");
}

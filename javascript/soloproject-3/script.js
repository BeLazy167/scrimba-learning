const prices = [
    { job: "Wash Car", price: 10 },
    { job: "Mow Lawn", price: 20 },
    { job: "Pull Weeds", price: 30 },
];
let sum = 0;

const washCar = document.getElementById("btn-1");
const mowLawn = document.getElementById("btn-2");
const pullWeeds = document.getElementById("btn-3");

let toAdd = document.getElementById("main-container");

washCar.addEventListener("click", function () {
    sum = sum + prices[0].price;

    toAdd.innerHTML += `
        <div class="contianer">
            <div>
                <h5 class="t-1">Wash Car</h5>
            </div>
            <div>
                <h5 class="s-1">
                    <strong>$10</strong>
                </h5>
            </div>
        </div>`;
});

mowLawn.addEventListener("click", function () {
    sum = sum + prices[1].price;
    toAdd.innerHTML += `
        <div class="contianer">
            <div>
                <h5 class="t-2">Mow Lawn</h5>
            </div>
            <div>
                <h5 class="s-2">
                    <strong>$20</strong>
                </h5>
            </div>
        </div>`;
});

pullWeeds.addEventListener("click", function () {
    console.log(typeof document.getElementsByClassName("s-3").innerHTML);
    if (
        typeof document.getElementsByClassName("s-3").textContent == "undefined"
    ) {
        sum = sum + prices[2].price;
        toAdd.innerHTML += `
        <div class="contianer">
            <div>
                <h5 class="t-3">Pull Weeds</h5>
            </div>
            <div>
                <h5 class="s-3">
                    <strong>$30</strong>
                </h5>
            </div>
        </div>`;
    }
});

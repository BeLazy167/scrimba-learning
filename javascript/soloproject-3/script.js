const prices = [
    { job: "Wash Car", price: 10 },
    { job: "Mow Lawn", price: 20 },
    { job: "Pull Weeds", price: 30 },
];
let sum = 0;
let tag1 = false;
let tag2 = false;
let tag3 = false;

const washCar = document.getElementById("btn-1");
const mowLawn = document.getElementById("btn-2");
const pullWeeds = document.getElementById("btn-3");

let toAdd = document.getElementById("main-container");

washCar.addEventListener("click", function () {
    if (!tag1) {
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
        tag1 = true;
    }
});

mowLawn.addEventListener("click", function () {
    if (!tag2) {
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
        tag2 = true;
    }
});

pullWeeds.addEventListener("click", function () {
    if (!tag3) {
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
        tag3 = true;
    }
});

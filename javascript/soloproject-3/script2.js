const prices = [
    { job: "Wash Car", price: 10 },
    { job: "Mow Lawn", price: 20 },
    { job: "Pull Weeds", price: 30 },
];
let sum = 0;

let taskAdded = [];

const washCar = document.getElementById("btn-1");
const mowLawn = document.getElementById("btn-2");
const pullWeeds = document.getElementById("btn-3");

let toAdd = document.getElementById("main-container");

washCar.addEventListener("click", function () {
    taskAdded.push(0);
    render(taskAdded.sort(dsadsadas));
});

mowLawn.addEventListener("click", function () {
    taskAdded.push(1);
    render(taskAdded.sort());
});

pullWeeds.addEventListener("click", function () {
    taskAdded.push(2);
    render(taskAdded.sort());
});

function render(taskAdded) {
    console.log(taskAdded);
    let initial;
    for (let t = 0; t < taskAdded.length; t++) {
        if (initial != taskAdded[t]) {
            initial = taskAdded[t];
            toAdd.innerHTML += `
            <div class="contianer">
                    <div>
                        <h5 class="t-1">${prices[initial].job}</h5>
                    </div>
                    <div>
                        <h5 class="s-1"><strong>${prices[initial].price}</strong></h5>
                    </div>
                </div>
            `;
        } else {
            toChangePrice = "s" + "-" + taskAdded[t];
            document.getElementById(toChangePrice).textContent +=
                prices[taskAdded[t]].price;
        }
    }
}

var plus = document.getElementById("btn-aumentar");
var reset = document.getElementById("btn-resetar");
var elementCounter = document.getElementById("contador");
var counter = 0;
var increaseValue = function () {
    counter++;
    elementCounter.innerHTML = counter.toString();
};
var resetValue = function () {
    counter = 0;
    elementCounter.innerHTML = counter.toString();
};
plus.addEventListener("click", increaseValue);
reset.addEventListener("click", resetValue);

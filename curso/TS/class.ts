const plus = document.getElementById("btn-aumentar") as HTMLButtonElement;
const reset = document.getElementById("btn-resetar") as HTMLButtonElement;
const elementCounter = document.getElementById("contador") as HTMLSpanElement;

let counter: number = 0;

const increaseValue = (): void => {
    counter++;
    elementCounter.innerHTML = counter.toString();
};

const resetValue = (): void => {
    counter = 0;
    elementCounter.innerHTML = counter.toString();
};

plus.addEventListener("click", increaseValue);
reset.addEventListener("click", resetValue);

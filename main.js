import * as elements from "./import.js";
import * as functions from "./functions.js";

let array;

elements.generateButton.addEventListener("click", () => {
    array = functions.generateArray(elements.displayContainer);
});

elements.selectionSort.addEventListener("click", async () => {
    await functions.selectionSort(array, (current) => {
        elements.arrayElement.innerText = current;
    });
});

elements.bubbleSort.addEventListener("click", async () => {
    await functions.bubbleSort(array, (current) => {
        elements.arrayElement.innerText = current;
    });
});
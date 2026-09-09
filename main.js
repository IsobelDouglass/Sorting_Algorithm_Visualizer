import * as elements from "./import.js";
import * as functions from "./functions.js";

let array;

elements.generateBtn.addEventListener("click", () => {
    array = functions.generateArray(elements.displayContainer);
});

elements.selectionSortBtn.addEventListener("click", async () => {
    await functions.selectionSort(array, (current) => {
        elements.arrayElement.innerText = current;
    });
});

elements.bubbleSortBtn.addEventListener("click", async () => {
    await functions.bubbleSort(array, (current) => {
        elements.arrayElement.innerText = current;
    });
});
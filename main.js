import * as elements from "./import.js";
import * as functions from "./functions.js";

let array;

elements.arraySize.addEventListener("blur", () => {
    if (elements.arraySize.value < 5) {
        elements.arraySize.value = 5;
    } else if (elements.arraySize.value > 100) {
        elements.arraySize.value = 100;
    }
    elements.arraySizeValue.innerText = elements.arraySize.value;
});

elements.generateBtn.addEventListener("click", () => {
    let sizeArray = parseInt(elements.arraySize.value);
    array = functions.generateArray(elements.displayContainer, sizeArray);
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
import * as elements from "./import.js";
import * as functions from "./functions.js";

let array;
let container;

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
    array = functions.generateArray(sizeArray);
    container = elements.displayContainer;
    functions.renderArray(container, array);
});

elements.selectionSortBtn.addEventListener("click", async () => {
    await functions.selectionSort(array, container, functions.renderArray);
});

elements.bubbleSortBtn.addEventListener("click", async () => {
    await functions.bubbleSort(array, container, functions.renderArray);
});
import * as animate from "./animation.js";

function toggleDropdown(element) {
    element.classList.toggle("show");
}

let output = [];

function generateArray(num) {
    output = []; // Clear the output array before generating a new one
    for (let j = 0; j < num; j++) {
        let randomValue = Math.floor(Math.random() * 10) + 1;
        output.push(randomValue);
    }
    return output;
}

function renderArray(element, array) {
    element.replaceChildren();
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div");
        div.className = "array-element";
        div.classList.add("value-" + array[i]);
        element.appendChild(div);
    }
    return element;
}

async function selectionSort(array, container, render, speed) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            render(container, array);
            try {
                animate.playSoundAndAnimation(array[i], i, minIndex, i, minIndex, 500);
            } catch (e) {
                console.error("Sound error:", e);
            }
            await animate.sleep(speed);
        }
    }
    return array;
}

async function bubbleSort(array, container, render, speed) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                render(container, array);
                try {
                    animate.playSoundAndAnimation(array[j], j, j + 1, j, j + 1, 500);
                } catch (e) {
                    console.error("Sound error:", e);
                }
                await animate.sleep(speed);
            }
        }
    }
    return array;
}

export { toggleDropdown, generateArray, selectionSort, bubbleSort, renderArray, output };
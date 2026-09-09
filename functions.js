import * as animate from "./animation.js";

function toggleDropdown(element) {
    element.classList.toggle("show");
}

function generateArray(element) {
    let i = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    element.replaceChildren();
    for (let j = 0; j < i; j++) {
        let num = Math.floor(Math.random() * 10) + 1;
        let div = document.createElement("div");
        div.className = "array-element";
        div.classList.add("value-" + num);
        element.appendChild(div);
    }
    return;
}

async function selectionSort(array, render) {
    for (let i = 0; i < array.children.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.children.length; j++) {
            if (array.children[j].classList[1] < array.children[minIndex].classList[1]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array.children[i], array.children[minIndex]] = [array.children[minIndex], array.children[i]];
            animate.playSubtleClick();
            if (render) render(array); // optional: update UI here
            await animate.sleep(1000);
        }
    }
    return array;
}

async function bubbleSort(array, render) {
    let n = array.children.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array.children[j].classList[1] > array.children[j + 1].classList[1]) {
                [array.children[j], array.children[j + 1]] = [array.children[j + 1], array.children[j]];
                animate.playSubtleClick();
                if (render) render(array);
                await animate.sleep(1000);
            }
        }
    }
    return array;
}

export { toggleDropdown, generateArray, selectionSort, bubbleSort };
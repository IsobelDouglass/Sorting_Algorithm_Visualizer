import * as animate from "./animation.js";

function toggleDropdown(element) {
    element.classList.toggle("show");
}

function generateArray(element, num) {  
    element.replaceChildren();
    for (let j = 0; j < num; j++) {
        let randomValue = Math.floor(Math.random() * 10) + 1;
        let div = document.createElement("div");
        div.className = "array-element";
        div.classList.add("value-" + randomValue);
        element.appendChild(div);
    }
    return element;
}

async function selectionSort(array, render) {
    for (let i = 0; i < array.children.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.children.length; j++) {
            let jValue = parseInt(array.children[j].classList[1].split("-")[1]);
            let minValue = parseInt(array.children[minIndex].classList[1].split("-")[1]);
            if (jValue < minValue) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let elem1 = array.children[i];
            let elem2 = array.children[minIndex];
            array.insertBefore(elem2, elem1);
            array.insertBefore(elem1, elem2.nextSibling);
            animate.playSoundAndAnimation();
            if (render) render(array);
            await animate.sleep(1000);
        }
    }
    return array;
}

async function bubbleSort(array, render) {
    let n = array.children.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let currentValue = parseInt(array.children[j].classList[1].split("-")[1]);
            let nextValue = parseInt(array.children[j + 1].classList[1].split("-")[1]);
            if (currentValue > nextValue) {
                let elem1 = array.children[j];
                let elem2 = array.children[j + 1];
                array.insertBefore(elem2, elem1);
                array.insertBefore(elem1, elem2.nextSibling);
                animate.playSoundAndAnimation();
                if (render) render(array);
                await animate.sleep(1000);
            }
        }
    }
    return array;
}

export { toggleDropdown, generateArray, selectionSort, bubbleSort };
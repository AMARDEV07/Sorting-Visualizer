// STEPS TO DO HERE 
// 1. select the Array size slider id or class
//2. Applying eventlistener to update the number and size of arrays as selected by the users through the size slider
//3. set a default delay time wait for waitforme function
//4. select the speed slider id or class
//5. Applying eventlistener to update the speed of generating arrays as selected by the users through the speed slider
//6. create a new empty array to store randomly generated array sizes
//7. display some bydefault arrays whenever we visit the site by calling a function
//8. generating new array of bars based on the size given by the users
//a. function call to delete all the previous arrays which are generated by default whenever we visit the page
//b. create array of bars
//9. select the div id from the html file
//10. create multiple element div using loop and adding class 'bar col'
//11. function definition to delete all the previous arrays which are generated by default whenever we visit the page
//12. generate new set of arrys whenever user Select newarray button
//13. disable all the sorting buttons while one sorting process take place
//14. enable all the sorting buttons after one of the sorting process is totally completed
//15. Disables array size slider while one sorting process take place
//16. Enables array size slider after one of the sorting process is done
//17. Disables newArray buttons while one sorting process take place
//18. Enables newArray buttons after one of the sorting process is done
//19. Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
//20 swapping two consequetive arrays till sorting completely take place

const output = document.querySelector('#size_value')
const bars = document.querySelector("#mainbody");
// select the Array size slider id or class
const arraySize = document.querySelector('#size_slider');
const selectText = document.querySelector('.selected')
output.innerHTML = arraySize.value
// console.log(arraySize.value)
// let headingchange1 = document.querySelector('#headingchange');
// Applying eventlistener to update the number and size of arrays as selected by the users through the size slider
var arrayVal = 64;
arraySize.addEventListener('input', function () {
    selectText.innerHTML = `Size Changed`
    output.innerHTML = this.value
    arrayVal = this.value
    createNewArray(arrayVal);
});

// set a default delay time wait for waitforme function
let delay = 39;

// select the speed slider id or class
let delayElement = document.querySelector('#speed_slider');
const speedOutput = document.querySelector('#speed_value')
speedOutput.innerHTML = delayElement.value
// Applying eventlistener to update the speed of generating arrays as selected by the users through the speed slider 
delayElement.addEventListener('input', function () {
    selectText.innerHTML = `Speed Changed`
    speedOutput.innerHTML = this.value
    delay = 525 - parseInt(100*this.value);
});

// create a new empty array to store randomly generated array sizes
let array = [];

// display some bydefault arrays whenever we visit the site by calling a function
createNewArray(64);

// generating new array of bars based on the size given by the users

function createNewArray(arrayVal) {
    // function call to delete all the previos arrays which are generated by default whenever we visit the page
    deleteChild();

    // create array of bars
    array = []
    for (let i = 0; i < arrayVal; i++) {
        let temp = Math.floor(Math.random() * (370 - 20) + 20)
        array.push(temp)
    }
    // console.log(array)
    // create multiple element div using loop and adding class 'bar col'
    // const bars = document.querySelectorAll('#mainbody')
    for (let i = 0; i < arrayVal; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`
        bar.className ='bar';
        bar.innerHTML = `${array[i]}`
        bar.style.width = `${(96 / arrayVal)}vw`
        bars.appendChild(bar);
    }

}

// function definition to delete all the previous arrays which are generated by default whenever we visit the page
function deleteChild() {
    // const bars = document.querySelector("#mainbody");
    while (bars.firstChild) {
        bars.removeChild(bars.firstChild)
    }
}

// generate new set of arrys whenever user Select newarray button

const newArray = document.querySelector("#generate");
newArray.addEventListener("click", function () {
    // headingchange1.textContent = "Random Array is Generated";
    var mouseclick = new Audio('Mouseclick.mp3')
    mouseclick.play()
    enableSortingBtn();
    enableSizeSlider();
    selectText.innerHTML = `New Array Generated`
    // creating arr
    createNewArray(arrayVal);
    const description = document.querySelector('#description')
    description.style.display = 'none'
    const section = document.querySelector('#fullbody')
    section.style.height = '100vh'

});



// disable all the sorting buttons while one sorting process take place
function disableSortingBtn() {
    document.querySelector(".BubbleSort").disabled = true;
    document.querySelector(".InsertionSort").disabled = true;
    document.querySelector(".MergeSort").disabled = true;
    document.querySelector(".QuickSort").disabled = true;
    document.querySelector(".SelectionSort").disabled = true;
}

// enable all the sorting buttons after one of the sorting process is totally completed
function enableSortingBtn() {
    document.querySelector(".BubbleSort").disabled = false;
    document.querySelector(".InsertionSort").disabled = false;
    document.querySelector(".MergeSort").disabled = false;
    document.querySelector(".QuickSort").disabled = false;
    document.querySelector(".SelectionSort").disabled = false;
}

// Disables array size slider while one sorting process take place
function disableSizeSlider() {
    document.querySelector("#size_slider").disabled = true;
    document.querySelector('#size').disabled = true
}

// Enables array size slider after one of the sorting process is done
function enableSizeSlider() {
    document.querySelector("#size_slider").disabled = false;
    document.querySelector('#size').disabled = false
}

// Disables newArray buttons while one sorting process take place
function disableNewArrayBtn() {
    document.querySelector("#generate").disabled = true;
}

// Enables newArray buttons after one of the sorting process is done
function enableNewArrayBtn() {
    document.querySelector("#generate").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}



// swapping two consequetive arrays till sorting completely take place

function swapping(eliment_1, eliment_2) {


    let temp = eliment_1.style.height;
    eliment_1.style.height = eliment_2.style.height;
    eliment_2.style.height = temp;

}

const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const icon = document.querySelector('.icon')
const select = document.querySelector('.select')
const selected = document.querySelector('.selected')

menu.classList.toggle('close')

select.addEventListener('click', () => {
    // select.classList.add('.icon-rotate')
    menu.classList.toggle('close')
    icon.classList.toggle('icon-rotate')
})
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText
        menu.classList.toggle('close')
        icon.classList.toggle('icon-rotate')
    })
});
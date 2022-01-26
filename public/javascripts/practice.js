const display = document.querySelector('.content-display')
const input = document.querySelector('.content-input')
const timer = document.querySelector('.timer')
const displaySpeed = document.querySelector('.speed')
const car = document.querySelector('.car')
const form = document.querySelector('.invisible')
const inputSpeed = document.querySelector('.invisibleInput')
let isPractice = false;
let stopPractice = false;
let time = 0;
let timeLimit = 180;
let charCount = 0;
let speed = 0;
let indexPosition = 0;
let inputPosition = 0;

$(document).ready(function () {
    $('.content-input').bind('copy paste', function (e) {
        e.preventDefault();
    });
});

input.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    if (key == 8) {
        let allSpan = document.querySelectorAll('span')
        allSpan.forEach((span) => {
            span.classList.remove('cursor')
        })
    }
};
input.addEventListener('input', startPracticing)

renderTxt();

function renderTxt() {
    let content = display.innerText;
    display.innerHTML = ''
    content.split("").forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        display.appendChild(charSpan)
    })
    input.value = null;
}

function startPracticing() {
    let inputStart = input.value.split('')
    let spaceStart = input.value
    if (spaceStart == ' ' && !isPractice) {
        isPractice = true
        input.value = ''
        setTimer()
    } else if (isPractice) {
        chechInput()
    } else {
        isPractice = false;
        input.value = ''
        time = 0
    }
}

function setTimer() {
    time = 0
    timeLimit = 180
    let x = setInterval(() => {
        time += 1
        timeLimit -= 1
        let minute = Math.floor(timeLimit / 60)
        let second = timeLimit % 60
        if (second < 10) {
            timer.innerText = minute + ' : 0' + second;
        } else {
            timer.innerText = minute + ' : ' + second;
        }
        if (timeLimit == 0 || stopPractice) {
            clearInterval(x)
            clearTimeout(y)
            isPractice = false;
            stopPractice = false;
            checkSpeed()
        }
    }, 1000)
    let y = setTimeout(() => {
        input.disabled = true;
    }, 180000)
}

function chechInput() {
    let allSpan = document.querySelectorAll('span')
    let inputValue = input.value.split('')
    let correct = true;
    charCount = allSpan.length
    indexPosition = Math.round((540 / allSpan.length) * 1000) / 1000
    let correctChar = document.querySelectorAll('.correct')
    correctCharIndex = correctChar.length + 1
    correctChar.forEach((char) => {
        char.classList.remove('cursor')
        inputPosition += indexPosition;
        car.style.marginLeft = `${inputPosition}px`;
    })
    inputPosition = 0;
    allSpan.forEach(function(span, index) {
        if (inputValue[index] == null) {
            span.classList.remove('correct')
            span.classList.remove('incorrect')
            correct = false;
        } else if (inputValue[index] === span.innerText && correct) {
            span.classList.add('correct')
            span.classList.remove('incorrect')
            input.removeAttribute('maxlength')
            if (!allSpan[index + 1]) {
                let me = 'josh'
            } else {
                allSpan[index + 1].classList.add('cursor')
            }
            span.classList.remove('cursor')
        } else {
            if (correct) input.setAttribute('maxlength', index + 10)
            span.classList.remove('correct')
            span.classList.remove('cursor')
            span.classList.add('incorrect')
            span.classList.remove('cursor')
            correct = false;
        }
    })
    if (correct) {
        input.disabled = true;
        stopPractice = true;
        input.value = time + 's'
    }
}

function checkSpeed() {
    speed = Math.floor((charCount / 5) / (time / 60));

    inputSpeed.value = speed;
    form.submit()
}

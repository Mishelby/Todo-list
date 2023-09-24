'use strict'

import {
    CreateEvent
}
    from "./modules/createEvent.js";

// Height of left block
const mainElement = document.querySelector('body')
const mainElementHeight = mainElement.clientHeight;
const leftBlock = document.querySelector('.header__left')
leftBlock.style.height = mainElementHeight + 'px'

// buttons to add event time
const startEvent = document.querySelector('.start')
const endEvent = document.querySelector('.end')

// Button for add event 
const addEvent = document.querySelector('.slider__button-add')

const addWindowsOfEvents = document.querySelectorAll('.calendar-main__box-item')

const eventHidden = document.querySelector('.event')


addEvent.addEventListener('click', function (e) {
    console.log(startEvent.value);
    console.log(endEvent.value);
})

// All buttons menu and elements event windows
const allSectionMenu = document.querySelectorAll('.section')
const allButtonsMenu = document.querySelectorAll('.left-box__link')

const boxItemDay = document.querySelectorAll('.box-item__day')
const boxItem = document.querySelectorAll('.box-item')

let count = 31

let date = new Date().toLocaleString()
let currentDate = date.substring(0, 10)

const twentyMonth = [
    {
        month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        days: ''
    },

]

const hiddenWindows = (windows) => {
    windows.forEach((value, index) => {
        if (index > 0) {
            value.style.display = 'none'
        }
    });
}

hiddenWindows(allSectionMenu)

const addActiveClass = (btn, e) => {

    btn.forEach(value => {
        value.classList.remove('active')
    });
    e.target.classList.add('active')
}

const addDayForBox = (numbers, arrayOfMonths) => {

    for (let i = 0; i < numbers.length; i++) {
        const currentDays = arrayOfMonths[i].month

        if (currentDays.month != undefined) {
            currentDays.forEach(value => {
                if (value == 2) {
                    currentDays.days = 28
                } else {
                    if (value % 2 == 0) {
                        currentDays.days = 30
                    }
                    else {
                        currentDays.days = 31
                    }
                }
            });
        } else {
            return currentDays.month
        }
    }
}
addDayForBox(boxItemDay, twentyMonth)

function addDay(count, windows) {
    if (count !== 0) {
        windows.forEach(value => {
            count--
            value.textContent = count
        });
    }
}
addDay(count, boxItemDay)
allButtonsMenu.forEach(value => {
    value.addEventListener('click', function (e) {
        let currentData = e.target.getAttribute('data-btn')
        addActiveClass(allButtonsMenu, e)
        allSectionMenu.forEach(value => {
            value.style.display = 'none'
        });

        document.querySelector(`.section[data-section="${currentData}"]`).style.display = 'block'
    })
});


const showWindow = (window) => {
    window.classList.toggle('hidden')
}

addWindowsOfEvents.forEach(value => {
    value.addEventListener('click', function (e) {
        if (e.target == value) {
            const parentNode = e.target.closest('.box-item')
        }
        if (value.dataset != 'active') {
            value.setAttribute('data-status', value.textContent)
        }
        showWindow(eventHidden)
    })
});

eventHidden.addEventListener('click', function (e) {
    if (e.target == eventHidden) {
        showWindow(eventHidden)
    }
})
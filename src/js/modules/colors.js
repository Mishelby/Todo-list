'use strict'

import {
    CreateEvent
}
    from "./createEvent.js";


const allBlockOfColors = document.querySelectorAll('.event__color-item')
const addButton = document.querySelector('.event__add')
const inputText = document.querySelector('.event__text-input')

const colors = ['#8ecae6', '#fb8500', '#bde0fe', '#264653', '#e9c46a', '#780000', '#edafb8', '#e85d04', '#a7c957', '#9d0208']

const userEvents = [

]

function addColors(array, boxes) {
    for (let i = 0; i < array.length; i++) {
        const currentWindow = boxes[i]
        currentWindow.style.backgroundColor = array[i]
    }
}

addColors(colors, allBlockOfColors)

allBlockOfColors.forEach(value => {
    value.addEventListener('click', function (e) {

    })
});

const addEventText = (obj, inputText) => {
    obj.text = inputText.value
}


addButton.addEventListener('click', function (e) {

    const userEvent = {
        id: new Date().getTime(),
        text: '',
        time: new Date().toLocaleString(),
    }

    addEventText(userEvent, inputText)

    userEvents.push(userEvent)

    new CreateEvent(
        userEvent.text,
        userEvent.time,
        'red',
        '.calendar-main__box-item'
    ).addEvent()
})
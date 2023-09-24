'use strict'

class CreateEvent {
    constructor(text, data, color, parent) {
        this.text = text
        this.data = data
        this.color = color
        this.parent = parent
    }

    addEvent() {
        document.querySelector(this.parent).insertAdjacentHTML(
            'beforeend',

            `<div class="create-event">
                <div class="create-event__box">${this.text}</div>
                <div class="create-event__data">${this.data}</div>
            </div>
            `
        )
    }
}


export {
    CreateEvent
}
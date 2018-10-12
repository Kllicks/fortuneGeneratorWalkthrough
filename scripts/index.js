// console.log(`this works`);
// don't use ID's because they're error prone
// Classes are for CSS Styling
// "data attributes" are for JS
    // they always start with "data-"
    // data attributes are good because if someone is changing the CSS classes it wont affect your JS
    // classes describe the location, data attributes describe the action

// 1. make some code run when i click the button
// const triggerElement = document.querySelector(`[data-trigger]`);
const outputElement = document.querySelector('[data-output]');
// const imageElement = document.querySelector('[data-image]');

const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abor, Retry, Ignore?",
    "About time I got out of that cookie.",
    "Your resemblance to a muppet will prevent the world from taking you seriously", 
    "You will be hungry again in one hour."
];

let index = 0;

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens

// triggerElement.addEventListener(`click`, function () {
//     console.log(`fortune`);
//     // const newFortune = fortunes.pop();
//     const newFortune = fortunes[index];
//     // const newFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
//     outputElement.textContent = newFortune;
//     index++;
//     if (index > (fortunes.length - 1)){
//         index = 0;
//     }
    
// });

// -----------------------------------------------------------
// The following is from chris lecture.
// This is if there is no html button or container available

function createFortuneButton() {
    const theButton = document.createElement('button');
    theButton.textContent = `click here for a fortune`;
    theButton.setAttribute(`data-trigger`, ``);

    theButton.addEventListener(`click`, function () {
        const newFortune = fortunes[index];
        outputElement.textContent = newFortune;
        index++;
        if (index > (fortunes.length - 1)){
            index = 0;
        }
    });

    return theButton;
}

function createButtonContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    // const theButton = createFortuneButton();
    // buttonContainer.appendChild(theButton);
    buttonContainer.appendChild(createFortuneButton());

    return buttonContainer;
}

document.body.appendChild(createButtonContainer());
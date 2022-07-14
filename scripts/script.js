// Declaring variables and the game inventory
const startButtonElement = document.getElementById('start-button')
const storyTextElement = document.getElementById('story-text')
const choices = document.getElementById('choices')
let inventory = {}

// Function for starting the game, will run when clicking the start button
// Hides the start button, shows the first story text and and sets the
// inventory to empty
const startGame = () => {
    inventory = {}
    startButtonElement.classList.add('hidden')
    showText(1)
}

// Function to display the choices, will render some choices conditionally
// depending on if you have the item to unlock the choice
const displayChoice = (choice) => {
    return choice.requiredItem == null || choice.requiredItem(inventory)
}

// Function to make the choices
const makeChoice = (choice) => {
    // Saves the id for the next text to be displayed in a variable
    const nextStoryTextId = choice.nextText

    // If the ID passed into prev variable is -1 the game is reset
    if (nextStoryTextId === -1) {
        return startGame()
    }

    // Allows items to be saved in your inventory
    inventory = Object.assign(inventory, choice.setInventory)

    // Calls the function to show the next text with the id saved
    // in variable at the start of this function
    showText(nextStoryTextId)
}

// Function to show the next story text
const showText = (id) => {
    // Uses the id passed in to find the text required and
    // saves it to a variable
    const currentText = storyPath.find(storyText => storyText.id === id)

    // Displays the text
    storyTextElement.innerText = currentText.text

    // While there are children of the choices element, remove them
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild)
    }

    // Displays the choices for each of the choices of the current story
    // text that is displayed. Adds buttons for each of them with the class 
    // of choice-button, adds a click event listener and passes in the
    // makeChoice function to it, and appends it as a child to the choice element
    currentText.choices.forEach(choice => {
        if (displayChoice(choice)) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('choice-button')
            button.addEventListener('click', () => makeChoice(choice))
            choices.appendChild(button)
        }
    })
}

// Adds event listener to show intiial story text when clicking start button
startButtonElement.addEventListener('click', startGame)
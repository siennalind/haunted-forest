const storyPath = [
    {
        id: 1,
        text: "Your car breaks down in the middle of a dark forest, what do you do?",
        choices: [
            { text: "Get your flashlight",
             setInventory: { flashlight: true },
             nextText: 2 },
            { text: "Walk into the forest",
             nextText: 3 },
            { text: "Lock your doors",
             nextText: 4 },
            { text: "Go to sleep",
             nextText: 4 }
        ]
    },
    {
        id: 2,
        text: "You open the glovebox and pick up your flashlight.",
        choices: [
            { text: "Check the batteries",
                nextText: 3 },
            { text: "Get out of the car",
        nextText: 5 },
            { text: "Search your car",
            nextText: 5 }
        ]
    },
    {
        id: 3,
        text: "You walk into the dark forest with no light to guide you",
        choices: [
            { text: "Follow the path",
            nextText: 5 },
            { text: "Go left into the trees",
            nextText: 5 },
            { text: "Go right towards the field",
            nextText: 5 },
            { text: "Light your flashlight",
                requiredItem: (currentItems) => currentItems.flashlight,
                nextText: 5 }
        ]
    },
    {
        id: 4,
        text: "A pale hand knocking on your window startles you",
        choices: [
            { text: "Keep your window up & look out",
            nextText: 5 },
            { text: "Roll down your window slightly",
            nextText: 5 }
        ]
    },
    {
        id: 5,
        text: "Oops, there is no more yet! This is a work in progress, more choices will be added with time so please come back later!",
        choices: [
            { text: "Another try?", 
            nextText: -1 }
        ]
    }
]

/*
id: number,
text: "string",
choices: [
    { text: "string",
    nextText: number }
]
*/
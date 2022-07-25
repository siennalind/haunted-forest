const storyPath = [
    {
        id: 1,
        text: "You're driving on a narrow road through the forest that should've been a shortcut, but there's no end to it in sight and you don't know where you are. You hear a loud crack of thunder as lightning illuminates the road. In the brief flash of light you see a figure in the road.",
        choices: [
            { text: "Swerve to avoid it",
             setInventory: { car: false },
             nextText: 2 },
            { text: "Hit the breaks to stop",
             setInventory: { car: true },
             nextText: 3 }
        ]
    },
    {
        id: 2,
        text: "You swerve to avoid the thing in the road but didn't see the tree stump that was by the side and hit that instead. Sitting in surprise for a moment you think about what to do next.",
        choices: [
            { text: "Get out to check what was in the road",
                nextText: 4 },
            { text: "Get out to check the damage to your car",
                nextText: 4 },
            { text: "Stay in the car and try to start it again",
            nextText: 5 }
        ]
    },
    {
        id: 3,
        text: "You hit the breaks to stop your car before the creature. You can see a flicker of it in your headlights as it runs away into the forest. Luckily there's no one else on this road.",
        choices: [
            { text: "Ignore the creature and continue",
            nextText: 5 },
            { text: "Pull in at the side of the road to explore",
            nextText: 5 },
            { text: "Get out of the car",
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
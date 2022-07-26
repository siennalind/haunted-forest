const storyPath = [
    {
        id: 1,
        text: "You're driving on a narrow road through the forest that should've been a shortcut, but there's no end to it in sight and you don't know where you are. You hear a loud crack of thunder as lightning illuminates the road. In the brief flash of light you see a figure in the road.",
        choices: [
            { 
                text: "Swerve to avoid it",
                setInventory: { car: false },
                nextText: 2 },
            { 
                text: "Hit the breaks to stop",
                setInventory: { car: true },
                nextText: 3 }
        ]
    },
    {
        id: 2,
        text: "You swerve to avoid the thing in the road but didn't see the tree stump that was by the side and hit that instead. Sitting in surprise for a moment you think about what to do next.",
        choices: [
            {
                text: "Get out to check what was in the road",
                setInventory: { flashlight: true },
                nextText: 4 },
            {
                text: "Get out to check the damage to your car",
                setInventory: { flashlight: true },
                nextText: 4 },
            {
                text: "Stay in the car and try to start it again",
                nextText: 5 }
        ]
    },
    {
        id: 3,
        text: "You hit the breaks to stop your car before the creature. You can see a flicker of it in your headlights as it runs away into the forest. Luckily there's no one else on this road.",
        choices: [
            {
                text: "Ignore the creature and continue",
                nextText: 5 },
            {
                text: "Pull in at the side of the road to explore",
                setInventory: { flashlight: true },
                nextText: 5 },
            {
                text: "Get out of the car",
                nextText: 5 }
        ]
    },
    {
        id: 4,
        text: "You grab your flashlight from the glovebox before getting out of your car. You check the road next to you for the animal but there seems to be no trace of it. Turning to your car you inspect the damage, it looks like the tree stump won and you're stuck without a car now.",
        choices: [
            {
                text: "Check the boot for anything useful",
                nextText: 10 },
            {
                text: "Follow the road ahead",
                nextText: 10 },
            {
                text: "Backtrack along the road",
                nextText: 10 },
            {
                text: "Walk into the forest",
                nextText: 10
            }
        ]
    },
    {
        id: 5,
        text: "As you try to start the car again the engine sputters and gives out. No chance of it working again. As you consider your options there's a knock on your window.",
        choices: [
            {
                text: "Look through the window to see who or what is there", 
                nextText: 10 },
            {
                text: "Roll down your window",
                nextText: 10 },
            {
                text: "Sit very still and hope they don't see you",
                nextText: 10 },
        ]
    },
    {
        id: 10,
        text: "Unfortunately there is no more right now but please check back soon! The story receives roughly weekly updates until it is finished.",
        choices: [
            {
                text: "Another try?",
                nextText: -1
            }
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
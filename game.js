const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(0)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 0,
        text: '',
        options: [
            {
                text: 'Ignite a sunken flame...',
                nextText: 1,
            }
        ]
    },    {
        id: 1,
        text: 'Drip... drip... drip... You awake blearily, a groan escaping your lips involuntarily as your eyes try to focus in the dim light. The rough rock floor beneath your cheek is uneven, pocketed with water erosion and a creeping dull green moss. The source of the flickering light seems to be a slight depression in the floor, ringed by moss hungrily soaking up the feeble light spilling over the shallow stone lip.',
        options: [
            {
                text: 'Get to your feet.',
                nextText: 2,
            }
        ]
    },
    {
        id: 2,
        text: 'Gingerly rising to your feet, you check yourself for any outstanding injuries. Content that, while certainly bruised and shaken, you are none the worse for wear, you peer into the hollow from which the light is emanating. A pitiful flame smolders amongst a handful of damp kindling, hardly enough to provide any warmth, but sufficient to illuminate your view for several yards around you.',
        options: [
            {
                text: 'Look around.',
                nextText: 3,
            }
        ]
    },
    {
        id: 3,
        text: 'The cavern you find yourself in provides little in the way of answers to your current predicament. The damp stone ceiling passes little more than a foot above your head, glistening slightly as a few solitary drops form and fall to the earthen floor below. Moss-covered walls come together to make passageways that stretch into darkness on both your left and right, the dim light of the sunken flame not enough to penetrate the cave’s depths.',
        options: [
            {
                text: 'Move left.',
                nextText: 4,
            },
            {
                text: 'Move right.',
                nextText: 20,
            },
            {
                text: 'Reach for the fire.',
                nextText: 6,
            }
        ]
    },
    {
        id: 4,
        text: 'As you make your way down the left-hand path, you reach out to the wall to steady and guide yourself. Your fingers run along more of the same damp moss from the clearing, glistening slightly as the fire light recedes behind you. Now completely enveloped in darkness, you stumble forward slightly further before your hand bumps into something protruding from the wall.',
        options: [
            {
                text: 'Investigate.',
                nextText: 5,
            },
            {
                text: 'Move on.',
                nextText: 20,
            },
        ]
    },
    {
        id: 5,
        text: 'As you stop to investigate the obtrusion, you realize to your surprise that your eyes have begun to adjust to your dark surroundings. The moss that has been your faithful guide up until this point, upon closer inspection, actually seems to be creating a faint phosphorescent glow in reaction to your presence. Taking advantage of this newfound light source, slight though it may be, you examine your discovery: jutting from a seam in the rock wall of the tunnel is a battered sword, the exposed segment of its blade rusted, plunged into the damp rockface, its hilt frayed and torn with moss slowly climbing to its pommel.',
        options: [
            {
                text: 'Take the sword.',
                nextText: 7,
            },
            {
                text: 'Move on.',
                nextText: 20,
            },
        ]
    },
    {
        id: 6,
        text: "Regardless which way you turn, you won't be making much progress if you cannot see your hand before your face. Even the smallest of flames will provide a massive boon in the shadows of this unknown place. Kneeling at the edge of the stone basin, you reach down to pluck a burning limb to carry with you. Too late you realize the constant water droplets from the ceiling above have formed a slick film around the depression, and you slide ever so slightly forward, your outstretched arm jolting forward. Knocked loose by your unsteady hand, the rotten kindling stifles what little light had struggled to cling to the water-logged bark. With a last gasp, it fades as the darkness envelops you. It was a miracle it had burned at all, and with horror you realize how right you were, how far a little light goes in this unforgiving blackness, and how much worse it is than you could possibly have imagined without it.",
        options: [
            {
                text: 'Somewhere in a dark, damp cavern, a sunken flame flickers out.',
                nextText: -1,
            }
        ]
    },
    {
        id: 7,
        text: "Grasping the aged hilt in your palm, you begin to pry loose the blade from its earthen sheath. “Skrreeeeeeecchhhh...” The rusted metal groans in protest and scrapes along the stone encasing it, the hairs on the back of your neck standing on end at the sound. The blade shudders it’s way out, inch by agonizing inch, then suddenly snags firmly, resisting your efforts to ease it from its prison.",
        options: [
            {
                text: 'Pull harder',
                nextText: 8,
            },
            {
                text: 'Move on.',
                nextText: 20,
            },
        ]
    },
    {
        id: 8,
        text: "Determined to free your prize, you grasp the hilt again with both hands and heave, every muscle in your arms straining against the cavern wall that seems to grasp the blade even tighter between cracked earthen teeth. Then with a sudden crunch, the blade bursts free from the jagged stone fissure, so forcefully that your momentum carries you back into the opposite cavern wall. You barely have a moment to inspect your trophy before you feel the wall behind your back shudder, what you could swear sounds like a sigh escapes from the now vacant crevice, and the floor gives way below you, sending you plummeting into darkness, the roof caving in above you as you fall.",
        options: [
            {
                text: 'Try to control your fall.',
                nextText: 9,
            }
        ]
    },
    {
        id: 9,
        text: "Tumbling head over foot in the pitch blackness, assaulted by falling stone and earth on all sides, you quickly lose any sense of direction you had briefly gained in the halls above. With a sudden CRUNCH you feel the side of your head collide with solid ground, and then nothing at all.",
        options: [
            {
                text: 'Wake up.',
                nextText: 10,
            }
        ]
    },
    {
        id: 10,
        text: "Gradually, laboriously, your eyelids flicker open. As you try to raise your head, you feel the congealed mess of blood, now dried, crack and splinter from the side of your temple where you collided with the floor below you. It's impossible to gauge exactly how much time has elapsed since you lost consciousness, but based on the dried blood, you've been lying prone for a considerable length of time. The depth of the blackness surrounding you is suffocating.",
        options: [
            {
                text: "Feel your surroundings.",
                nextText: 11,
            },
            {
                text: "Walk into the dark.",
                nextText: 13,
            }
        ]
    },
    {
        id: 11,
        text: "Stretching your hands out into the darkness around you, you tentatively feel for any clue to your surroundings. On all sides, your arm swings out unobstructed, no walls of any kind within range. Wherever you've fallen to, it seems to be a larger space than the tunnels up above. Brushing your palms against the earthen floor beneath you, you notice it feels somehow smoother than before, though littered with debris that must have accompanied you on your descent. As you spread your arms out further you find more of this scattered rubble, and then your fingers collide with something distinct.",
        options: [
            {
                text: "Investigate.",
                setState: { sword: true },
                nextText: 12,
            },
            {
                text: "Walk into the dark.",
                nextText: 13,
            }
        ]
    },
    {
        id: 12,
        text: "Grasping the object with your outstretched fist, you feel a familiar heft lift free from the floor with a slight sccrrraaape: the battered sword, architect of your current misfortune. Bringing it in closer to your chest, you run the fingers of your free hand down the length of the blade. It is rusted, chipped and cracked in places, and damp where moss has begun to creep up from the weathered hilt, but otherwise intact enough to still make a serviceable weapon. Brandishing it at your side, you stand up a little straighter, and gaze out into the inky blackness surrounding you.",
        options: [
            {
                text: "Walk into the dark.",
                nextText: 13,
            },
            {
                text: "Swing the sword.",
                requiredState: (currentState) => currentState.sword,
                nextText: 14,
            },
            {
                text: "Throw the sword.",
                requiredState: (currentState) => currentState.sword,
                setState: { sword: false },
                nextText: 15,
            }
        ]
    },
    {
        id: 13,
        text: "Stepping boldly out into the impenetrable gloom, you hear the soft crunch of your boots on the earthen floor, quietly ringing out and fading into the depths. Crrrncchh crrnnncchh crrnncchh… Then suddenly you're falling, your stomach lurching as your foot falls in empty space and your weight topples after it. There's a SPLAASSSHHHH and your thoughts are shattered by an all-encompassing cold, frigid in a way unlike any chill you've felt before. Like a thousand piercing blades, the unnatural algor carves through your flesh and bores into your bones, seeming to rend your very essence in twain. As your eyes grow heavy and close for the final time, you could almost swear the glacial liquid itself is sentient, an immense, unfathomable presence closing in around you...",
        options: [
            {
                text: 'Somewhere in a dark, damp cavern, a sunken flame flickers out.',
                nextText: -1,
            }
        ]
    },
    {
        id: 14,
        text: "Preferring caution to the black promise of the unknown, you swing your newfound weapon before you. CLAAANNNNGGGGG!!! You startle backwards as the blade crashes into a rock wall just within your reach, the sharp peal of metal against stone cutting through the silence like a knife. As the unholy bell continues to ring in your eardrums, you notice the sparks from where the blade struck seem to linger unnaturally in the air, their faint illumination highlighting two paths before you: an enormous cavern surrounding a jet black lake or a dark crevice in the earthen wall, just wide enough to slide through sideways.",
        options: [
            {
                text: 'Approach the lake.',
                nextText: 17,
            },
            {
                text: 'Slide into the crevice.',
                nextText: 18,
            }
        ]
    },
    {
        id: 15,
        text: "",
        options: [
            {
                text: '',
                nextText: 13,
            },
            {
                text: '',
                nextText: 16,
            }
        ]
    },
    {
        id: 16,
        text: "",
        options: [
            {
                text: 'Somewhere in a dark, damp cavern, a sunken flame flickers out.',
                nextText: -1,
            }
        ]
    },
]

startGame()
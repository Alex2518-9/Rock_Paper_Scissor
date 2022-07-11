export const GameRules = [
    {
        value: "scissors",
        beats: ["paper", "lizard"],
    },
    {
        value: "paper",
        beats: ["rock", "spock"],
    },
    {
        value: "rock",
        beats: ["scissors", "lizard"],
    },
    {
        value: "spock",
        beats: ["scissors", "rock"],
    },
    {
        value: "lizard",
        beats: ["spock", "paper"],
    },
];
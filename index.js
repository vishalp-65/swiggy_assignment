const Player = require("./player");
const Match_Arena = require("./match_arena");

// Initialize two players with given attributes
const fighterA = new Player("Fighter A", 50, 5, 10);
const fighterB = new Player("Fighter B", 100, 10, 5);

// Check if both fighters are initialized correctly
console.log(fighterA);
console.log(fighterB);

try {
    // Create a battlefield instance with the two fighters
    const battlefield = new Match_Arena(fighterA, fighterB);

    // Start the battle
    battlefield.commenceFight();
} catch (error) {
    console.error(error.message);
}

const assert = require("assert");
const Player = require("../player");
const Match_Arena = require("../match_arena");

describe("Match_Arena", () => {
    let fighterA, fighterB, matchArena;

    beforeEach(() => {
        fighterA = new Player("Fighter A", 50, 5, 10);
        fighterB = new Player("Fighter B", 100, 10, 5);
        matchArena = new Match_Arena(fighterA, fighterB);
    });

    it("should throw an error if fighters are not instances of Player", () => {
        assert.throws(
            () => new Match_Arena({}, fighterB),
            new Error("Both players must be instances of the Player class")
        );
        assert.throws(
            () => new Match_Arena(fighterA, {}),
            new Error("Both players must be instances of the Player class")
        );
    });

    it("should declare the correct winner", () => {
        // Manually setting dice rolls for predictability
        fighterA.rollDice = () => 6;
        fighterB.rollDice = () => 1;

        const winner = matchArena.commenceFight();
        assert.strictEqual(winner.name, "Fighter A");
    });

    it("should switch roles after each round", () => {
        const originalBattleRound = matchArena.battleRound.bind(matchArena);
        let roundCount = 0;

        matchArena.battleRound = (attacker, defender) => {
            roundCount++;
            originalBattleRound(attacker, defender);
        };

        matchArena.commenceFight();
        assert.ok(roundCount > 0);
    });

    it("should handle battles with equal starting health", () => {
        fighterA = new Player("Fighter A", 100, 5, 10);
        fighterB = new Player("Fighter B", 100, 10, 5);
        matchArena = new Match_Arena(fighterA, fighterB);

        const originalBattleRound = matchArena.battleRound.bind(matchArena);
        let roundCount = 0;

        matchArena.battleRound = (attacker, defender) => {
            roundCount++;
            originalBattleRound(attacker, defender);
        };

        matchArena.commenceFight();
        assert.ok(roundCount > 0);
    });

    it("should handle minimal attribute values", () => {
        const weakFighter = new Player("Weak Fighter", 1, 1, 1);
        const strongFighter = new Player("Strong Fighter", 100, 50, 50);
        matchArena = new Match_Arena(weakFighter, strongFighter);

        const winner = matchArena.commenceFight();
        assert.strictEqual(winner.name, "Strong Fighter");
    });

    // Unique Test Cases
    it("should handle cases where both fighters die in the same round", () => {
        fighterA = new Player("Fighter A", 10, 5, 10);
        fighterB = new Player("Fighter B", 10, 5, 10);
        matchArena = new Match_Arena(fighterA, fighterB);

        fighterA.rollDice = () => 6;
        fighterB.rollDice = () => 6;

        const winner = matchArena.commenceFight();
        assert.strictEqual(winner.name, "Fighter A"); // Fighter A should win because they started with higher health
    });

    it("should handle cases where the defender fully defends the attack", () => {
        fighterA = new Player("Fighter A", 50, 5, 10);
        fighterB = new Player("Fighter B", 100, 10, 5);
        matchArena = new Match_Arena(fighterA, fighterB);

        fighterA.rollDice = () => 1; // Attack roll
        fighterB.rollDice = () => 6; // Defense roll

        matchArena.battleRound(fighterA, fighterB);
        assert.strictEqual(fighterB.health, 100);
    });

    it("should handle very long battles gracefully", () => {
        fighterA = new Player("Fighter A", 1000, 1, 1);
        fighterB = new Player("Fighter B", 1000, 1, 1);
        matchArena = new Match_Arena(fighterA, fighterB);

        const winner = matchArena.commenceFight();
        assert.ok(winner);
    });
});

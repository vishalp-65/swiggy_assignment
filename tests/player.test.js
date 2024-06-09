const assert = require("assert");
const Player = require("../player");

describe("Player", () => {
    it("should initialize Player attributes correctly", () => {
        const player = new Player("Test", 100, 10, 15);
        assert.strictEqual(player.name, "Test");
        assert.strictEqual(player.health, 100);
        assert.strictEqual(player.strength, 10);
        assert.strictEqual(player.attack, 15);
    });

    it("should throw an error for invalid Player attributes", () => {
        assert.throws(
            () => new Player("", 100, 10, 15),
            /Name must be a non-empty string/
        );
        assert.throws(
            () => new Player("Test", -100, 10, 15),
            /Health must be a positive integer/
        );
        assert.throws(
            () => new Player("Test", 100, -10, 15),
            /Strength must be a positive integer/
        );
        assert.throws(
            () => new Player("Test", 100, 10, -15),
            /Attack must be a positive integer/
        );
    });

    it("should check if a Player is alive", () => {
        const player = new Player("Test", 100, 10, 15);
        assert.strictEqual(player.isAlive(), true);
        player.applyDamage(100);
        assert.strictEqual(player.isAlive(), false);
    });

    it("should apply damage correctly", () => {
        const player = new Player("Test", 100, 10, 15);
        player.applyDamage(30);
        assert.strictEqual(player.health, 70);
    });

    it("should throw an error for invalid damage value", () => {
        const player = new Player("Test", 100, 10, 15);
        assert.throws(
            () => player.applyDamage(-30),
            /Damage must be a non-negative integer/
        );
    });

    it("should roll a die within range", () => {
        const player = new Player("Test", 100, 10, 15);
        const roll = player.rollDice();
        assert.ok(roll >= 1 && roll <= 6);
    });

    // Unique Test Cases
    it("should handle maximum possible damage correctly", () => {
        const player = new Player("Test", 100, 10, 15);
        player.applyDamage(1000);
        assert.strictEqual(player.health, 0);
    });

    it("should not allow health to drop below zero", () => {
        const player = new Player("Test", 100, 10, 15);
        player.applyDamage(200);
        assert.strictEqual(player.health, 0);
    });

    it("should handle edge case where health is 1", () => {
        const player = new Player("Test", 1, 10, 15);
        player.applyDamage(1);
        assert.strictEqual(player.health, 0);
    });
});

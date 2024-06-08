class Player {
    /**
     * Constructs a new player instance.
     * @param {string} name - The name of the character.
     * @param {number} health - The health points of the character.
     * @param {number} strength - The strength attribute of the character.
     * @param {number} attack - The attack attribute of the character.
     */

    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    /**
     * Checks if the player is alive.
     * @returns {boolean} - True if the player's health is greater than 0, false otherwise.
     */
    isAlive() {
        return this.health > 0;
    }

    /**
     * Reduces the player's health by the specified damage amount.
     * @param {number} damage - The amount of damage to apply.
     */
    applyDamge(damage) {
        this.health = Math.max(this.health - damage, 0);
    }

    /**
     * Rolls a six-sided die and returns the result.
     * @returns {number} - A random integer between 1 and 6.
     */
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

module.exports = Player;

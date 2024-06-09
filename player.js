class Player {
    /**
     * Constructs a new player instance.
     * @param {string} name - The name of the character.
     * @param {number} health - The health points of the character.
     * @param {number} strength - The strength attribute of the character.
     * @param {number} attack - The attack attribute of the character.
     */

    constructor(name, health, strength, attack) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Name must be a non-empty string");
        }
        if (!Number.isInteger(health) || health <= 0) {
            throw new Error("Health must be a positive integer");
        }
        if (!Number.isInteger(strength) || strength <= 0) {
            throw new Error("Strength must be a positive integer");
        }
        if (!Number.isInteger(attack) || attack <= 0) {
            throw new Error("Attack must be a positive integer");
        }

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
    applyDamage(damage) {
        if (!Number.isInteger(damage) || damage < 0) {
            throw new Error("Damage must be a non-negative integer");
        }

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

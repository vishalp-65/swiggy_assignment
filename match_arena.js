const Player = require("./player");

class Match_Arena {
    /**
     * Constructs a new Battlefield instance with two players.
     * @param {Player} player1 - The first player.
     * @param {Player} player2 - The second player.
     */

    constructor(player1, player2) {
        if (!player1 || !player2) {
            throw new Error("Both players must be defined");
        }
        this.player1 = player1;
        this.player2 = player2;
    }

    /**
     * Starts the battle between the two players.
     * The battle continues until one player's health reaches zero.
     * @returns {Player} - The winner of the battle.
     */
    commenceFight() {
        let [attacker, defender] =
            this.player1.health <= this.player2.health
                ? [this.player1, this.player2]
                : [this.player2, this.player1];

        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.battleRound(attacker, defender);
            [attacker, defender] = [defender, attacker]; // swap roles after each round
        }

        const winner = this.player1.isAlive() ? this.player1 : this.player2;
        console.log(
            `The winner is ${winner.name} with ${winner.health} health remaining.`
        );
        return winner;
    }

    /**
     * Executes a single round of battle between the attacker and the defender.
     * Calculates the attack and defense values, applies damage to the defender.
     * @param {Player} attacker - The attacking player.
     * @param {Player} defender - The defending player.
     */
    battleRound(attacker, defender) {
        const attackValue = attacker.attack * attacker.rollDice();
        const defenseValue = defender.strength * defender.rollDice();
        const damage = Math.max(attackValue - defenseValue, 0);

        defender.applyDamage(damage);

        console.log(`${attacker.name} attacks with ${attackValue} damage.`);
        console.log(`${defender.name} defends with ${defenseValue} strength.`);
        console.log(
            `${defender.name} suffers ${damage} damage, health is now ${defender.health}.\n`
        );
    }
}

module.exports = Match_Arena;

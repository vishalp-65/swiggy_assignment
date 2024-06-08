const Player = require("./player");

class Match_Arena {
    /**
     * Constructs a new Battlefield instance with two fighters.
     * @param {Character} fighter1 - The first fighter.
     * @param {Character} fighter2 - The second fighter.
     */

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    /**
     * Starts the battle between the two fighters.
     * The battle continues until one fighter's health reaches zero.
     * @returns {Character} - The winner of the battle.
     */
    commenceFight() {
        let [attacker, defender] =
            this.fighter1.health <= this.fighter2.health
                ? [this.fighter1, this.fighter2]
                : [this.fighter2, this.fighter1];

        while (this.fighter1.isAlive() && this.fighter2.isAlive()) {
            this.battleRound(attacker, defender);
            [attacker, defender] = [defender, attacker]; // swap roles after each round
        }

        const winner = this.fighter1.isAlive() ? this.fighter1 : this.fighter2;
        console.log(
            `The winner is ${winner.name} with ${winner.health} health remaining.`
        );
        return winner;
    }
}

module.exports = Match_Arena;

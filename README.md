# Match Arena

This project simulates battles between players in a match arena. Players have attributes for health, strength, and attack. They take turns attacking and defending until one player's health reaches 0.

## Setup

1. Clone this repository.

2. Install dependencies: `npm install mocha` to run test cases.

## Running the Project

To run the project, you can execute the main file: `npm start`


This will run a simulated battle between two players.

## Running Tests

To run the tests, execute the following command: `npm test`


This will run the unit tests defined in the `tests` directory.

## Project Structure

- `player.js`: Defines the Player class.
- `match_arena.js`: Defines the MatchArena class.
- `tests/`: Contains unit tests for the project.
  - `match_arena.test.js`: Tests for the MatchArena class.
  - `player.test.js`: Tests for the Player class.
- `index.js`: Entry point for running the project.

# Quiz CLI

## Project Overview

Quiz CLI is an interactive command-line quiz application built with Node.js and ES modules. The project loads quiz data from a JSON file, lets users choose a category and question count, and then walks them through a multiple-choice quiz experience in the terminal.

The codebase is also structured as a learning project and demonstrates core JavaScript and Node.js concepts such as async/await, file system access, readline-based input handling, classes, array methods, destructuring, template literals, and error handling.

## Features

- Interactive terminal-based quiz flow
- Multiple quiz categories loaded from `data/questions.json`
- Category selection at runtime
- Configurable quiz length based on available questions
- Shuffled question order using the Fisher-Yates algorithm
- ANSI-colored terminal output with a welcome banner
- Progress bar and per-question progress display
- Immediate feedback for correct and incorrect answers
- Optional answer explanations after each question
- Final score summary with percentage-based feedback
- Review section for incorrectly answered questions
- Replay prompt to start another round without restarting the app

## Technologies Used

- Node.js
- Native ES modules
- Built-in Node.js modules:
  - `node:fs/promises`
  - `node:path`
  - `node:url`
  - `node:readline`
- JSON for quiz content storage
- ANSI escape codes for terminal styling

## Prerequisites

- Node.js `>=18.0.0`

## Installation

1. Clone the repository.
2. Change into the project directory.
3. Ensure your Node.js version meets the requirement in `package.json`.

Because the project does not declare external npm dependencies, no package installation step is required to run the application.

## Setup Instructions

After cloning the repository, verify Node.js is available:

```bash
node --version
```

This project does not require environment variables, database setup, or third-party services based on the repository contents.

## Running the Application

Start the quiz from the project root:

```bash
npm start
```

This runs the script defined in `package.json`:

```bash
node index.js
```

## Usage Examples

Typical application flow:

1. Launch the CLI.
2. Choose a quiz category.
3. Choose how many questions to answer.
4. Press Enter to begin.
5. Respond to each multiple-choice question by entering the option number.
6. Review your final score and any incorrect answers.
7. Choose whether to play again.

Example session:

```text
Choose a category:

  1. JavaScript Basics
  2. Node.js Fundamentals
  3. General Programming

Your choice (enter number): 1
```

```text
How many questions?

  1. All questions
  2. 3 questions
  3. 5 questions

Your choice (enter number): 2
```

```text
Your choice (enter number): 1
✓ Correct!
💡 The 'const' keyword declares a block-scoped constant that cannot be reassigned.
```

## Project Structure

```text
.
├── data/
│   └── questions.json
├── src/
│   ├── colors.js
│   ├── input.js
│   └── quiz.js
├── index.js
├── package.json
└── README.md
```

### File and Directory Details

- `index.js` - Application entry point. Loads quiz data, shows the banner, handles category and question-count selection, runs the main application loop, and manages errors.
- `src/quiz.js` - Defines the `Quiz` class, question flow, answer tracking, progress bar rendering, scoring, and final results display.
- `src/input.js` - Wraps Node.js `readline` functionality for prompts, menu selection, confirmations, and Enter-to-continue behavior.
- `src/colors.js` - Provides ANSI-based helper functions for styling terminal output without external dependencies.
- `data/questions.json` - Stores quiz categories, questions, options, correct answer indexes, and explanations.
- `.idea/` - IDE-specific project files and local editor configuration.

## Configuration Details

### Quiz Data Format

The application expects quiz content in `data/questions.json` using a category-based structure. Each category contains:

- `name` - Display name shown in the CLI
- `questions` - Array of question objects

Each question object includes:

- `question` - The question text
- `options` - List of answer choices
- `answer` - Zero-based index of the correct option
- `explanation` - Optional explanation displayed after answering

### Runtime Behavior

- Questions are loaded at startup using `fs/promises.readFile`.
- The application resolves the JSON file path relative to the current ES module using `fileURLToPath`, `dirname`, and `join`.
- Question order is randomized when a new `Quiz` instance is created.
- Available question-count choices depend on how many questions exist in the selected category.

## Scripts

Defined in `package.json`:

- `npm start` - Runs the CLI application with Node.js.
- `npm test` - Runs Node.js built-in test runner using `node --test`.

## Dependencies

This repository does not declare any external runtime or development dependencies in `package.json`.

The project relies only on built-in Node.js modules.

## Testing

A `test` script is defined:

```bash
npm test
```

However, no test files are present in the repository contents that were inspected.

## Troubleshooting

- If `npm start` fails, verify that your Node.js version is `18.0.0` or higher.
- If the quiz does not load, ensure `data/questions.json` exists and contains valid JSON.
- If terminal output looks incorrect, use a terminal that supports ANSI escape codes.
- If input appears unresponsive, make sure you are running the app in an interactive terminal session rather than a non-interactive command runner.

## Contribution Guidelines

No repository-specific contribution guide was found.

If you plan to contribute, a reasonable starting workflow based on the project structure would be:

1. Add or update quiz content in `data/questions.json`.
2. Extend CLI behavior in `index.js` or the modules under `src/`.
3. Run the application locally with `npm start`.
4. Add automated tests if test coverage is introduced.

## License

This project is licensed under the MIT License, as declared in `package.json`.

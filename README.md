# quiz-cli

A lightweight Node.js command-line quiz game for learning JavaScript, Node.js, and general programming concepts.

## Overview

`quiz-cli` is an interactive terminal-based quiz application built with native ES modules and no third-party dependencies. It loads multiple-choice questions from a local JSON file, lets users choose a category and question count, runs the quiz interactively in the terminal, and provides scoring, explanations, and a review of incorrect answers.

The project is designed as a simple educational CLI app with a clear modular structure and a focus on native Node.js functionality.

## Features

- Interactive command-line quiz flow
- Category selection before starting a quiz
- Question count selection based on available questions
- Multiple-choice questions with answer validation
- Shuffled question order using the Fisher-Yates algorithm
- Progress tracking during the quiz
- Score calculation and percentage-based results
- Performance feedback with emoji
- Explanations shown after each answer
- Review section for incorrect answers
- Replay loop for taking another quiz session
- ANSI-colored terminal output for improved readability
- No external npm dependencies

## Technologies Used

- Node.js `>=18.0.0`
- JavaScript
- ES Modules
- Built-in Node.js modules:
  - `fs/promises`
  - `url`
  - `path`
  - `readline`

## Prerequisites

Before running the application, ensure you have:

- Node.js version `18.0.0` or newer
- npm available in your environment

## Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/seemaKeshriEpam/test-app.git
cd test-app
npm install
```

> Note: No external npm dependencies were detected, so installation is minimal.

## Setup

No additional setup, build step, or transpilation is required.

The application reads quiz data from:

```text
data/questions.json
```

## Running the Application

Start the quiz with:

```bash
npm start
```

This runs:

```bash
node index.js
```

## Usage

When the application starts, it:

1. Loads questions from `data/questions.json`
2. Displays a styled banner
3. Prompts you to choose a category
4. Prompts you to choose how many questions to answer
5. Runs the quiz interactively
6. Shows your final score and results
7. Offers an option to replay

### Example flow

```text
1. Select a category
2. Select question count (All, 3, or 5 depending on availability)
3. Answer each question by choosing a numbered option
4. Review the explanation after each answer
5. See final score and incorrect answer review
6. Choose whether to play again
```

## How the Quiz Works

The main CLI flow is handled in `index.js`, while the quiz logic lives in `src/quiz.js`.

### Application flow

- Questions are loaded from the JSON data file
- A category is selected from the available categories
- A subset of questions may be selected based on user choice
- Questions are shuffled before being presented
- Each question is shown with multiple-choice options
- The user selects an answer by number
- The app validates the answer and shows:
  - whether it was correct
  - the explanation for that question
- At the end, the app shows:
  - total score
  - percentage
  - performance feedback
  - incorrect answer review
- The user can replay without restarting the program

## Question Data Format

Quiz content is stored in `data/questions.json`.

### Root structure

```json
{
  "categories": {
    "javascript": [],
    "nodejs": [],
    "general": []
  }
}
```

### Available categories

- `javascript` → `JavaScript Basics`
- `nodejs` → `Node.js Fundamentals`
- `general` → `General Programming`

### Question shape

Each question object contains:

- `question`
- `options`
- `answer` index
- `explanation`

### Observed dataset size

- 3 categories
- 5 questions per category
- 15 total questions

## Project Structure

```text
.
├── data/
│   └── questions.json
├── index.js
├── package.json
└── src/
    ├── colors.js
    ├── input.js
    └── quiz.js
```

Additional non-app files present:

- `.DS_Store`
- `.idea/*` (IDE metadata, not relevant to the app)

## Architecture and Modules

The project uses a simple modular structure with clear separation of concerns.

### `index.js`

Main application bootstrap and CLI flow.

Responsibilities:

- Loads `data/questions.json`
- Prints the banner
- Prompts for category selection
- Prompts for question count selection
- Creates and runs a `Quiz` instance
- Displays final results
- Handles replay flow
- Cleans up the readline interface
- Handles runtime errors

### `src/quiz.js`

Core quiz and game logic.

Responsibilities:

- Exports the `Quiz` class
- Shuffles questions with Fisher-Yates
- Tracks:
  - current question index
  - score
  - answer history
- Provides:
  - `currentQuestion`
  - `totalQuestions`
  - `isComplete`
  - `progress`
- Displays progress bar
- Validates answers
- Shows correctness and explanation
- Builds final results and incorrect-answer review

### `src/input.js`

Terminal input helpers built on `readline`.

Exposed helpers:

- `createInterface()` — creates the Node readline interface
- `prompt(rl, question)` — Promise wrapper around `rl.question`
- `select(rl, question, options)` — numeric selection with validation
- `confirm(rl, question)` — yes/no prompt
- `pressEnter(rl, message)` — pause/continue helper

### `src/colors.js`

ANSI styling helpers for terminal output.

Includes:

- raw escape code map
- `colorize(text, ...styles)`

Convenience methods:

- `red`
- `green`
- `yellow`
- `blue`
- `cyan`
- `magenta`
- `bold`
- `dim`
- `success`
- `error`
- `warning`
- `info`
- `highlight`

## Configuration Details

This project is intentionally minimal and does not include framework or environment-based configuration.

Configuration visible from the repository includes:

- Entry point: `index.js`
- Module system: ES Modules via `"type": "module"`
- Runtime requirement: Node.js `>=18.0.0`

## Scripts

Defined in `package.json`:

### Start the application

```bash
npm start
```

Runs:

```bash
node index.js
```

### Run tests

```bash
npm test
```

Runs:

```bash
node --test
```

## Dependencies

No external npm dependencies were detected.

The project uses only built-in Node.js modules:

- `fs/promises`
- `url`
- `path`
- `readline`

## Testing

A test script is defined in `package.json`:

```bash
npm test
```

The configured runner is:

```bash
node --test
```

No additional test files or testing details were identified in the repository analysis provided.

## Troubleshooting

### The app does not start

Make sure your Node.js version is compatible:

```bash
node --version
```

The project requires Node.js `>=18.0.0`.

### Terminal prompts do not behave as expected

This application is interactive and depends on a functioning terminal session. Run it directly in a terminal rather than in a non-interactive environment.

### Questions are not loading

The app depends on the local data file:

```text
data/questions.json
```

Ensure the file exists and remains valid JSON with the expected `categories` structure.

## Project Summary

- **Name:** `quiz-cli`
- **Type:** Node.js command-line application
- **Purpose:** educational interactive quiz game for programming and JavaScript learning
- **Architecture:** modular CLI app with separate files for flow control, quiz logic, input handling, styling, and data
- **Build step:** none
- **Frameworks:** none
- **Transpilation:** none

## License

This project is licensed under the **MIT** License.
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

Then start the application from the project root:

```bash
npm start
```

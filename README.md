# Habit Tracker JS

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![Status](https://img.shields.io/badge/Status-Completed-green)

**Habit Tracker JS is a browser-based productivity application for creating, managing, and tracking daily habits using vanilla JavaScript.**

The project focuses on practical frontend development and demonstrates how JavaScript can be used to build a complete interactive application with dynamic UI rendering, persistent client-side storage, data management, and theme customization.

## What it can do

* Create, edit, and delete habits
* Mark habits as completed or incomplete
* Calculate and display habit progress automatically
* Track the total number of habits
* Persist data using the Web Storage API
* Assign custom icons to habits
* Switch between Dark and Light themes
* Persist theme preferences
* Export habit data as a JSON backup
* Clear stored data with confirmation
* Provide a responsive interface across different screen sizes
* Support accessible form labels and keyboard focus states

## How it works

The application represents each habit as a JavaScript object and dynamically renders the habit data into the interface.

User interactions update the application state, while `localStorage` provides client-side persistence. The dashboard recalculates progress whenever habit completion changes, keeping the interface synchronized with the stored data.

```text
User Interaction
       ↓
JavaScript Logic
       ↓
Application State
       ↓
DOM Rendering
       ↓
Local Storage
```

## Project Structure

```text
habit-tracker-js/
│
├── index.html
├── setting.html
├── style.css
├── setting.css
├── light.css
│
├── src/
│   ├── habit-tracker.js
│   └── setting.js
│
├── README.md
├── LICENSE
└── .gitignore
```

The project separates application logic, settings functionality, and styling into dedicated files to keep the codebase organized and maintainable.

## Built With

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **DOM API**
* **Web Storage API**
* **JSON**

No backend or external JavaScript dependencies are required.

## Core Functionality

### Dynamic Habit Management

Habits are represented as JavaScript objects and rendered dynamically into the interface. Users can create, modify, complete, and remove habits without reloading the page.

### Progress Tracking

The application automatically calculates completion progress based on the user's current habits and updates the dashboard accordingly.

### Persistent Storage

Habit data is stored in the browser using `localStorage`, allowing users to retain their habits between page refreshes and browser sessions.

### Theme System

The application includes Dark and Light themes. The selected preference is stored locally and restored when the application is reopened.

### Data Management

The Settings page provides controls for managing application data, including:

* Exporting habit data as a JSON file
* Clearing all stored habits
* Managing appearance preferences
* Viewing project information

## Technical Concepts

This project demonstrates practical implementation of:

* JavaScript variables and constants
* Functions and modular program structure
* Arrays and objects
* Conditional logic
* Loops
* DOM manipulation
* Event handling
* Form handling and validation
* CRUD-style operations
* Local Storage
* JSON data processing
* Dynamic UI rendering
* CSS class manipulation
* Responsive design
* Client-side application architecture

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MohammadAminHasani/habit-tracker-js.git
cd habit-tracker-js
```

### 2. Open the application

Open `index.html` in a modern web browser.

Alternatively, run the project using a local development server such as VS Code Live Server.

### 3. Start tracking

Create your first habit and begin managing your daily progress.

No installation, backend, or external dependencies are required.

## Project Status

**Completed**

Habit Tracker JS started as a JavaScript learning project and evolved into a complete client-side web application.

The project was built to strengthen practical JavaScript skills while working with application state, DOM manipulation, persistent browser storage, user interactions, and frontend architecture.

## License

This project is licensed under the MIT License.

## Author

MohammadAmin

This project is licensed under the MIT License.

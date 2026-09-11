# Habit Tracker JS

A responsive habit-tracking web application built with vanilla JavaScript, designed to practice real-world application logic, DOM manipulation, data persistence, and user interaction.

## Overview

Habit Tracker JS is a lightweight productivity application that allows users to create, manage, and track daily habits through a clean and responsive web interface.

The project started as a JavaScript practice application and evolved into a complete browser-based habit tracker with persistent data, progress tracking, theme customization, and data management features.

The main goal of the project is to strengthen practical JavaScript skills while applying concepts commonly used in real-world web applications.

## Features

* Create new habits
* Edit existing habits
* Delete habits
* Mark habits as completed or incomplete
* Automatic progress calculation
* Habit count tracking
* Persistent data using Local Storage
* Custom habit icons
* Dark and Light themes
* Theme preference persistence
* Export habits as a JSON backup
* Clear all habits with confirmation
* Responsive design for different screen sizes
* Accessible form labels and keyboard focus states

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Web Storage API
* DOM API

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

## How to Run

1. Clone the repository:

```bash
git clone <https://github.com/MohammadAminHasani/habit-tracker-js>
```

2. Open `index.html` in a modern web browser.

3. Start creating and tracking your habits.

No backend or external dependencies are required.

## Core Concepts Practiced

This project demonstrates practical use of:

* Variables and constants
* Functions and program structure
* Arrays and objects
* Conditional logic
* Loops
* DOM manipulation
* Event listeners
* Form handling
* Input validation
* CRUD-style operations
* Local Storage
* JSON data handling
* Dynamic UI rendering
* CSS class manipulation
* Responsive design
* Basic application architecture

## Data Management

Habit data is stored locally in the browser using `localStorage`.

This allows habits to remain available after refreshing or reopening the application.

The Settings page also provides an option to export the stored habit data as a JSON file, making it possible to create a personal backup.

## Project Highlights

### Dynamic Habit Management

Habits are represented as JavaScript objects and rendered dynamically into the interface. Users can modify their habits without refreshing the page.

### Progress Tracking

The dashboard automatically calculates the number of completed habits and displays the current completion percentage.

### Persistent Storage

Local Storage keeps user data between browser sessions without requiring a backend database.

### Theme System

The application supports Dark and Light themes. The selected theme is stored in Local Storage and automatically restored when the application is opened again.

### Settings

The Settings page provides controls for:

* Appearance
* Habit data export
* Clearing stored habits
* Project information

## License

This project is licensed under the MIT License.

## Author

**MohammadAmin Hasani**

Full-Stack Developer in progress, focused on building practical web applications with JavaScript and Python.

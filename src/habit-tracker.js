"use strict";

// =====================
// DOM
// =====================

const elements = {
  tasksContainer: document.querySelector(".tasks"),
  addHabitButton: document.querySelector("#addHabitBtn"),
  addHabitModal: document.querySelector("#habitBlurModel"),
  addHabitForm: document.querySelector(".habitInformation"),
  habitNameInput: document.querySelector("#habitName"),
  iconSelection: document.querySelector("#iconSelection"),
  cancelButton: document.querySelector("#cancelButton"),

  progressCircle: document.querySelector(".progressCircle"),
  progressText: document.querySelector("#progressText"),
  habitCount: document.querySelector("#countHabit"),

  editHabitModal: document.querySelector("#editHabitBlur"),
  editHabitForm: document.querySelector(".editHabitInformation"),
  editHabitNameInput: document.querySelector("#editHabitName"),
  editIconSelection: document.querySelector("#editIconSelection"),
  cancelEditButton: document.querySelector("#cancelEditButton"),
};

// =====================
// State
// =====================

const habits = [];

let habitBeingEdited = null;

// =====================
// Rendering
// =====================

function renderHabit(habit) {
  const task = document.createElement("div");
  task.classList.add("task");

  const taskIcon = document.createElement("div");
  taskIcon.classList.add("taskIcon");
  taskIcon.textContent = habit.icon;

  if (habit.completed) {
    taskIcon.classList.add("checked");
  }

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("taskInfo");

  const habitName = document.createElement("span");
  habitName.classList.add("habitName");
  habitName.textContent = habit.name;

  const status = document.createElement("p");
  updateHabitStatus(status, habit.completed);

  taskInfo.append(habitName, status);

  const taskControls = document.createElement("div");
  taskControls.classList.add("taskControls");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkBox");
  checkbox.checked = habit.completed;

  checkbox.addEventListener("change", () => {
    habit.completed = checkbox.checked;

    updateHabitStatus(status, habit.completed);
    taskIcon.classList.toggle("checked", habit.completed);

    saveHabits();
    updateProgress();
  });

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const editButton = document.createElement("div");
  editButton.classList.add("edit");
  editButton.textContent = "✎";

  editButton.addEventListener("click", () => {
    habitBeingEdited = {
      habit,
      habitName,
      taskIcon,
    };

    elements.editHabitNameInput.value = habit.name;
    elements.editIconSelection.value = habit.icon;

    elements.editHabitModal.classList.add("active");
  });

  const deleteButton = document.createElement("div");
  deleteButton.classList.add("remove");
  deleteButton.textContent = "🗑";

  deleteButton.addEventListener("click", () => {
    const index = habits.findIndex(
      (storedHabit) => storedHabit.id === habit.id,
    );

    if (index === -1) return;

    habits.splice(index, 1);
    task.remove();

    saveHabits();
    updateProgress();
  });

  actions.append(editButton, deleteButton);
  taskControls.append(checkbox, actions);
  task.append(taskIcon, taskInfo, taskControls);

  elements.tasksContainer.appendChild(task);
}

function updateHabitStatus(status, completed) {
  status.textContent = completed ? "Completed" : "Not completed yet";

  status.classList.toggle("green", completed);
}

// =====================
// Habit Management
// =====================

function addHabit() {
  const name = elements.habitNameInput.value.trim();
  const icon = elements.iconSelection.value;

  if (!name || !icon) return;

  const habit = {
    id: crypto.randomUUID(),
    name,
    completed: false,
    icon,
  };

  habits.push(habit);

  saveHabits();
  renderHabit(habit);
  updateProgress();

  elements.addHabitForm.reset();
  closeAddModal();
}

function updateHabit() {
  if (!habitBeingEdited) return;

  const name = elements.editHabitNameInput.value.trim();
  const icon = elements.editIconSelection.value;

  if (!name || !icon) return;

  const { habit, habitName, taskIcon } = habitBeingEdited;

  habit.name = name;
  habit.icon = icon;

  habitName.textContent = name;
  taskIcon.textContent = icon;

  saveHabits();
  closeEditModal();
}

// =====================
// Progress
// =====================

function updateProgress() {
  const total = habits.length;

  const completed = habits.filter((habit) => habit.completed).length;

  const percentage = total ? Math.round((completed / total) * 100) : 0;

  elements.habitCount.textContent = `${total} habits being tracked`;

  elements.progressCircle.style.background = `conic-gradient(
      green ${percentage}%,
      #1b1e24 ${percentage}%
    )`;

  elements.progressText.textContent = `${completed} of ${total} completed · ${percentage}%`;
}

// =====================
// Storage
// =====================

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function loadHabits() {
  const savedHabits = localStorage.getItem("habits");

  if (!savedHabits) {
    updateProgress();
    return;
  }

  const storedHabits = JSON.parse(savedHabits);

  for (const habit of storedHabits) {
    habits.push(habit);
    renderHabit(habit);
  }

  updateProgress();
}

// =====================
// Modals
// =====================

function openAddModal() {
  elements.addHabitModal.classList.add("active");
}

function closeAddModal() {
  elements.addHabitModal.classList.remove("active");
}

function closeEditModal() {
  elements.editHabitModal.classList.remove("active");
  habitBeingEdited = null;
}

// =====================
// Events
// =====================

elements.addHabitButton.addEventListener("click", openAddModal);

elements.addHabitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addHabit();
});

elements.cancelButton.addEventListener("click", closeAddModal);

elements.cancelEditButton.addEventListener("click", closeEditModal);

elements.editHabitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateHabit();
});

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "Light") {
    document.body.classList.add("light");
  }
}

// =====================
// Start
// =====================
loadTheme();
console.log(document.body.classList.contains("light"));

loadHabits();

console.log("Theme loaded");
const themeSelect = document.querySelector("#themes")

themeSelect.addEventListener("change", () => {
  localStorage.setItem("theme", themeSelect.value);

  if (themeSelect.value === "Light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  themeSelect.value = savedTheme;
}

if (savedTheme === "Light") {
  document.body.classList.add("light");
}

const exportButton = document.querySelector("#export-btn");

exportButton.addEventListener("click", () => {
  const habits = localStorage.getItem("habits");

  if (!habits) {
    alert("There are no habits to export.");
    return;
  }

  const file = new Blob([habits], {
    type: "application/json",
  });

  const url = URL.createObjectURL(file);

  const link = document.createElement("a");
  link.href = url;
  link.download = "habit-tracker-backup.json";

  link.click();

  URL.revokeObjectURL(url);
});

const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener("click", () => {
  const confirmed = confirm(
    "Are you sure you want to delete all habits?"
  );

  if (!confirmed) return;

  localStorage.removeItem("habits");
});
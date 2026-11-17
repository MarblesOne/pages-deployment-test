document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("test-button");
  const result = document.getElementById("test-result");

  if (!button || !result) return;

  button.addEventListener("click", () => {
    result.textContent = "JavaScript loaded and the click handler works ✓";
  });
});

document.getElementById("mySubmit").onclick = function () {
  const inputElement = document.getElementById("myText");
  const radius = Number(inputElement.value);
  const resultElement = document.getElementById("myH3");

  // Reset styles and placeholder
  inputElement.style.border = "";
  inputElement.placeholder = "Enter radius";

  // Validate: Must be a positive number
  if (isNaN(radius) || radius <= 0) {
    inputElement.style.border = "2px solid red";
    inputElement.value = ""; // Clear invalid input
    inputElement.placeholder = "Radius must be a positive number!";
    resultElement.textContent = ""; // Clear previous result
    return;
  }

  // Calculate and display
  const circumference = (2 * Math.PI * radius).toFixed(2);
  resultElement.textContent = `Circumference = ${circumference} cm`;
};

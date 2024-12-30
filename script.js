const color1Picker = document.getElementById("color1-picker");
const color2Picker = document.getElementById("color2-picker");
const gradientDisplay = document.querySelector(".gradient-display");
const gradientCode = document.getElementById("gradient-code");
const copyButton = document.getElementById("copy-button");

function updateGradient() {
  const color1 = color1Picker.value;
  const color2 = color2Picker.value;
  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
  
  gradientDisplay.style.backgroundImage = gradient;
  gradientCode.value = `background-color: ${gradient};`;
}

color1Picker.addEventListener("input", updateGradient);
color2Picker.addEventListener("input", updateGradient);

copyButton.addEventListener("click", () => {
  gradientCode.select();
  document.execCommand("copy");
  alert("Gradient code copied to clipboard!");
});

// Initialize the gradient display
updateGradient();

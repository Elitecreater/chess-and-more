// Access Password Configuration
const ACCESS_CODE = "space123";

// DOM Elements
const gateScreen = document.getElementById("gate-screen");
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const gameCodeArea = document.getElementById("game-code-area");

const passwordInput = document.getElementById("password-input");
const togglePwBtn = document.getElementById("toggle-pw-btn");
const errorMessage = document.getElementById("error-message");
const loginBtn = document.getElementById("login-btn");
const backBtn = document.getElementById("back-btn");

// Game Buttons
const chessBtn = document.getElementById("chess-btn");
const chess3dBtn = document.getElementById("chess-3d-btn");
const checkersBtn = document.getElementById("checkers-btn");
const ludoBtn = document.getElementById("ludo-btn");
const catanBtn = document.getElementById("catan-btn");
const tcgcpBtn = document.getElementById("tcgcp-btn");

// Password Screen Unlock Handler
function unlockSite() {
  if (passwordInput.value === ACCESS_CODE) {
    gateScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  } else {
    errorMessage.classList.remove("hidden");
  }
}

// Toggle Password Visibility
togglePwBtn.addEventListener("click", function() {
  const isPassword = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isPassword ? "text" : "password");
  togglePwBtn.textContent = isPassword ? "🙈" : "👁️";
});

// Auth Event Listeners
loginBtn.addEventListener("click", unlockSite);
passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") unlockSite();
});

// Back Button Handler
backBtn.addEventListener("click", () => {
  gameScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  gameCodeArea.innerHTML = ""; // Clears game code when exiting
});

// --- GAME CODE LOADER ---
function loadGameCode(htmlCode) {
  homeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  gameCodeArea.innerHTML = htmlCode;
}

// 1. Chess Button
chessBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Chess Game</h2>
    <iframe 
      src="chess.html" 
      style="width: 100%; height: 650px; border: none; border-radius: 8px;">
    </iframe>
  `);
});

// 2. Chess 3D Button
chess3dBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Chess 3D Game</h2>
  `);
});

// 3. Checkers Button
checkersBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Checkers Game</h2>
  `);
});

// 4. Ludo Button
ludoBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Ludo Game</h2>
  `);
});

// 5. Catan Button
catanBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Catan Game</h2>
  `);
});

// 6. Taco Cat Goat Cheese Pizza Button
tcgcpBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Taco Cat Goat Cheese Pizza</h2>
  `);
});

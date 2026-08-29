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
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classic, Custom & Shooter 3D Chess</title>
  <script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 30px 15px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #2b1d0c;
      background-image: 
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 80%),
        repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 0, 0, 0.15) 3px, rgba(0, 0, 0, 0.15) 6px),
        linear-gradient(90deg, #3d2817 0%, #4a321a 25%, #3d2817 50%, #54391d 75%, #3d2817 100%);
      background-size: 100% 100%, 100% 100%, 400px 100%;
      color: #f3f4f6;
      min-height: 100vh;
    }
    .container {
      width: 100%;
      max-width: 1250px;
      background: rgba(31, 41, 55, 0.85);
      backdrop-filter: blur(8px);
      padding: 30px;
      border-radius: 24px;
      box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .room-setup {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      width: 100%;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
    }
    .setup-group {
      display: flex;
      gap: 10px;
      flex: 1 1 260px;
      align-items: center;
    }
    input, select {
      flex: 1;
      padding: 12px 18px;
      border: 2px solid #374151;
      background: #111827;
      color: #fff;
      border-radius: 30px;
      outline: none;
      font-size: 0.95rem;
      transition: border-color 0.2s;
    }
    input:focus, select:focus {
      border-color: #d97706;
    }
    .mode-select-box {
      width: 100%;
      background: rgba(17, 24, 39, 0.6);
      border: 1px solid #374151;
      border-radius: 16px;
      padding: 15px;
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: space-around;
      align-items: center;
    }
    .mode-select-box label {
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .status-box {
      width: 100%;
      background: #111827;
      border-left: 5px solid #d97706;
      padding: 16px;
      border-radius: 10px;
      margin-bottom: 24px;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
    }

    .game-layout {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 100px;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }
    
    .scene-3d {
      width: 480px;
      height: 480px;
      perspective: 1200px;
      margin: 10px 0;
      position: relative;
    }
    .board-3d {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      transform-style: preserve-3d;
      transform: rotateX(45deg);
      box-shadow: 0 30px 50px rgba(0, 0, 0, 0.8),
                  0 0 0 16px #271910,
                  0 0 0 22px #422a1d;
      border-radius: 4px;
    }

    .square {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      transform-style: preserve-3d;
      transition: background-color 0.25s ease, transform 0.2s ease;
      position: relative;
    }

    .light { background-color: #f0d9b5; }
    .dark { background-color: #b58863; }

    .square:hover {
      filter: brightness(1.15);
    }

    .square.selected {
      background-color: #bac859 !important;
      box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.3);
    }

    .square.in-check {
      background-color: #ef4444 !important;
      box-shadow: inset 0 0 15px rgba(255, 0, 0, 0.8);
    }

    .move-hint {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(34, 197, 94, 0.6);
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.9);
      transform: translateZ(12px) rotateX(-45deg);
      pointer-events: none;
      animation: pulse 1.5s infinite alternate;
    }

    .move-hint.capture {
      background: rgba(239, 68, 68, 0.7);
      box-shadow: 0 0 12px rgba(239, 68, 68, 0.9);
      border-color: rgba(255, 255, 255, 1);
      width: 28px;
      height: 28px;
    }

    @keyframes pulse {
      0% { transform: translateZ(12px) rotateX(-45deg) scale(0.9); }
      100% { transform: translateZ(12px) rotateX(-45deg) scale(1.15); }
    }
    
    .piece-container {
      position: relative;
      width: 54px;
      height: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
      transform: translateZ(24px) rotateX(-45deg);
      transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.25s ease;
      pointer-events: none;
    }

    .piece-img {
      width: 100%;
      height: 100%;
    }

    .white-piece {
      filter: drop-shadow(2px 10px 6px rgba(0, 0, 0, 0.65));
    }

    .black-piece {
      filter: drop-shadow(2px 10px 6px rgba(0, 0, 0, 0.85));
    }

    .gun-icon {
      position: absolute;
      font-size: 20px;
      top: 0px;
      right: -8px;
      transform: translateZ(10px);
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
    }

    .facing-indicator {
      position: absolute;
      width: 0; 
      height: 0; 
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 12px solid #ef4444;
      top: -12px;
      transform: translateZ(12px);
      transition: transform 0.15s ease;
    }

    .bullet-item {
      position: absolute;
      font-size: 22px;
      transform-style: preserve-3d;
      transform: translateZ(15px) rotateX(-45deg);
      filter: drop-shadow(0 0 6px #f59e0b);
      animation: pickupBounce 1s infinite alternate ease-in-out;
      pointer-events: none;
    }

    @keyframes pickupBounce {
      0% { transform: translateZ(15px) rotateX(-45deg) translateY(0); }
      100% { transform: translateZ(25px) rotateX(-45deg) translateY(-6px); }
    }

    .bullet {
      position: absolute;
      width: 12px;
      height: 12px;
      background: #f59e0b;
      border: 2px solid #fff;
      border-radius: 50%;
      transform-style: preserve-3d;
      transform: translateZ(30px) rotateX(-45deg);
      box-shadow: 0 0 10px #f59e0b;
      pointer-events: none;
    }

    .square:hover .piece-container {
      transform: translateZ(44px) rotateX(-20deg) scale(1.2);
    }

    .chat-container {
      width: 320px;
      height: 480px;
      background: #111827;
      border: 1px solid #374151;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: 10px 0;
    }

    .chat-header {
      background: #1f2937;
      padding: 12px 16px;
      font-weight: 600;
      border-bottom: 1px solid #374151;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-messages {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .chat-message {
      max-width: 80%;
      padding: 8px 12px;
      border-radius: 12px;
      font-size: 0.9rem;
      word-wrap: break-word;
      line-height: 1.3;
    }

    .chat-message.self {
      align-self: flex-end;
      background: #d97706;
      color: #fff;
      border-bottom-right-radius: 2px;
    }

    .chat-message.opponent {
      align-self: flex-start;
      background: #374151;
      color: #f3f4f6;
      border-bottom-left-radius: 2px;
    }

    .chat-message .time {
      display: block;
      font-size: 0.65rem;
      opacity: 0.7;
      margin-top: 4px;
      text-align: right;
    }

    .chat-input-area {
      display: flex;
      padding: 10px;
      gap: 8px;
      background: #1f2937;
      border-top: 1px solid #374151;
    }

    .chat-input-area input {
      padding: 8px 14px;
      font-size: 0.9rem;
      border-radius: 20px;
    }

    .chat-input-area button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    button {
      background: #d97706;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.2s, transform 0.1s;
      white-space: nowrap;
    }
    button:hover { background: #b45309; }
    button:active { transform: scale(0.98); }
    button.secondary { background: #374151; }
    button.secondary:hover { background: #4b5563; }
    button.ai-btn { background: #059669; }
    button.ai-btn:hover { background: #047857; }
  </style>
</head>
<body>

<div class="container">
  <div class="mode-select-box">
    <label>
      Game Mode:
      <select id="gameMode">
        <option value="classic">Classic Chess</option>
        <option value="custom">Custom (Specified Piece Replace)</option>
        <option value="random">Randomize Non-King Pieces</option>
        <option value="shooter">Real-Time King Duel (Gun Mode)</option>
      </select>
    </label>
    <label id="replacePieceLabel" style="display: none;">
      Replace with:
      <select id="replacePiece">
        <option value="q">Queen</option>
        <option value="r">Rook</option>
        <option value="b">Bishop</option>
        <option value="n">Knight</option>
        <option value="p">Pawn</option>
      </select>
    </label>
    <label id="aiDiffLabel">
      AI Difficulty:
      <select id="aiDifficulty">
        <option value="easy">Easy (Random)</option>
        <option value="medium" selected>Medium (Tactical)</option>
        <option value="hard">Hard (Depth-2 Lookahead)</option>
      </select>
    </label>
  </div>

  <div class="room-setup">
    <div class="setup-group">
      <input type="text" id="customHostId" placeholder="Custom Host Code (Optional)">
      <button onclick="startHost()">Host Game</button>
    </div>
    <div class="setup-group">
      <input type="text" id="joinId" placeholder="Enter Host Code">
      <button class="secondary" onclick="joinGame()">Join Host</button>
    </div>
    <div class="setup-group">
      <button class="ai-btn" style="width: 100%;" onclick="startAIGame()">Play vs Computer (AI)</button>
    </div>
  </div>

  <div class="status-box" id="status">Host a game, join a friend, or play against the Computer.</div>

  <div class="game-layout">
    <div class="scene-3d">
      <div class="board-3d" id="board"></div>
    </div>

    <div class="chat-container">
      <div class="chat-header">
        <span>Game Log / Chat</span>
      </div>
      <div class="chat-messages" id="chatMessages"></div>
      <div class="chat-input-area">
        <input type="text" id="chatInput" placeholder="Type a message..." onkeydown="if(event.key === 'Enter') sendChatMessage()">
        <button onclick="sendChatMessage()">Send</button>
      </div>
    </div>
  </div>
</div>

<script>
  let peer = null;
  let conn = null;
  let myColor = 'white';
  let turn = 'white';
  let gameOver = false;
  let isAiGame = false;
  let aiColor = 'black';

  // Shooter Mode State
  let isShooterMode = false;
  let shooterLoop = null;
  let bulletSpawner = null;
  let bullets = [];
  let spawnedAmmo = []; // Ammo items on the map
  let lastShotTime = { white: 0, black: 0 };
  let ammoCount = { white: 0, black: 0 };

  let kingPositions = {
    white: { r: 7, c: 4, facing: { dr: -1, dc: 0 } },
    black: { r: 0, c: 4, facing: { dr: 1, dc: 0 } }
  };

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  document.getElementById('gameMode').addEventListener('change', (e) => {
    const val = e.target.value;
    document.getElementById('replacePieceLabel').style.display = val === 'custom' ? 'flex' : 'none';
    document.getElementById('aiDiffLabel').style.display = val === 'shooter' ? 'none' : 'flex';
  });

  function playSound(type) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'move') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'capture') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.18);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === 'check') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.setValueAtTime(300, now + 0.1);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'win') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.15);
      osc.frequency.setValueAtTime(659.25, now + 0.3);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === 'chat') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'shoot') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'pickup') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.15);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  }

  const classicBoard = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']
  ];

  const initialPieceColors = [
    ['black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['white','white','white','white','white','white','white','white'],
    ['white','white','white','white','white','white','white','white']
  ];

  function buildBoardLayout() {
    const mode = document.getElementById('gameMode').value;
    if (mode === 'shooter') {
      let shooterBoard = Array(8).fill(null).map(() => Array(8).fill(''));
      shooterBoard[7][4] = 'k';
      shooterBoard[0][4] = 'k';
      return shooterBoard;
    }

    if (mode === 'classic') return JSON.parse(JSON.stringify(classicBoard));
    
    let custom = JSON.parse(JSON.stringify(classicBoard));
    const allowedRandomPieces = ['q', 'r', 'b', 'n', 'p'];

    if (mode === 'random') {
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (custom[r][c] !== '' && custom[r][c] !== 'k') {
            const randIdx = Math.floor(Math.random() * allowedRandomPieces.length);
            custom[r][c] = allowedRandomPieces[randIdx];
          }
        }
      }
    } else if (mode === 'custom') {
      const fillPiece = document.getElementById('replacePiece').value;
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (custom[r][c] !== '' && custom[r][c] !== 'k') {
            custom[r][c] = fillPiece;
          }
        }
      }
    }
    return custom;
  }

  function buildColorLayout() {
    const mode = document.getElementById('gameMode').value;
    if (mode === 'shooter') {
      let shooterColors = Array(8).fill(null).map(() => Array(8).fill(''));
      shooterColors[7][4] = 'white';
      shooterColors[0][4] = 'black';
      return shooterColors;
    }
    return JSON.parse(JSON.stringify(initialPieceColors));
  }

  const pieceImages = {
    white: {
      k: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
      q: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
      r: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
      b: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
      n: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
      p: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
    },
    black: {
      k: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
      q: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
      r: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
      b: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
      n: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
      p: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
    }
  };

  let boardState = buildBoardLayout();
  let colorState = buildColorLayout();
  let selectedSquare = null;

  function startHost() {
    isAiGame = false;
    const customId = document.getElementById('customHostId').value.trim();
    if (peer) peer.destroy();

    peer = customId ? new Peer(customId) : new Peer();

    document.getElementById('status').innerText = "Registering host code with server...";

    peer.on('open', (id) => {
      document.getElementById('status').innerText = `Host Code: ${id} (Waiting for Player 2...)`;
      render();
    });

    peer.on('connection', (c) => {
      conn = c;
      const hostIsWhite = Math.random() < 0.5;
      myColor = hostIsWhite ? 'white' : 'black';
      const clientColor = hostIsWhite ? 'black' : 'white';

      conn.on('open', () => {
        resetGameData();
        conn.send({ 
          type: 'init', 
          assignedColor: clientColor, 
          board: boardState, 
          colors: colorState, 
          isShooter: isShooterMode,
          kingPositions: kingPositions
        });
        setupConnection();
        render();
        updateStatus();
      });
    });

    peer.on('error', (err) => {
      if (err.type === 'unavailable-id') {
        document.getElementById('status').innerText = "Error: That Host Code is already taken. Try another!";
      } else {
        document.getElementById('status').innerText = `Error: ${err.message}`;
      }
    });
  }

  function joinGame() {
    isAiGame = false;
    const hostId = document.getElementById('joinId').value.trim();
    if (!hostId) return alert("Enter a host code!");
    if (peer) peer.destroy();

    peer = new Peer();

    document.getElementById('status').innerText = "Connecting to Host...";

    peer.on('open', () => {
      conn = peer.connect(hostId);
      setupConnection();
    });

    peer.on('error', (err) => {
      document.getElementById('status').innerText = `Connection Error: ${err.message}`;
    });
  }

  function startAIGame() {
    if (peer) peer.destroy();
    if (conn) conn.close();
    conn = null;
    isAiGame = true;

    myColor = Math.random() < 0.5 ? 'white' : 'black';
    aiColor = myColor === 'white' ? 'black' : 'white';

    resetGameData();
    displayChatMessage(`Started Offline match (${document.getElementById('gameMode').value.toUpperCase()}). You are ${myColor.toUpperCase()}.`, 'opponent');
    render();
    updateStatus();

    if (!isShooterMode && turn === aiColor) {
      setTimeout(makeAIMove, 600);
    }
  }

  function setupConnection() {
    conn.on('data', (data) => {
      if (data.type === 'init') {
        myColor = data.assignedColor;
        boardState = data.board;
        colorState = data.colors;
        isShooterMode = data.isShooter;
        kingPositions = data.kingPositions || kingPositions;
        selectedSquare = null;
        turn = 'white';
        gameOver = false;
        if (isShooterMode) startShooterLoop();
        render();
        updateStatus();
      } else if (data.type === 'move') {
        boardState = data.board;
        colorState = data.colors;
        turn = data.turn;

        if (data.isCheckmate) {
          handleGameOver(data.winner, "CHECKMATE! ");
        } else if (data.isCheck) {
          playSound('check');
          render();
          updateStatus("CHECK!");
        } else {
          playSound(data.isCapture ? 'capture' : 'move');
          render();
          updateStatus();
        }
      } else if (data.type === 'shooter_update') {
        kingPositions = data.kingPositions;
        boardState = data.board;
        colorState = data.colors;
        bullets = data.bullets;
        spawnedAmmo = data.spawnedAmmo || [];
        ammoCount = data.ammoCount || ammoCount;
        lastShotTime = data.lastShotTime || lastShotTime;
        if (data.gameOver) {
          handleGameOver(data.winner, "KING ELIMINATED! ");
        } else {
          render();
          updateStatus();
        }
      } else if (data.type === 'chat') {
        displayChatMessage(data.message, 'opponent');
        playSound('chat');
      }
    });

    conn.on('close', () => {
      if (!gameOver && !isAiGame) {
        handleGameOver(myColor, "Opponent disconnected! ");
      }
    });
  }

  function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;

    if (conn && conn.open) {
      conn.send({ type: 'chat', message: msg });
      displayChatMessage(msg, 'self');
      input.value = '';
    } else if (isAiGame) {
      displayChatMessage(msg, 'self');
      input.value = '';
      setTimeout(() => {
        displayChatMessage("I am focused on the game!", 'opponent');
      }, 800);
    } else {
      alert("You need to be connected to another player to chat.");
    }
  }

  function displayChatMessage(msg, sender) {
    const chatContainer = document.getElementById('chatMessages');
    const msgEl = document.createElement('div');
    msgEl.className = `chat-message ${sender}`;
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    msgEl.innerHTML = `${escapeHTML(msg)}<span class="time">${timeStr}</span>`;
    chatContainer.appendChild(msgEl);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function resetGameData() {
    if (shooterLoop) clearInterval(shooterLoop);
    if (bulletSpawner) clearInterval(bulletSpawner);
    const mode = document.getElementById('gameMode').value;
    isShooterMode = mode === 'shooter';
    bullets = [];
    spawnedAmmo = [];
    ammoCount = { white: 0, black: 0 };
    lastShotTime = { white: 0, black: 0 };

    kingPositions = {
      white: { r: 7, c: 4, facing: { dr: -1, dc: 0 } },
      black: { r: 0, c: 4, facing: { dr: 1, dc: 0 } }
    };

    boardState = buildBoardLayout();
    colorState = buildColorLayout();
    selectedSquare = null;
    turn = 'white';
    gameOver = false;

    if (isShooterMode) {
      startShooterLoop();
    }
  }

  function resetGame() {
    resetGameData();
    render();
    if (isAiGame) {
      updateStatus();
      if (!isShooterMode && turn === aiColor) {
        setTimeout(makeAIMove, 600);
      }
    } else if (conn && conn.open) {
      updateStatus();
    } else {
      document.getElementById('status').innerText = peer?.id ? `Host Code: ${peer.id} (Waiting for Player 2...)` : "Host a game, join a friend, or play against the Computer.";
    }
  }

  function handleGameOver(winner, prefix = "") {
    gameOver = true;
    selectedSquare = null;
    if (shooterLoop) clearInterval(shooterLoop);
    if (bulletSpawner) clearInterval(bulletSpawner);
    playSound('win');
    render();
    document.getElementById('status').innerText = `${prefix}${winner.toUpperCase()} WINS! Resetting game in 5 seconds...`;
    
    setTimeout(() => {
      resetGame();
    }, 5000);
  }

  function updateStatus(extraText = "") {
    if (gameOver) return;
    const statusEl = document.getElementById('status');
    if (isShooterMode) {
      const now = Date.now();
      const myCooldown = Math.max(0, Math.ceil((3000 - (now - lastShotTime[myColor])) / 1000));
      const cooldownStr = myCooldown > 0 ? `Cooldown: ${myCooldown}s` : "READY TO SHOOT!";
      statusEl.innerText = `[REAL-TIME SHOOTER] Ammo: ${ammoCount[myColor]} | ${cooldownStr} | Controls: Arrows = Move/Aim, Space = Shoot`;
      return;
    }
    const isMyTurn = myColor === turn;
    let text = `You are ${myColor.toUpperCase()}. ` + (isMyTurn ? "Your turn!" : "Waiting for opponent...");
    if (extraText) text = `${extraText} ${text}`;
    statusEl.innerText = text;
  }

  // --- Real-time Shooter Logic ---
  window.addEventListener('keydown', (e) => {
    if (!isShooterMode || gameOver) return;

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
      e.preventDefault();
    }

    if (e.key === 'ArrowUp') handleShooterMove(-1, 0);
    else if (e.key === 'ArrowDown') handleShooterMove(1, 0);
    else if (e.key === 'ArrowLeft') handleShooterMove(0, -1);
    else if (e.key === 'ArrowRight') handleShooterMove(0, 1);
    else if (e.key === ' ') handleShooterShoot();
  });

  function checkAmmoPickups(color) {
    const pos = kingPositions[color];
    for (let i = spawnedAmmo.length - 1; i >= 0; i--) {
      let a = spawnedAmmo[i];
      if (a.r === pos.r && a.c === pos.c) {
        ammoCount[color] += 1;
        spawnedAmmo.splice(i, 1);
        playSound('pickup');
      }
    }
  }

  function handleShooterMove(dr, dc) {
    let myPos = kingPositions[myColor];
    if (myColor === 'black') {
      dr = -dr;
      dc = -dc;
    }

    myPos.facing = { dr, dc };

    const nr = myPos.r + dr;
    const nc = myPos.c + dc;

    if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
      const otherColor = myColor === 'white' ? 'black' : 'white';
      const otherPos = kingPositions[otherColor];
      if (nr !== otherPos.r || nc !== otherPos.c) {
        boardState[myPos.r][myPos.c] = '';
        colorState[myPos.r][myPos.c] = '';

        myPos.r = nr;
        myPos.c = nc;

        boardState[nr][nc] = 'k';
        colorState[nr][nc] = myColor;
        playSound('move');

        checkAmmoPickups(myColor);
      }
    }
    syncShooterState();
    render();
    updateStatus();
  }

  function handleShooterShoot() {
    const now = Date.now();
    if (now - lastShotTime[myColor] < 3000) return; // 3 second cooldown
    if (ammoCount[myColor] <= 0) return; // Needs ammo to shoot

    ammoCount[myColor] -= 1;
    lastShotTime[myColor] = now;

    const myPos = kingPositions[myColor];
    bullets.push({
      r: myPos.r + myPos.facing.dr * 0.5,
      c: myPos.c + myPos.facing.dc * 0.5,
      dr: myPos.facing.dr,
      dc: myPos.facing.dc,
      owner: myColor
    });
    playSound('shoot');
    syncShooterState();
    updateStatus();
  }

  function spawnAmmoItem() {
    if (gameOver || !isShooterMode) return;
    
    // Only host or single player handles spawner logic to avoid duplicate spawns
    if (!isAiGame && conn && myColor !== 'white') return;

    let emptyTiles = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (boardState[r][c] === '' && !spawnedAmmo.some(a => a.r === r && a.c === c)) {
          emptyTiles.push({ r, c });
        }
      }
    }

    if (emptyTiles.length > 0) {
      const tile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      spawnedAmmo.push({
        r: tile.r,
        c: tile.c,
        spawnTime: Date.now()
      });
      syncShooterState();
    }
  }

  function startShooterLoop() {
    if (shooterLoop) clearInterval(shooterLoop);
    if (bulletSpawner) clearInterval(bulletSpawner);

    // Ammo spawns every 5 seconds
    bulletSpawner = setInterval(spawnAmmoItem, 5000);

    shooterLoop = setInterval(() => {
      if (gameOver || !isShooterMode) return;

      const now = Date.now();

      // Despawn ammo after 10 seconds
      spawnedAmmo = spawnedAmmo.filter(a => now - a.spawnTime < 10000);

      if (isAiGame) updateAiShooter();

      let nextBullets = [];
      let gameEnded = false;
      let winner = '';

      for (let b of bullets) {
        b.r += b.dr * 0.35;
        b.c += b.dc * 0.35;

        if (b.r < -0.5 || b.r > 7.5 || b.c < -0.5 || b.c > 7.5) continue;

        const targetColor = b.owner === 'white' ? 'black' : 'white';
        const targetPos = kingPositions[targetColor];

        if (Math.hypot(b.r - targetPos.r, b.c - targetPos.c) < 0.6) {
          gameEnded = true;
          winner = b.owner;
          break;
        }

        nextBullets.push(b);
      }

      bullets = nextBullets;

      if (gameEnded) {
        handleGameOver(winner, "KING ELIMINATED! ");
        if (conn && conn.open) syncShooterState(true, winner);
      } else {
        render();
        updateStatus();
      }
    }, 50);
  }

  function updateAiShooter() {
    const aiPos = kingPositions[aiColor];
    const playerPos = kingPositions[myColor];
    const now = Date.now();

    checkAmmoPickups(aiColor);

    // AI movement logic: look for ammo if low, or head towards player
    if (Math.random() < 0.25) {
      let targetR = playerPos.r;
      let targetC = playerPos.c;

      if (ammoCount[aiColor] === 0 && spawnedAmmo.length > 0) {
        targetR = spawnedAmmo[0].r;
        targetC = spawnedAmmo[0].c;
      }

      const dr = Math.sign(targetR - aiPos.r);
      const dc = Math.sign(targetC - aiPos.c);

      let moveR = 0, moveC = 0;
      if (Math.random() < 0.5 && dr !== 0) moveR = dr;
      else if (dc !== 0) moveC = dc;

      if (moveR !== 0 || moveC !== 0) {
        aiPos.facing = { dr: moveR, dc: moveC };
        const nr = aiPos.r + moveR;
        const nc = aiPos.c + moveC;

        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && !(nr === playerPos.r && nc === playerPos.c)) {
          boardState[aiPos.r][aiPos.c] = '';
          colorState[aiPos.r][aiPos.c] = '';
          aiPos.r = nr;
          aiPos.c = nc;
          boardState[nr][nc] = 'k';
          colorState[nr][nc] = aiColor;
          checkAmmoPickups(aiColor);
        }
      }
    }

    // AI Shooting Logic
    if (ammoCount[aiColor] > 0 && (now - lastShotTime[aiColor] >= 3000)) {
      if (aiPos.r === playerPos.r || aiPos.c === playerPos.c) {
        const dr = Math.sign(playerPos.r - aiPos.r);
        const dc = Math.sign(playerPos.c - aiPos.c);
        aiPos.facing = { dr, dc };
        bullets.push({
          r: aiPos.r + dr * 0.5,
          c: aiPos.c + dc * 0.5,
          dr: dr,
          dc: dc,
          owner: aiColor
        });
        ammoCount[aiColor] -= 1;
        lastShotTime[aiColor] = now;
        playSound('shoot');
      }
    }
  }

  function syncShooterState(hasEnded = false, winner = '') {
    if (conn && conn.open) {
      conn.send({
        type: 'shooter_update',
        kingPositions,
        board: boardState,
        colors: colorState,
        bullets,
        spawnedAmmo,
        ammoCount,
        lastShotTime,
        gameOver: hasEnded,
        winner
      });
    }
  }

  // --- Turn-based Logic ---
  function isClearPath(b, r1, c1, r2, c2) {
    let dr = Math.sign(r2 - r1), dc = Math.sign(c2 - c1);
    let currR = r1 + dr, currC = c1 + dc;
    while (currR !== r2 || currC !== c2) {
      if (b[currR][currC] !== '') return false;
      currR += dr; currC += dc;
    }
    return true;
  }

  function isValidBasicMove(b, cSt, fromR, fromC, toR, toC) {
    const piece = b[fromR][fromC];
    const sourceColor = cSt[fromR][fromC];
    const targetColor = cSt[toR][toC];

    if (sourceColor === targetColor) return false;

    const dr = toR - fromR, dc = toC - fromC;
    const absDr = Math.abs(dr), absDc = Math.abs(dc);

    switch (piece) {
      case 'p':
        if (sourceColor === 'white') {
          if (dc === 0 && dr === -1 && targetColor === '') return true;
          if (dc === 0 && dr === -2 && fromR === 6 && targetColor === '' && b[5][fromC] === '') return true;
          if (absDc === 1 && dr === -1 && targetColor === 'black') return true;
        } else {
          if (dc === 0 && dr === 1 && targetColor === '') return true;
          if (dc === 0 && dr === 2 && fromR === 1 && targetColor === '' && b[2][fromC] === '') return true;
          if (absDc === 1 && dr === 1 && targetColor === 'white') return true;
        }
        return false;
      case 'r': return (dr === 0 || dc === 0) && isClearPath(b, fromR, fromC, toR, toC);
      case 'n': return (absDr === 2 && absDc === 1) || (absDr === 1 && absDc === 2);
      case 'b': return (absDr === absDc) && isClearPath(b, fromR, fromC, toR, toC);
      case 'q': return (dr === 0 || dc === 0 || absDr === absDc) && isClearPath(b, fromR, fromC, toR, toC);
      case 'k': return absDr <= 1 && absDc <= 1;
    }
    return false;
  }

  function findKing(b, cSt, color) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (b[r][c] === 'k' && cSt[r][c] === color) {
          return { r, c };
        }
      }
    }
    return null;
  }

  function isSquareAttacked(b, cSt, targetR, targetC, attackerColor) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (cSt[r][c] === attackerColor) {
          if (isValidBasicMove(b, cSt, r, c, targetR, targetC)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function isKingInCheck(b, cSt, color) {
    const kPos = findKing(b, cSt, color);
    if (!kPos) return false;
    const enemyColor = color === 'white' ? 'black' : 'white';
    return isSquareAttacked(b, cSt, kPos.r, kPos.c, enemyColor);
  }

  function isLegalMove(b, cSt, fromR, fromC, toR, toC) {
    if (!isValidBasicMove(b, cSt, fromR, fromC, toR, toC)) return false;

    const color = cSt[fromR][fromC];
    const tempB = b.map(row => [...row]);
    const tempC = cSt.map(row => [...row]);

    tempB[toR][toC] = tempB[fromR][fromC];
    tempB[fromR][fromC] = '';
    tempC[toR][toC] = tempC[fromR][fromC];
    tempC[fromR][fromC] = '';

    return !isKingInCheck(tempB, tempC, color);
  }

  function getAllLegalMoves(b, cSt, color) {
    const moves = [];
    for (let r1 = 0; r1 < 8; r1++) {
      for (let c1 = 0; c1 < 8; c1++) {
        if (cSt[r1][c1] === color) {
          for (let r2 = 0; r2 < 8; r2++) {
            for (let c2 = 0; c2 < 8; c2++) {
              if (isLegalMove(b, cSt, r1, c1, r2, c2)) {
                moves.push({ fromR: r1, fromC: c1, toR: r2, toC: c2 });
              }
            }
          }
        }
      }
    }
    return moves;
  }

  function hasAnyLegalMoves(b, cSt, color) {
    return getAllLegalMoves(b, cSt, color).length > 0;
  }

  function makeMove(fromR, fromC, toR, toC) {
    let movingPiece = boardState[fromR][fromC];
    let pieceColor = colorState[fromR][fromC];
    let targetPiece = boardState[toR][toC];

    const isCapture = Boolean(targetPiece);

    if (movingPiece === 'p') {
      if ((pieceColor === 'white' && toR === 0) || (pieceColor === 'black' && toR === 7)) {
        movingPiece = 'q';
      }
    }

    boardState[toR][toC] = movingPiece;
    boardState[fromR][fromC] = '';
    
    colorState[toR][toC] = pieceColor;
    colorState[fromR][fromC] = '';

    selectedSquare = null;

    const enemyColor = pieceColor === 'white' ? 'black' : 'white';
    const inCheck = isKingInCheck(boardState, colorState, enemyColor);
    const hasMoves = hasAnyLegalMoves(boardState, colorState, enemyColor);
    
    let isCheckmate = false;
    if (inCheck && !hasMoves) {
      isCheckmate = true;
    }

    turn = enemyColor;

    if (conn && conn.open) {
      conn.send({ type: 'move', board: boardState, colors: colorState, turn: turn, isCapture, isCheck: inCheck, isCheckmate });
    }

    if (isCheckmate) {
      handleGameOver(pieceColor, "CHECKMATE! ");
      return;
    } else if (inCheck) {
      playSound('check');
      render();
      updateStatus("CHECK!");
    } else {
      playSound(isCapture ? 'capture' : 'move');
      render();
      updateStatus();
    }

    if (isAiGame && turn === aiColor && !gameOver) {
      setTimeout(makeAIMove, 500);
    }
  }

  function evaluateBoard(b, cSt, color) {
    const pieceValues = { p: 10, n: 30, b: 30, r: 50, q: 90, k: 900 };
    let score = 0;
    const enemyColor = color === 'white' ? 'black' : 'white';

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = b[r][c];
        if (piece) {
          const val = pieceValues[piece] || 0;
          if (cSt[r][c] === color) score += val;
          else if (cSt[r][c] === enemyColor) score -= val;
        }
      }
    }
    return score;
  }

  function makeAIMove() {
    if (gameOver || isShooterMode) return;

    const possibleMoves = getAllLegalMoves(boardState, colorState, aiColor);
    if (possibleMoves.length === 0) return;

    const difficulty = document.getElementById('aiDifficulty').value;
    let selectedMove = null;

    if (difficulty === 'easy') {
      selectedMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    } else if (difficulty === 'medium') {
      const pieceValues = { p: 10, n: 30, b: 30, r: 50, q: 90, k: 900 };
      let maxScore = -9999;
      for (let move of possibleMoves) {
        let score = 0;
        const targetPiece = boardState[move.toR][move.toC];
        if (targetPiece) {
          score += pieceValues[targetPiece] * 10;
        }
        score += Math.floor(Math.random() * 5);
        if (score > maxScore) {
          maxScore = score;
          selectedMove = move;
        }
      }
    } else if (difficulty === 'hard') {
      let bestScore = -99999;
      for (let move of possibleMoves) {
        const tempB = boardState.map(row => [...row]);
        const tempC = colorState.map(row => [...row]);

        tempB[move.toR][move.toC] = tempB[move.fromR][move.fromC];
        tempB[move.fromR][move.fromC] = '';
        tempC[move.toR][move.toC] = tempC[move.fromR][move.fromC];
        tempC[move.fromR][move.fromC] = '';

        let moveScore = evaluateBoard(tempB, tempC, aiColor);

        const enemyMoves = getAllLegalMoves(tempB, tempC, myColor);
        let maxEnemyResponse = -99999;
        for (let em of enemyMoves) {
          const eTempB = tempB.map(row => [...row]);
          const eTempC = tempC.map(row => [...row]);
          eTempB[em.toR][em.toC] = eTempB[em.fromR][em.fromC];
          eTempB[em.fromR][em.fromC] = '';
          eTempC[em.toR][em.toC] = eTempC[em.fromR][em.fromC];
          eTempC[em.fromR][em.fromC] = '';
          const enemyScore = evaluateBoard(eTempB, eTempC, myColor);
          if (enemyScore > maxEnemyResponse) maxEnemyResponse = enemyScore;
        }

        if (enemyMoves.length > 0) moveScore -= maxEnemyResponse * 0.5;

        moveScore += Math.floor(Math.random() * 3);

        if (moveScore > bestScore) {
          bestScore = moveScore;
          selectedMove = move;
        }
      }
    }

    if (!selectedMove) selectedMove = possibleMoves[0];
    makeMove(selectedMove.fromR, selectedMove.fromC, selectedMove.toR, selectedMove.toC);
  }

  function handleClick(r, c) {
    if (isShooterMode || (!conn && !isAiGame) || turn !== myColor || gameOver) return;

    if (selectedSquare) {
      if (selectedSquare.r === r && selectedSquare.c === c) {
        selectedSquare = null;
      } else if (isLegalMove(boardState, colorState, selectedSquare.r, selectedSquare.c, r, c)) {
        makeMove(selectedSquare.r, selectedSquare.c, r, c);
      } else {
        selectedSquare = (colorState[r][c] === turn) ? { r, c } : null;
      }
    } else {
      if (colorState[r][c] === turn) {
        selectedSquare = { r, c };
      }
    }
    render();
  }

  function render() {
    const boardEl = document.getElementById('board');
    boardEl.innerHTML = '';
    
    const isFlipped = myColor === 'black';

    let validMoves = [];
    if (!isShooterMode && selectedSquare && !gameOver) {
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (isLegalMove(boardState, colorState, selectedSquare.r, selectedSquare.c, r, c)) {
            validMoves.push({ r, c });
          }
        }
      }
    }

    const currentKingInCheck = !isShooterMode && isKingInCheck(boardState, colorState, turn) ? findKing(boardState, colorState, turn) : null;

    for (let idx = 0; idx < 64; idx++) {
      const r = isFlipped ? 7 - Math.floor(idx / 8) : Math.floor(idx / 8);
      const c = isFlipped ? 7 - (idx % 8) : idx % 8;
      
      const sq = document.createElement('div');
      sq.className = `square ${(r + c) % 2 === 1 ? 'dark' : 'light'}`;
      if (selectedSquare && selectedSquare.r === r && selectedSquare.c === c) sq.classList.add('selected');
      if (currentKingInCheck && currentKingInCheck.r === r && currentKingInCheck.c === c) sq.classList.add('in-check');
      
      const piece = boardState[r][c];
      const pColor = colorState[r][c];

      if (piece && pColor) {
        const pContainer = document.createElement('div');
        pContainer.className = 'piece-container';

        const img = document.createElement('img');
        const colorClass = pColor === 'white' ? 'white-piece' : 'black-piece';
        img.className = `piece-img ${colorClass}`;
        img.src = pieceImages[pColor][piece];
        img.alt = `${pColor} ${piece}`;
        pContainer.appendChild(img);

        if (isShooterMode && piece === 'k') {
          const gun = document.createElement('div');
          gun.className = 'gun-icon';
          gun.innerText = '🔫';
          pContainer.appendChild(gun);

          const facing = kingPositions[pColor].facing;
          const indicator = document.createElement('div');
          indicator.className = 'facing-indicator';

          let rot = 0;
          if (facing.dr === -1 && facing.dc === 0) rot = 0;
          if (facing.dr === 1 && facing.dc === 0) rot = 180;
          if (facing.dr === 0 && facing.dc === -1) rot = -90;
          if (facing.dr === 0 && facing.dc === 1) rot = 90;

          if (isFlipped) rot += 180;

          indicator.style.transform = `translateZ(12px) rotate(${rot}deg)`;
          pContainer.appendChild(indicator);
        }

        sq.appendChild(pContainer);
      } else if (isShooterMode) {
        const ammoOnSquare = spawnedAmmo.find(a => a.r === r && a.c === c);
        if (ammoOnSquare) {
          const ammoIcon = document.createElement('div');
          ammoIcon.className = 'bullet-item';
          ammoIcon.innerText = '⚡';
          sq.appendChild(ammoIcon);
        }
      }
      
      const isTarget = validMoves.some(m => m.r === r && m.c === c);
      if (isTarget) {
        const hint = document.createElement('div');
        hint.className = `move-hint ${colorState[r][c] ? 'capture' : ''}`;
        sq.appendChild(hint);
      }

      sq.onclick = () => handleClick(r, c);
      boardEl.appendChild(sq);
    }

    if (isShooterMode) {
      const squareSize = 480 / 8;
      for (let b of bullets) {
        const bulletEl = document.createElement('div');
        bulletEl.className = 'bullet';

        let displayR = b.r;
        let displayC = b.c;

        if (isFlipped) {
          displayR = 7 - b.r;
          displayC = 7 - b.c;
        }

        bulletEl.style.left = `${displayC * squareSize + squareSize / 2 - 6}px`;
        bulletEl.style.top = `${displayR * squareSize + squareSize / 2 - 6}px`;

        boardEl.appendChild(bulletEl);
      }
    }
  }

  render();
</script>

</body>
</html>
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

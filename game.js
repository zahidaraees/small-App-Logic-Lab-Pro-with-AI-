// Application State Engine
let score = 0;
let currentProgress = 0;
let currentBadge = "Novice";

// Array of fake bloat steps to simulate legacy/over-engineered framework overhead
const bloatMessages = [
    "Spinning up Node v18 core clusters...",
    "Resolving 1,420 unvetted nested node_modules...",
    "Initializing AbstractFactoryProviderContext Singleton...",
    "Injecting reflective state telemetry metrics...",
    "Hydrating telemetry pipelines & enterprise trackers...",
    "Executing garbage collection cycle pre-emptively..."
];

// DOM Elements Linkage
const textInput = document.getElementById('text-input');
const taskSelect = document.getElementById('task-select');
const btnBig = document.getElementById('btn-big');
const btnSmall = document.getElementById('btn-small');
const bubbleContainer = document.getElementById('bubble-container');
const loadingOverlay = document.getElementById('loading-overlay');
const loadingText = document.getElementById('loading-text');
const scoreDisplay = document.getElementById('score-display');
const badgeDisplay = document.getElementById('badge-display');
const statusMessage = document.getElementById('status-message');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');

// Core Micro-Task Computing Operations
function executeTask(task, input) {
    if (!input.trim()) return "(Empty Payload String Input)";
    
    switch (task) {
        case 'uppercase':
            return input.toUpperCase();
        case 'reverse':
            return input.split('').reverse().join('');
        case 'wordcount':
            const words = input.trim().split(/\s+/).filter(w => w.length > 0);
            return `Total Words: ${words.length}`;
        case 'palindrome':
            const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
            const reversed = cleaned.split('').reverse().join('');
            return cleaned === reversed ? "✓ Valid Palindrome" : "✗ Not a Palindrome";
        default:
            return "Unknown Pipeline Event";
    }
}

// Logic / Metric Updates
function addPoints(points) {
    score += points;
    scoreDisplay.textContent = score;
    
    // Increment application layout milestones progress (Cap at 100%)
    currentProgress = Math.min(Math.round((score / 200) * 100), 100);
    progressBar.style.width = `${currentProgress}%`;
    progressPercent.textContent = `${currentProgress}%`;
    
    updateGamificationTelemetry();
}

function updateGamificationTelemetry() {
    // 1. Evaluate Badge Logic Criteria
    if (score >= 200) {
        currentBadge = "Logic Guru 👑";
    } else if (score >= 100) {
        currentBadge = "Efficiency Master ⚡";
    } else if (score >= 50) {
        currentBadge = "Echo Breaker 🔮";
    } else {
        currentBadge = "Novice";
    }
    badgeDisplay.textContent = currentBadge;

    // 2. Evaluate Dynamic Pedagogical Status Messages
    if (score < 40) {
        statusMessage.textContent = "Still bloated… Stop loading monolithic structures.";
        statusMessage.style.color = "var(--neon-red)";
    } else if (score < 120) {
        statusMessage.textContent = "Improving efficiency… Choosing focused, dedicated scripts.";
        statusMessage.style.color = "var(--neon-cyan)";
    } else {
        statusMessage.textContent = "Mastery: Small apps logic clear! Pure optimization achieved.";
        statusMessage.style.color = "var(--neon-green)";
    }
}

function appendResultBubble(type, title, resultText) {
    // Clear initial empty placeholder text if present
    const placeholder = document.querySelector('.placeholder-bubble');
    if (placeholder) placeholder.remove();
    
    const bubble = document.createElement('div');
    bubble.className = `bubble ${type === 'big' ? 'big-app' : 'small-app'}`;
    
    const meta = document.createElement('div');
    meta.className = 'bubble-meta';
    meta.textContent = `${type === 'big' ? '🔴 Monolith Bloat' : '🟢 Micro-App Target'} • ${title}`;
    
    const body = document.createElement('div');
    body.className = 'bubble-body';
    body.textContent = resultText;
    
    bubble.appendChild(meta);
    bubble.appendChild(body);
    
    // Insert newest runs to the top of execution stream context panel
    bubbleContainer.insertBefore(bubble, bubbleContainer.firstChild);
}

// Track Trigger Execution Handles
function handleSmallAppExecution() {
    const rawValue = textInput.value;
    const activeTask = taskSelect.value;
    const taskLabel = taskSelect.options[taskSelect.selectedIndex].text;
    
    // Immediate computational response logic execution (Zero Bloat Framework overhead)
    const computationResult = executeTask(activeTask, rawValue);
    
    appendResultBubble('small', taskLabel, `Result: "${computationResult}" (Executed instantly in 0.4ms)`);
    addPoints(20);
}

function handleBigAppExecution() {
    const rawValue = textInput.value;
    const activeTask = taskSelect.value;
    const taskLabel = taskSelect.options[taskSelect.selectedIndex].text;
    
    // Lock controls UI inputs state during ongoing pipeline processing animation simulated loops
    btnBig.disabled = true;
    btnSmall.disabled = true;
    loadingOverlay.classList.remove('hidden');
    
    let loopIndex = 0;
    loadingText.textContent = bloatMessages[0];
    
    // Cycle sequential fake framework delays simulating bloated package execution costs
    const intervalTimer = setInterval(() => {
        loopIndex++;
        if (loopIndex < bloatMessages.length) {
            loadingText.textContent = bloatMessages[loopIndex];
        } else {
            clearInterval(intervalTimer);
            loadingOverlay.classList.add('hidden');
            
            // Output compute calculation data payload
            const computationResult = executeTask(activeTask, rawValue);
            appendResultBubble('big', taskLabel, `Result: "${computationResult}" (Took 2,450ms to load 42MB of framework dependencies)`);
            
            addPoints(5);
            
            // Re-unlock UI controls status access 
            btnBig.disabled = false;
            btnSmall.disabled = false;
        }
    }, 450); // Timing cadence rate per overhead cycle trace step
}

// Event Configuration Links
btnSmall.addEventListener('click', handleSmallAppExecution);
btnBig.addEventListener('click', handleBigAppExecution);
const linksContainer = document.getElementById('level-links');
const levelContent = document.getElementById('level-content');
const welcomeScreen = document.getElementById('welcome-screen');

// 1. Generate Sidebar Links
banditSolutions.forEach(lvl => {
    const link = document.createElement('a');
    link.href = `#${lvl.id}`;
    link.innerText = lvl.id.toUpperCase();
    link.onclick = (e) => {
        e.preventDefault();
        loadLevel(lvl);
    };
    linksContainer.appendChild(link);
});

// 2. Render Level Data
function loadLevel(data) {
    welcomeScreen.classList.add('hidden');
    levelContent.classList.remove('hidden');
    
    document.getElementById('lvl-title').innerText = data.title;
    document.getElementById('lvl-goal').innerText = data.goal;
    
    const container = document.getElementById('steps-container');
    container.innerHTML = ''; // Clear old content

    data.steps.forEach(step => {
        const card = `
            <span class="label">${step.label}</span>
            <span class="descrip">${step.description}</span>
            <div class="terminal-card">
                <div class="terminal-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <div class="terminal-body">
                    <span class="prompt">${step.dir}</span> <span class="command">${step.command}</span><br>
                    <span class="output">${step.output}</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}
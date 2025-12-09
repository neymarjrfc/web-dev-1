// 1. THE DATA
const projects = [
    { name: "Library Management System", lang: "C", desc: "Track books & authors using file handling." },
    { name: "Tic-Tac-Toe Game", lang: "C Logic", desc: "Console game with win/draw logic." },
    { name: "Portfolio Website", lang: "HTML/CSS", desc: "My personal site with dark mode." },
    { name: "Sudoku Solver", lang: "C++", desc: "Backtracking algorithm demo." },
    { name: "Github", lang: "Git", desc: "Version control management." },
];

// 2. THE RENDER FUNCTION
function renderProjects() {
    const listContainer = document.getElementById('project-list');
    
    // Safety check: If HTML element is missing, stop here so we don't crash
    if (!listContainer) return; 

    listContainer.innerHTML = '';

    projects.forEach(project => {
        // Create the Card DIV
        const card = document.createElement('div');
        card.classList.add('project-card'); // Add the CSS class for styling

        // Fill the Card HTML
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.desc}</p>
            <span class="tech-tag">${project.lang}</span>
        `;
        
        // Add to the grid
        listContainer.appendChild(card);
    });
}

// 3. INITIALIZE
renderProjects();

// 4. DARK MODE LOGIC (Updated: Defaults to Dark & Remembers Choice)
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// A. Check LocalStorage on load
// If the user has 'dark' saved OR if they are new (!currentTheme), turn on Dark Mode
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || !currentTheme) {
    body.classList.add('dark-mode');
    // Update the button look immediately
    if (toggleBtn) {
        toggleBtn.innerText = '🌙'; 
        toggleBtn.style.background = '#f4f4f4';
        toggleBtn.style.color = '#333';
    }
}

// B. The Click Listener
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        // Toggle the class
        body.classList.toggle('dark-mode');

        // Check the new state and SAVE it to memory
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark'); // <--- This remembers "Dark"
            toggleBtn.innerText = '🌙'; 
            toggleBtn.style.background = '#f4f4f4';
            toggleBtn.style.color = '#333';
        } else {
            localStorage.setItem('theme', 'light'); // <--- This remembers "Light"
            toggleBtn.innerText = '☀️'; 
            toggleBtn.style.background = '#333';
            toggleBtn.style.color = '#f1c40f';
        }
    });
}
// 1. THE DATA (Array of Objects)
// This is our "database" of projects.
const projects = [
    { name: "Library Management System", lang: "C" },
    { name: "Tic-Tac-Toe Game", lang: "C" },
    { name: "Portfolio Website", lang: "HTML/CSS/JS" },
    { name: "Sudoku Solver", lang: "C++" }, // Adding a new one is easy now!
    { name: "Github", lang: "Git" },
];


// 2. THE RENDER FUNCTION
// This loops through the data and paints the screen
function renderProjects() {
    // Get the pointer to the empty list in HTML
    const listContainer = document.getElementById('project-list');
    
    // Clear it just in case (optional, but good practice)
    listContainer.innerHTML = '';

    // Loop through the array (Like: for(int i=0; i<size; i++))
    projects.forEach(project => {
        // Create a new <li> element (Like malloc)
        const newItem = document.createElement('li');
        
        // Set the text content: "Name (Lang)"
        newItem.textContent = `${project.name} (${project.lang})`;
        
        // Append it to the parent list
        listContainer.appendChild(newItem);
    });
}

// 3. INITIALIZE
// Call the function immediately when the script loads
renderProjects();


// 1. SELECT: Get the pointer to the button (Global Variable)
const btn = document.getElementById('toggle-btn');

// 2. LOGIC: The function to run
function toggleTheme() {
    // Debugging Tip: Print to the console to prove the function ran
    console.log("Button was clicked! Toggling class... BAMMMMMMMMMM!!!!!!!!!!!!!");
    
    // Toggle the class on the body
    document.body.classList.toggle('dark-mode');
}

// 3. LISTEN: Connect the pointer to the logic
// If this line is missing, the button is just a dumb rectangle.
if (btn) {
    btn.addEventListener('click', toggleTheme);
} else {
    console.error("Error: Could not find the button element!");
}   
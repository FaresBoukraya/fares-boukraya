document.addEventListener('DOMContentLoaded', function() {
    const factButton = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');
    const facts = [
        "The first operating system was developed in the early 1950s.",
        "Multitasking allows an operating system to run multiple programs simultaneously.",
        "The kernel is the core component of most operating systems.",
        "Open-source operating systems like Linux allow users to modify their source code.",
        "Virtualization allows one operating system to run within another."
    ];

    factButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
});
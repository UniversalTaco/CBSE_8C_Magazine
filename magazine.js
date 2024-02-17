// Declare variables
let title, subtitle;
let downloadButton;
let firstEntry;

function setup() {
    // Create canvas
    createCanvas(windowWidth - 50, windowHeight - 50);

    // Get the first entry from local storage
    firstEntry = localStorage.getItem("firstEntry");

    // Check if it's the first entry
    if(firstEntry === null || firstEntry === undefined) {
        localStorage.setItem("firstEntry", true);
        alert("This website is optimised for computers, but is meant to also be compatible with other devices as well!");
    }

    // Set text size
    textSize(50);

    // Display title
    title = text("Access The CBSE 8C Class Magazine!", windowWidth / 2 - 420, windowHeight / 2 + 150);

    // Create download button
    downloadButton = createButton("Download (.DOCX)");
    downloadButton.position(windowWidth / 2 - 75, windowHeight / 2 + 200);
    downloadButton.mousePressed(downloadFile);
}

function draw() {    
    // Log success message
    console.log("Website startup is a success!");
} 

function downloadFile() {
    // Alert the user
    alert("Redirecting you to another site!");

    // File URL
    let filePath = "https://raw.githubusercontent.com/UniversalTaco/CBSE_8C_Magazine/main/Document.docx";

    // Open the file in a new tab
    window.open(filePath, '_blank');
}



// Declare variables
let title, subtitle;
let downloadButton;
let firstEntry;

function setup() {
    // Create canvas
    createCanvas(windowWidth - 50, windowHeight - 50);

    // Get the first entry from local storage
    firstEntry = localStorage.getItem("firstEntry");

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
    // Check if it's the first entry
    if(firstEntry === null || firstEntry === undefined) {
        alert("This website is optimised for computers, but is meant to also be compatible with other devices as well!");
        localStorage.setItem("firstEntry", true);
    }
} 

function downloadFile() {
    // Alert the user
    alert("Redirecting you to another site!");

    // Download file
    let filePath = "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FUniversalTaco%2FCBSE_8C_Magazine%2Fmain%2FDocument.docx&wdOrigin=BROWSELINK";
    window.open(filePath);
}




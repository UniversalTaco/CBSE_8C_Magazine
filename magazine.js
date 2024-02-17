// Declare variables
let title, subtitle;
let downloadButton;
let firstEntry;

function setup() {
    // Create canvas
    createCanvas(windowWidth-15, windowHeight-20);
    background("rgb(0,0,51)")

    // Get the first entry from local storage
    firstEntry = localStorage.getItem("firstEntry");

    // Check if it's the first entry
    if(firstEntry === null) {
        localStorage.setItem("firstEntry", true);
        firstEntry = localStorage.getItem("firstEntry");
        alert("This website is optimised for computers, but is meant to also be compatible with other devices as well!");
    }

    // Set text theming
    textSize(windowWidth/37.5);
    fill("yellow")
    stroke("orange")
    strokeWeight(4)


    // Display title
    title = text("Download The CBSE 8C Class Magazine!", windowWidth / 4, windowHeight / 1.5);

    // Create download button
    downloadButton = createA("https://raw.githubusercontent.com/UniversalTaco/CBSE_8C_Magazine/main/Document.docx", "Download (.DOCX)", "_blank");
    downloadButton.position(windowWidth / 2.2, windowHeight / 1.4);
    downloadButton.style('color', '#FFAA00')
}

function draw() {    
    // Log success message
    console.log("Website startup is a success!");
}

var title, subtitle;
var downloadbutton;
var firstentry;

function setup() {
    createCanvas(windowWidth-50,windowHeight-50);
    firstentry = localStorage.getItem("firstentry")
    textSize(50);
    title = text("Access The CBSE 8C Class Magazine!",windowWidth/2-420,windowHeight/2+150);
    downloadbutton = createButton("Download (.DOCX)")
    downloadbutton.position(windowWidth/2-75,windowHeight/2+200)
    downloadbutton.mousePressed(function() {
        alert("Redirecting you to another site!")
        downloadFile("https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FUniversalTaco%2FCBSE_8C_Magazine%2Fmain%2FDocument.docx&wdOrigin=BROWSELINK");
    });
}

function draw() {    
    if(firstentry === null || firstentry === undefined) {
        alert("This website is optimised for computers, but is meant to also be compatible with other devices as well!")
        localStorage.setItem("firstentry",true)
    }
} 

function downloadFile(filePath) {
    window.open(filePath);
}




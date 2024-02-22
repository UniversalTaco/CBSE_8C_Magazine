//Variables
let lobbyMusic;
let entrylog;
let page;
let deco1, timer1, deco2, timer2;
let fullscreenBtn, audioBtn;
let downloadMag;

//Loading images & songs
function preload() {
    lobbyMusic = loadSound("lobbymusic.mp3");
}

//Defining everything
function setup() {

    new Canvas();

    let entrylog = localStorage.getItem("entry");

    //Updating entries
    if(entrylog === null) {
        
        alert("Hello, welcome to the website! Before you begin, please note that the website is optimized for computers but also works with touch devices.");
        localStorage.setItem("entry",1);
        entrylog = localStorage.getItem("entry");

    } else if(entrylog > 0) {
        entrylog = Number(entrylog) + 1;
        localStorage.setItem("entry",entrylog);
    }else if(entrylog <= 0){
        alert("DON'T TAMPER WITH THE CODE....HISSSSS!!!!! Now the website will reset because of your childish actions :/");
        localStorage.setItem("entry",1);
        location.reload();
    }

    //For the dedicated ones
    if(entrylog === 2) {
        alert("welcome back, seen you before ;)");
    }else if(entrylog === 3) {
        alert("third times the charm!");
    }else if(entrylog === 5) {
        alert("5 times, that is how many fingers I have!");
    }else if(entrylog === 6) {
        alert("Six, that is how many fingers Krithik Roshan hand has, what a quirk!!");
    }else if(entrylog === 10) {
        alert("Nice, double digit visit! That's 2 hands.");
    }else if(entrylog === 15) {
        alert("15, that requires 3 hands, lemme ask Krithik Roshan is he has an extra one...Nah, can't buy it from him :(");
    }else if(entrylog === 50) {
        alert("50, half century! Our class likes cricket, so I really had to put this here...");
    }else if(entrylog === 69) {
        alert("nice! ;)");
    }else if(entrylog === 100) {
        alert("Triple digits! Jobless person, you just reached a 100 visits! I ain't gonna reward you for such behaviour, no easter eggs from now on!");
    }

    //Session
    page = sessionStorage.getItem("page");

    //page selector
    if(page === null) {
        page = "prelogue";
        sessionStorage.setItem("page","prologue");
    }

    //timers
    timer1 = 0;

    //Fullscreenbutton
    fullscreenBtn = new Sprite();
    fullscreenBtn.width = canvas.w/10;
    fullscreenBtn.height = canvas.h/20;
    fullscreenBtn.x = canvas.w-fullscreenBtn.w/2;
    fullscreenBtn.y = fullscreenBtn.h/2;
    fullscreenBtn.color = "#000066";
    fullscreenBtn.stroke = "#FFD500";
    fullscreenBtn.strokeWeight = canvas.w/640;

    //Audio
    audioBtn = new Sprite();
    audioBtn.width = canvas.w/10;
    audioBtn.height = canvas.h/20;
    audioBtn.x = canvas.w-audioBtn.w*1.6;
    audioBtn.y = audioBtn.h/2;
    audioBtn.color = "#000066";
    audioBtn.stroke = "#FFD500";
    audioBtn.strokeWeight = canvas.w/640;

}

function draw() {

    background("#000066");

    //timer
    timer1 = timer1+1;

    //buttonfunction
    if(fullscreenBtn.mouse.released()) {
        if(fullscreen()) {
            fullscreen(false);
        }else {
            fullscreen(true);
        }
    }

    //FSButton/Text
    if(fullscreenBtn.mouse.hovering()) {
        fullscreenBtn.visible = false;
    }else{
        fullscreenBtn.visible = true;
    }
    if (fullscreen()) {
        textSize(canvas.w / 40);
        fill("#FFD500");
        stroke("#FF6619");
        strokeWeight(2);
        text("Exit", canvas.w - fullscreenBtn.w, fullscreenBtn.h); 
    } else {
        textSize(canvas.w / 50);
        fill("#FFD500");
        stroke("#FF6619");
        strokeWeight(2);
        text("Fullscreen", canvas.w - fullscreenBtn.w, fullscreenBtn.h);
    }
    if(audioBtn.mouse.hovering()) {
        audioBtn.visible = false;
    }else{
        audioBtn.visible = true;
    }
    if(lobbyMusic.isPlaying() === true) {
        textSize(canvas.w/60);
        text("Music: On",canvas.w-fullscreenBtn.w-audioBtn.w,audioBtn.h);
    }else{
        textSize(canvas.w/60);
        text("Music: Off",canvas.w-fullscreenBtn.w-audioBtn.w,audioBtn.h);
    }
    if(audioBtn.mouse.released()) {
        if(lobbyMusic.isLoaded() && lobbyMusic.isLooping() === false) {
        lobbyMusic.stop();
        lobbyMusic.play();
        lobbyMusic.loop();
        }else{
            lobbyMusic.stop();
        }
    }
    

    //Pageloader
    page = sessionStorage.getItem("page");
    if(page === "prologue") {

        //Disclaimer
        text("Created by Ansh CBSE 8C.",canvas.w/10,canvas.h/10);
        text("Fullscreen and Music can be enabled/disabled from the top right corner!",canvas.w/10,canvas.h/5);
        text("This website relies on local and session storage to function. Don't tamper!",canvas.w/10,canvas.h/4);
        text("Libraries:",canvas.w/10,canvas.h/3);
        text("P5.js",canvas.w/5,canvas.h/2.5);
        text("P5.Sound.js",canvas.w/5,canvas.h/2.25);
        text("P5Play.js",canvas.w/5,canvas.h/2.05);
        text("Planck.min.js",canvas.w/5,canvas.h/1.9);
        text("All the source code and files is stored in a github repository.",canvas.w/10,canvas.h/1.5);
        text("Click anywhere to continue!",canvas.w/1.35,canvas.h/1.05);

        if(mouse.released()) {
            page = "homescreen";
            sessionStorage.setItem("page","homescreen");
            lobbyMusic.play();
        }
    }else if(page === "homescreen") {

        //Decoration
        if(timer1 >= 15) {
            deco1 = createSprite(random(10,30),canvas.h,random(canvas.w/60,canvas.w/30));
            deco1.color = "#000066";
            deco1.stroke = "#FFD500";
            deco1.strokeWeight = canvas.w/384;
            deco1.vel.y = random(-canvas.w/640,-canvas.w/384);
            deco1.vel.x = random(0,canvas.w/1280);
            deco1.life = 250;
            timer1 = 0;
        }

        //Title
        textSize(canvas.w/15);
        fill("#FFD500");
        stroke("#FF6619");
        strokeWeight(canvas.w/240);
        text("CBSE 8C Class Website!",canvas.w/8,canvas.h/2);

        if(downloadMag === undefined) {
                //Downloadmag
            downloadMag = new Sprite(canvas.w/2,canvas.h/1.5,canvas.w/5,canvas.w/30);
            downloadMag.color = "#FFD919";
            downloadMag.stroke = "#FF6A4D";
            downloadMag.strokeWeight = canvas.w/384;
            downloadMag.textSize = downloadMag.w/10;
            downloadMag.text = "Download Magazine";
        }

        if(downloadMag.mouse.released()) {
            window.open('https://raw.githubusercontent.com/UniversalTaco/CBSE_8C_Magazine/main/Document.docx', '_blank');
        }
    }

    //QuickFix
    if(page === null) {
        alert("DON'T TAMPER!!! Rebooting the website. y u do dis?");
        sessionStorage.clear();
    }
    
}
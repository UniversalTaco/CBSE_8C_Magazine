//Variables
let lobbyMusic;
let entrylog;
let page;
let deco1, timer1, deco2, timer2;
let fullscreenBtn, audioBtn, homeBtn, classAch;
let downloadMag, ourStudents;
let student, studentRollno, studentBtn;

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
    fullscreenBtn.collider = "k";

    //Audio
    audioBtn = new Sprite();
    audioBtn.width = canvas.w/10;
    audioBtn.height = canvas.h/20;
    audioBtn.x = canvas.w-audioBtn.w*1.6;
    audioBtn.y = audioBtn.h/2;
    audioBtn.color = "#000066";
    audioBtn.stroke = "#FFD500";
    audioBtn.strokeWeight = canvas.w/640;
    audioBtn.collider = "k";

    //Home
    homeBtn = new Sprite();
    homeBtn.width = canvas.w/10;
    homeBtn.height = canvas.h/20;
    homeBtn.x = homeBtn.w/2;
    homeBtn.y = homeBtn.h/1.75;
    homeBtn.color = "#000066";
    homeBtn.stroke = "#FFD500";
    homeBtn.strokeWeight = canvas.w/960;
    homeBtn.collider = "k";

    //Student
    student = 1;

    //Roll No.
    studentRollno = createInput();
    studentRollno.position(canvas.w/2.2,canvas.h/1.25);
    studentRollno.hide();
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

    //AudioBtn/Text
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

    //HomeBtn/Text
    if(homeBtn.mouse.hovering()) {
        homeBtn.visible = false;
    }else {
        homeBtn.visible = true;
    }

    if(page !== "homescreen") {
        textSize(canvas.w/50);
        text("Menu",homeBtn.w/3.5,homeBtn.h);
        studentRollno.hide();
    }else{
        textSize(canvas.w/50);
        text("Notice",homeBtn.w/4,homeBtn.h);
    }

    if(homeBtn.mouse.released()) {
            if(page !== "homescreen"){
            page = "homescreen";
            sessionStorage.setItem("page","homescreen")
            downloadMag = undefined;
            ourStudents = undefined;
            classAch = undefined;
        }else{
            alert("Developer: Ansh Jadhav, Contribution: All of CBSE 8C ;). Don't mess with the local and session storage btw. Have a great day ahead!")
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
        strokeWeight(canvas.w/216);
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

        if(ourStudents === undefined) {
            //Studentbutton
            ourStudents = new Sprite(canvas.w/2,canvas.h/1.35,canvas.w/5,canvas.w/30);
            ourStudents.color = "#FFD919";
            ourStudents.stroke = "#FF6A4D";
            ourStudents.strokeWeight = canvas.w/384;
            ourStudents.textSize = downloadMag.w/10;
            ourStudents.text = "Our Class Students!";
        }
        if(ourStudents.mouse.released()) {
            page = "students";
            sessionStorage.setItem("page","students");
            downloadMag.remove();
            ourStudents.remove();
            classAch.remove();
        }

        if(classAch === undefined) {
            classAch = new Sprite(canvas.w/2,canvas.h/1.225,canvas.w/5,canvas.w/30);
            classAch.color = "#FFD919";
            classAch.stroke = "#FF6A4D";
            classAch.strokeWeight = canvas.w/384;
            classAch.textSize = downloadMag.w/10;
            classAch.text = "Our Class Overview!";   
        }
        if(classAch.mouse.released()) {
            sessionStorage.setItem("page","class");
            downloadMag.remove();
            ourStudents.remove();
            classAch.remove();
        }

    }else if(page === "students") {
        studentRollno.show();
        sessionStorage.setItem("student",studentRollno.value());
        student = parseInt(sessionStorage.getItem("student"));
        textSize(canvas.w/20);
        fill("#FFD500");
        stroke("#FF6619");
        strokeWeight(canvas.w/384);
        text("Students Of Our Class!",canvas.w/5,canvas.h/10);
        if(student === 1) {
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("1. Aaron:", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No description provided by him. Might as well fill it up. He is a smart boy who is a great goalkeeper in football! He likes to study mathematics and various fields of science, especially astronomy. (Subject 1 is known to go haywire at times, proceed with caution!)", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 2){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("2. Aditi", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi, my name is Aditi. I enjoy sketching, crafting, dancing(Bharthanatyam),calligraphy(mostly my own name), singing and cooking but I am really scared of dogs and cats and I hate crowded places. Another thing to know about me is that I am an INFP personality type you should try finding your’s to! i will help in finding your ideal type in friendship. I was shifted to this class in the middle of the year but I never felt this much connection to a class. I am really going to miss the joyfulness and liveliness the class brings, but sometimes it could be a bit too active but that’s fine because that brought many more memories to carry. There is much more to each person in this class than what they show you. I am really going to miss the friends who are leaving Singapore for good and hope to meet the others next year soon! I really thought the teachers we got this year are amazing and are really open and friendly special thanks to Manisha ma’am for tolerating this “ACTIVE” class while being kind and friendly", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 3){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("3. Aishwarya", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No description. Sigh...Quiet, reserved. Friend of Ananya", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 4){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("4. Ananya", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No Description...Friend of Aishwarya and Hansika, interested in arts and crafts", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 5){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("5. ANSH ;)", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("This is going to be awkward...Hello there, my name is Ansh! Grade 8 was a wild journey for me, being part of two CBSE 8Cs. Both of them were incredible experiences, each class filled with moments of frenzy and calamity. There were many unexpected moments such as me becoming the prefect, getting my entire class dissolved, getting a new set of teachers twice and many more. This may seem bothersome at first but it opened a gateway to many unique experiences, each with their own quirks! Overall, this year was incredible, I got to meet many new people and made many new friends along the way! My hobbies include playing video games, sports like football and badminton, coding, cooking, diving unnecessarily deep into random topics, studying a few fields of science (namely biology and astronomy)", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 6){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("6. Atharva", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No description streak goes on...my legally allocated partner. Likes Fortnite and has a habit of drinking something everyday. Lucky boi. He is best friends with Geetha!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 7){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("7. Bhavish", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("NO DESCRIPTION AGAIN? He is a charming and charismatic individual who is a big fan of cricket! Friends with Rajas, Raunak, R&H and Laksh.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 8){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("8. Dharshan", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("A very playful and atheltic person taking interest in many sports and friends with Pritish, Yohan, Pughal and more!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 9){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("9. Geetha", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("About me : Hello my name is geetha krishna sai degala.i’m kinda funny,good looking and i totally “respect my friends”.i have the most trophies in brawl stars,im good in cricket and football (except for basketball),i was in dance,i have a  huge collection of cars and Im huge fan for power star pawan kalyan. Da class : We have the best class teacher Manisha ma’am and this was the best grade i have ever been because of strange things like 20 balls getting confiscated, Keerthana and Rohan breaking tables (insert hulk smash scene), me vs the prefects for the duster, Uddiran being whattttt 5”11, Atharva’s hardcore diet thumbs up and Ribena in 2nd floor cafeteria, Vrishav having 2 incident  slips, Kartikeya having the best “hairline”, Pritish be having to be our leader by being short,rajas saying he is going to break our Kurkures and Kartikeya just existing.but jokes apart this class is filled with laughter and Kartikeya getting roasted i had created strong connection with my friends so much that I would be depressed well they are Vrishav, Thumbs up loves Ribena, Thomas, Omar, “Juan”, Roshan, Vaibhav, Uddiran and trust me when i say this Rajas, Joyana, basically the whole Tamil batch, and secret friend which i didn't tell. but my bestest friend is tThumbs up(atharva) and Vrishav I wish this class stays the same in every grade but some people like Me, Raunak, Shravani, (maybe)Uddiran etc are leaving this school(insert sad song with sad emoji)", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 10){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("10. Hansika", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No desc continues...Hansika is a talented artist who shines in various fields of arts and academics. She is good friends with Ananya.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 11){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("11. Harshith", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No desc. Harshith is quiet and reserved. He is exceptionally good at Mathematics, swift in his calculations. He is quite obedient and follows all rules!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 12){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("12. Joyana", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("No desc. A very sociable person with a great attitude, taking the form of a leader. Friends with Sravani, Keerthana, Aditi.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 13){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("13. Juan", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("This is really testing my knowledge of how well I know my classmates...Juan is a shy and timid guy who likes to hang out with his friends. He is quie cooperative and funny. A nice person to have alongside you!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 14){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("14. Julian", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Me !!!! I really love music, especially the band called BMTH and I also like watching many types of movies.The sport I like the most is football. (Let's not talk about my studies) About my experience in 8th grade: One of the best classes been out of all my grades. I liked the innocence and kindness in our class the most. Never had a bad day in school .There is absolutely nothing wrong with the class and I felt it was literally a perfect class with the best class teacher in the world(drum rolls) Ms.Manisha ma'am!!!!!. Honestly I loved everyone in class", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 15){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("15. Jyothsana", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("About me:Hi everyone my name is Jyothsana and i like animals especially dogs.My favourite breed of dogs are the German Shepherd and golden retriever.I love learning about different species of animals and their way of life.I recently discovered that I have a passion for photography through my cca.I like encyclopaedias and I like horror stuff in general like the game Bloody Mary.some of my achievements are second in relay race in 4th grade and second place in the robotics competition.I also like law and debate. Experience with my class: My class is very Chaotic yet dynamic.It is a very fun and active class.The experiences taking place in my class makes me question if my classmates have some screws loose.My classmates have so much energy in them especially the boys.Hats off to Manisha ma’am for being the best teacher we could ask for,ma’am was very patient with us and treated us like we  were her friends.Even though there are many crackheads in  my class(including myself) I see all of us as a group of siblings fighting with each other.There many hilarious moments in our class that made me crack up like crazy.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 16){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("16. Khanak", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Another shy and reserved person. Friends with Jyothsana. Likes origami (not too sure on this one)", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 17){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("17. Laksh", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi everyone, I am Laksh of CBSE 8C. This year has been one of the most happening years of my life. I recently moved to Singapore from India. A new school, new environment, and new culture was ahead for me. I was slightly anxious and apprehensive for this shift, but thanks to the environment of this class, and the helpful nature of the class, the shift for me was quite relaxed and easy. Apart from the class, the school also provided me with an array of opportunities to indulge into, like sports, journalism, extracurricular activities and many more. From events like cricket tournaments and Sports Day, to events like SMART360, MUNs, QC Presentations, this school had it all! Through these events, I further developed my level of confidence, obtained learning experiences and had plenty of memorable moments. Coming here, I got to explore and dive into many of my hobbies, which was great! My hobbies are playing cricket, cycling, reading and fishing. Another interest of mine is to dig into and have knowledge of Global Politics and World History. Events occurring in school gave me the chance to compete and participate in events of these hobbies of mine. All in all, it has been a joyful and memorable year and I look forward to spending another year in GIIS", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 18){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("18. Omar", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("A great guy. Good sense of humor and a great companion to have. He is great at playing video games, especially Call of Duty, Apex legends and Fortnite. He has a great sense of humor and keeps up with memes (Even the garbage 2023 ones)", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 19){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("19. Pritish", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Pritish is a friendly and sociable person who is great to hang out with. He can make great sigma faces!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 20){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("20. Pughalmaran", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Ok, I have had it. No more good descriptions for ppl who didn't submit anything!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 21){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("21. Rajas", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Cricket fan, met him at 3rd Grade!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 22){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("22. Raunak", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("This year has been truly unforgettable, not only because of my love for cricket but also because of the incredible friendships I've formed. Winning the gold medal in the cricket ACSIS tournament was undoubtedly a highlight, but it was the support of my friends that made the victory even sweeter. Whether we were celebrating a win on the field or cheering each other on at school events like Sharks Den, Progressio, and the Hackathon, my friends were always there, lifting me up and making every moment memorable. As I prepare to leave school and the country, it's the thought of leaving behind these cherished friendships that weighs heaviest on my heart. Saying goodbye won't be easy, but I take comfort in knowing that the bonds we've forged will withstand any distance. No matter where life takes us, the laughter, shared experiences, and continuous support of my friends will always remain close to my heart, reminding me of the incredible journey we've shared together.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 23){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("23. Rohan", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi everyone, I am Rohan Sabaresh Mohan from cbse 8c .This year is one of the most important years of my life as I am moving from Singapore to India and it is going to be my first and last year here in Giis. It was really a good exposure for me to be with alot of Indian friends, as I was previously from a local school . But many of my friends made me fit into this school. At first I was sceptical about this school as many of the students made fun of my accent and my pronunciation. But once I confronted them on how I felt about this they were really understanding and made me fit in. Some academic accomplishment that I made this year was getting International Rank 14 in NSO and taking part in a coding competition in which I did not win, but made many new friends and learned a lot of cool stuff .All together it was a really joyful and fun year here at Giis but I am excited to see what my future holds for me.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 24){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("24. Roshan", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hello, everyone my name is Roshan and I am from CBSE 8C. This year for me has been one of the best experiences I have ever had in my whole school life. From laughing with my peers and always being joyful, I had a great time. My teachers in this academic year were quite awesome and also helped build confidence in myself as we go forward in academics. I had also attended an event organised by the school which is called the MUN. I had a great experience participating in the event as it helped me overcome my stage fright by talking in front of 25 people ! It has also helped me to develop more leadership skills and to stutter less while talking in front of various other people. My hobbies and interests are playing football, reading various types of books, and learning a new skill: drawing and photography. I also like to learn zoology in detail as it tells me about various animals that exist.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 25){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("25. Ruhaan", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("GD sweat, Rubiks cube Sweat, Table Tennis Sweat. Fortnite player", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 26){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("26. Karthikeya", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hello, I'm Karthikeya! I'm passionate about various interests that keep me engaged and excited. Basketball is my love on the court, where I thrive on the adrenaline rush of the game. When I'm not shooting hoops, you'll find me immersed in the virtual battlefield of Call of Duty, where my skills have earned me the prestigious PRO III rank. Aside from gaming, I channel my creativity into art, finding joy in expressing myself through various mediums. But that's not all; I have a penchant for expanding my intellectual horizons by delving into the intricacies of programming languages. History fascinates me deeply; learning about the past enriches my understanding of both my origins and the world around me. Exploring historical narratives allows me to connect with the essence of the places I come from and inhabit. Moreover, I'm an avid researcher when it comes to cars. Delving into the specifications, designs, and histories of automobiles is both a hobby and a passion of mine. From classic models to cutting-edge innovations, I love uncovering the stories behind these mechanical marvels. And above all, I cherish the opportunity to forge meaningful connections with intelligent minds, exchanging ideas and insights that inspire growth and exploration.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 27){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("27. Shankar", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("I recently joined GIIS in the last quarter of the 2023-24 academic year. As I am from a local school, it is a very big transition for me. I have tons of work to do, having to learn the entire syllabus in 2 months. My hobbies include reading, random shading with pencil, and building legos’. Building legos’ has been a huge part of my childhood, building my creativity. I have a few friends in GIIS (Vrishav, Rajas, Geetha, Jay, Varun, Sarthak, Darshan, Pughal, Karthik and so on..) and they help me transition from local school and also help me get accustomed with this new life.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 28){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("28. Sravani", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi! I am sravani.My hobbies are to dance,sing,draw,paint etc.Out of all these, my passion is to dance which I love the most and it is something I do with no limit.  I have enjoyed the whole year and made a lot of memories with this class.Everyone of you being so unique and special had made this memory a very special one .I would love to thank Manisha ma’am for being there with us and making it a fabulous experience this year .", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 29){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("29. Srikeerthana", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi, I’m Srikeerthana but everyone calls me Keerthana. My hobbies are dancing, reading, drawing and so many more! In most of my free time I really do enjoy dancing. I have been dancing for as long as I can remember and have participated in various competitions. This year was one memorable one. I have made so many new friends and so many more memories which I will always remember. I really enjoyed my time with the class. This is one of my favourite classes ever. Thank you everyone for making it special and Thank you toManisha Ma’am who is  always there to support us.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 30){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("30. Thomas", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi, I’m Thomas from 8C CBSE and I just came to Singapore this year from India. I had a big change this year like, in syllabus, transport, friends and many more. I was so nervous in my first days but this school provided me with a buddy, Yohan, who was very helpful in blending in with the group. Now, I have many friends and I’m no longer shy. In the first 2 months Akansha Ma’am was my class teacher then after June vacation I had a class shift from 8D-8C. Then the rest of the year Manisha Ma’am was my class teacher. All my teachers taught me new things, cleared my doubts and did innovative things to understand concepts. I won silver medal in long jump and my house was No-1 on sports day. I also joined for annual day and it removed my stage fear. Without a doubt, this year was a memorable one. When it comes to my personal interests and hobbies, I have always liked to draw since my childhood. It helps me make good use of my time. I went to art classes last year and learned more new techniques and methods for drawing. This annual day, I participated in arts and I painted Queen Elizabeth. I also enjoy playing football and badminton. This year I learnt how to play basketball  as it was my ECA. So I would like to thank all my teachers, friends, parents and classmates for always supporting me. Looking forward for more…", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 31){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("31. Uddiran", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("I am Uddiran. My hobbies are playing cricket, badminton, and basketball  . Before I used to do art but nowadays I don’t do it too much.I like playing guitar and now I want electric guitar .In cricket i like fielding and to face high speed balls.I like basketball as  it is fun aiming at the hoop and now I am improving . I might be the tallest in the class but my goal is to reach 6'3” , I hope I reach my goal.I like studying science mostly about the universe. I came to Singapore from Assam,India. I joined GIIS as many people told me it is a good school .On the first day of my school my first buddy Pughal helped me with everything .But after some days I made new friends in the language 2 class. I improved in many of my favourite sports such as cricket, football,and basketball. My friends always helped me in all my work . This year was a memorable one.In Art I learnt different types of Arts which I didn't do in my old school .In cricket I learnt to play with hardball and did a lot of practice.By playing football I made most of my memory with my friends but before in my old school, I always was the defender and now I can play in every position. I would like to thank all my teachers for teaching us and for clearing all doubts etc.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 32){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("33. Vaibhav", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("Hi, My name’s Vaibhav, and I am from CBSE 8C.  I enjoy activities like cycling, sketching, drawing, painting, programming, and my all-time favourite sport, Football. Singapore has been my home since December 2021, and over these years, I've come to appreciate the unique experiences and opportunities this city has to offer. I consider myself a chill guy, always up for a good time and open to meeting new people. This Class is nothing but a gem.. filled with diverse people with illuminating personalities—my experience with this class for the entire Academic Year had a smile on my face every day. I vividly remember the first day I entered this class, I was anxious…seeing new people, new teachers and a new environment... Due to the friendly nature of all my new classmates, the transition from 7th to 8th Grade was smooth.Our class teacher, Manisha Ma'am, one of the friendliest teachers I had ever met, appointed me and Aditi as the Class Discipline monitor. This allowed me to venture and ensure the class was disciplined thus making me a sort of Role model for the class.Other than that, the School provided me with a lot of events to participate in (which I did) ranging from the MUN Conference to ECO-CARNIVAL (Hosted in Punggol CC). From these Events, I developed my Confidence, social skills and Leadership abilities. I am looking forward to spending another year in GIIS!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        } else if(student === 33){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("33. Varun", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("He didn't give a description, the funniest thing is that his brother Rohan gave one! They are identical twins, so just copy and paste Rohan's about page. Hope Varun doesn't see this.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 34){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("34. Vrishav", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("This year was a great one for me, who had a decline in academics and hobbies due to a decrease in hobbies during the previous years. However, at this school, I cultivated his proficiencies in ART and academics through vast exposure. Participating in competitions like Progressio, Codejam, and Hackathon, I continued to put in effort. In recent months, I have been focusing on editing, animation, and drawing more than before. The school has changed from my previous school to GIIS, and the annual art display gave me confidence and improved his situation when it came to stammering. my teacher, Manisha ma'am, helped me change my mentality and avoid physical confrontations. I had good friends in Class,  including Thomas, Shan, Thumbs up, Aaron, and Geetha, who had the same humour as me In his future endeavours,I aspire to be great academically and in art..In my future. I wish to be great academically ,and in art. My responsibilities in class 8C is the GC MONITOR. I post the work in a timely manner with well text Modification for the last 6 months. I post the daily work,homework and with stuff like DA or important assignments I specially put it in bold. So basic summary may Ruhaan be 16 not 11 or (lawyers advised me not to finish da joke)karthikeya hairline being so far back that he begins to like history or the fact that Rajas watches way too many movies,atharva binge drinking thumbs up and having a shared relationship with ribena.Aaron cracking 90s.Me having a record for having most incident slips for no damn reason.the nah id win,are u aaron because ur the smartest or are u the smartest because u are aaron.).and the certain genius who proposed the despicable question banana+water=oppenheimer but all in all what makes 8c 8C  is the fact that everyone have their own jokes and flaws but as long we all are friends they are overshadowed.", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else if(student === 35){
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("35. Yohan", canvas.w/5, canvas.h/5);
            textSize(canvas.w/90);
            fill("white");
            let lines = splitText("I quit. Dharshan's friend, Pritish's friend too. Quite a joyful person!", 20);
            for(let i = 0; i < lines.length; i++) {
                text(lines[i], canvas.w/5, canvas.h/4 + i * 20);
            }
        }else{
            textSize(canvas.w/40);
            fill("yellow");
            noStroke();
            text("Valid Roll Number 1-35", canvas.w/5, canvas.h/5);
        }
    }else if(page === "class") {
        textSize(canvas.w/30);
        text("Our Class Overview!",canvas.w/3,canvas.h/10);
        textSize(canvas.w/60);
        text("1. Most well behaved! (Surprising IK)",canvas.w/4,canvas.h/5);
        text("2. Isolated! (not so surprising)",canvas.w/4,canvas.h/4);
        text("3. Best Class Teacher! (Not surprising at all), Manisha Ma'am!", canvas.w/4, canvas.h/3.35);
        text("4. Many Extraordinary Students!", canvas.w/4,canvas.h/2.9);
        text("5. The most CREATIVE class (Art and Video Edits)",canvas.w/4,canvas.h/2.5);
        text("6. Most versatile class! (Sports, academics, gaming)", canvas.w/4,canvas.h/2.25);
        text("7. Best Prefect (Shameless plug)", canvas.w/4, canvas.h/2.05);
        text("There is many more things I can mention. But I will stop, I am out of time :(",canvas.w/4,canvas.h/1.75);
        textSize(canvas.w/45);
        text("Great round of applause to all the students who made all of the above possible!!!",canvas.w/7,canvas.h/1.25);
    }

    //QuickFix
    if(page === null) {
        alert("DON'T TAMPER!!! Rebooting the website. y u do dis?");
        location.reload();
        sessionStorage.setItem("page","prologue");
    }
    console.log(studentRollno.value());
    }

function splitText(text, wordsPerLine) {
    let words = text.split(' ');
    let lines = [];
    for(let i = 0; i < words.length; i += wordsPerLine) {
        lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
    return lines;
}
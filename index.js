// THIS IS FOR PTC SLIDER
let index = 0;
const about_who = [
    "ABOUT BINI",
    "ABOUT AIAH",
    "ABOUT COLET",
    "ABOUT GWEN",
    "ABOUT JHOANNA",
    "ABOUT MALOI",
    "ABOUT MIKHA",
    "ABOUT SHEENA",
    "ABOUT STACEY"
];

const images = [
    'ptcmain.jpg',
    'AIAH.jpg',
    'COLET.jpg',
    'GWEN.jpg',
    'JHOANNA.jpg',
    'MALOI.jpg',
    'MIKHA.jpg',
    'SHEENA.jpg',
    'STACEY.jpg'
];
const real_names = [
    "BINI",
    "Maraiah Queen Arceta",
    "Ma. Nicolette Vergara",
    "Gweneth L. Apuli",
    "Jhoanna Christine Robles",
    "Mary Loi Yves Ricalde",
    "Mikhaela Janna Lim",
    "Sheena Mae Catacutan",
    "Stacey Aubrey Sevilleja"
];
const stage_names = [
    "BINI",
    "AIAH",
    "COLET",
    "GWEN",
    "JHOANNA",
    "MALOI",
    "MIKHA",
    "SHEENA",
    "STACEY"
];

const birth_day = [
    "BINI",
    "January 27, 2001",
    "September 14, 2001",
    "June 19, 2003",
    "January 26, 2004",
    "May 27, 2002",
    "November 8, 2003",
    "May 9, 2004",
    "July 13, 2003"
];
const role = [
    "BINI",
    "Visual, Main Rapper, Sub Vocalist",
    "Main Vocalist, Lead Rapper, Lead Dancer",
    "Lead Vocalist, Lead Rapper",
    "Leader, Lead Vocalist, Lead Rapper",
    "Main Vocalist",
    "Main Rapper, Lead Dancer, Visual",
    "Main Dancer, Sub Vocalist",
    "Main Rapper, Lead Dancer, Sub Vocalist"
];

function updateSlider() {
    document.getElementById('slide').src = images[index];
    document.getElementById('ptc_number').innerText = `${index + 1}/${images.length}`;
    if(index == 0){
        document.getElementById("main").style.display = "block";
        document.getElementById("member").style.display = "none";
    }
    else{
        document.getElementById("main").style.display = "none";
        document.getElementById("member").style.display = "block";
    }
    document.getElementById("about_who").innerText = `${about_who[index]}`;
    document.getElementById("real_name").innerText = `${real_names[index]}`;
    document.getElementById("stage_name").innerText = `${stage_names[index]}`;
    document.getElementById("birth_day").innerText = `${birth_day[index]}`;
    document.getElementById("role").innerText = `${role[index]}`;
}

function nextImg() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevImg() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

updateSlider();

// THIS IS FOR PTC SLIDER

// THIS IS FOR PTC BUTTON
function AIAH(){
    document.getElementById('ptc_number').innerText = "2/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Aiah").style.display = "flex";
    document.getElementById("about_who").innerText = `${about_who[1]}`;
    document.getElementById("real_name").innerText = `${real_names[1]}`;
    document.getElementById("stage_name").innerText = `${stage_names[1]}`;
    document.getElementById("birth_day").innerText = `${birth_day[1]}`;
    document.getElementById("slide").src = images[1];
    document.getElementById("role").innerText = `${role[1]}`;
}
function COLET(){
    document.getElementById('ptc_number').innerText = "3/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Colet").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[2]}`;
    document.getElementById("real_name").innerText = `${real_names[2]}`;
    document.getElementById("stage_name").innerText = `${stage_names[2]}`;
    document.getElementById("birth_day").innerText = `${birth_day[2]}`;
    document.getElementById("slide").src = images[2];
    document.getElementById("role").innerText = `${role[2]}`;
}
function GWEN(){
    document.getElementById('ptc_number').innerText = "4/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Gwen").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[3]}`;
    document.getElementById("real_name").innerText = `${real_names[3]}`;
    document.getElementById("stage_name").innerText = `${stage_names[3]}`;
    document.getElementById("birth_day").innerText = `${birth_day[3]}`;
    document.getElementById("slide").src = images[3];
    document.getElementById("role").innerText = `${role[3]}`;
}
function JHOANNA(){
    document.getElementById('ptc_number').innerText = "5/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Jhoanna").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[4]}`;
    document.getElementById("real_name").innerText = `${real_names[4]}`;
    document.getElementById("stage_name").innerText = `${stage_names[4]}`;
    document.getElementById("birth_day").innerText = `${birth_day[4]}`;
    document.getElementById("slide").src = images[4];
    document.getElementById("role").innerText = `${role[4]}`;
}
function MALOI(){
    document.getElementById('ptc_number').innerText = "6/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Maloi").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[5]}`;
    document.getElementById("real_name").innerText = `${real_names[5]}`;
    document.getElementById("stage_name").innerText = `${stage_names[5]}`;
    document.getElementById("birth_day").innerText = `${birth_day[5]}`;
    document.getElementById("slide").src = images[5];
    document.getElementById("role").innerText = `${role[5]}`;
}
function MIKHA(){
    document.getElementById('ptc_number').innerText = "7/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Mikha").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[6]}`;
    document.getElementById("real_name").innerText = `${real_names[6]}`;
    document.getElementById("stage_name").innerText = `${stage_names[6]}`;
    document.getElementById("birth_day").innerText = `${birth_day[6]}`;
    document.getElementById("slide").src = images[6];
    document.getElementById("role").innerText = `${role[6]}`;
}
function SHEENA(){
    document.getElementById('ptc_number').innerText = "8/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Sheena").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[7]}`;
    document.getElementById("real_name").innerText = `${real_names[7]}`;
    document.getElementById("stage_name").innerText = `${stage_names[7]}`;
    document.getElementById("birth_day").innerText = `${birth_day[7]}`;
    document.getElementById("slide").src = images[7];
    document.getElementById("role").innerText = `${role[7]}`;
}
function STACEY(){
    document.getElementById('ptc_number').innerText = "9/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Stacey").style.display = "block";
    document.getElementById("about_who").innerText = `${about_who[8]}`;
    document.getElementById("real_name").innerText = `${real_names[8]}`;
    document.getElementById("stage_name").innerText = `${stage_names[8]}`;
    document.getElementById("birth_day").innerText = `${birth_day[8]}`;
    document.getElementById("slide").src = images[8];
    document.getElementById("role").innerText = `${role[8]}`;
}
// THIS IS FOR PTC BUTTON



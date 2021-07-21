const itemlist = ["Classic Guitar", "YAMAHA ELECTRIC ACOUSTIC GUITAR NTX700N", "ROCK and ROLL themed Electric Guitar", "V based Guitar", "Mendini High quality Violin",
    "Fenders Light Pick", "Pearl Full drum kit", "YAMAHA Bass drum", "Hermes eidition Tamborine", "High Quality Bongos", "A Classic Tabla", "Yamaha Clarinet",
    "Polished Brass Trumpet", "Maple wood Flute", "Scottish bagpipes", "HI-FI Speaker Setup", "Yamaha Piano Keyboard Power adpater",
    "Violin Bow", "Wooden Drum sticks"
]

var elements = document.getElementsByClassName("subBox");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("wheel", (event) => {
        event.preventDefault();
        elements[i].scrollLeft += event.deltaY
    });
}

var hello = document.getElementsByClassName("box");
for (let index = 0; index < hello.length; index++) {
    hello[index].addEventListener("click", () => {
        showImage(index);
    })
}
function showImage(index) {
    var variable=document.getElementById("bgImage");
    variable.style.zIndex=1;
    let  content = "<img src=\"../Assets/" + imageList[index] + "\" alt=\"" + altList[index] + "\" />";
    content +="<button type=\"button\" onclick=\"hideImage();\"class=\"backButton \" />Click me to go back</button>"
    variable.innerHTML = content;
} 
function hideImage() {
    var variable=document.getElementById("bgImage");
    variable.style.zIndex=-1;
   
} 
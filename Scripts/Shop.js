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
        shoppingKart(index);
    })
}
  
function shoppingKart(index) {
    let outputName;
    let userInput = prompt("Please enter the amount of this item you want");
    if (userInput == null || userInput == " "|| isNaN(userInput)) {
        alert("Enter a Valid number ");
    } else {
        alert("Added to cart sucessfully")
        setProduct(index, itemlist[index], userInput);
    }
}

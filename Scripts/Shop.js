var elements = document.getElementsByClassName("subBox");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("wheel", (event) => {
        //event.preventDefault();
        elements[i].scrollLeft += event.deltaY;

        console.log("im scrolling!" + elements[i]);
    });
}

//document.getElementById("testTag").addEventListener("wheel", (event) => {
//    event.preventDefault();
//    document.getElementById("testTag").scrollLeft += event.deltaY;
//});
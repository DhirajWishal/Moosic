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
    var variable = document.getElementById("bgImage");
    variable.style.zIndex = 100;
    let content = "<img src=\"../Assets/" + imageList[index] + "\" alt=\"" + altList[index] + "\" />";
    content += "<button type=\"button\" onclick=\"hideImage();\"class=\"backButton \" />Click me to go back</button>"
    //used to call the "back button" to use the main gallery back
    variable.innerHTML = content;
}

function hideImage() {
    var variable = document.getElementById("bgImage");
    variable.style.zIndex = -1;

}
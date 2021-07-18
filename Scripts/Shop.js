var elements = document.getElementsByClassName("subBox");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("wheel", (event) => {
        event.preventDefault();
        elements[i].scrollLeft += event.deltaY
    });
}
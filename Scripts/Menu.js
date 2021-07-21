const imageList = [
    "Guitar.png",
    "GuitarProduct.png",
    "baseguitar.png",
    "Vguitar.png",

    "Bongo.png",
    "tabla.png",
    "Tamborine.png",
    "14071697_800.jpg",

    "BassDrum.png",
    "Drumkit.png",
    "Drumstick.png",
    "14501339_800.jpg",

    "Speakers.png",
    "FenderPick.png",
    "image-efx12-front_original.jpg",
    "pro-headset-hero.png",

    'imageedit_1_6365420526.png',
    "Tcymbals.png",
    "Transparent.png"
];

const altList = [
    "Classic Guitar",
    "Electric Guitar",
    "Base Guitar",
    "Rock Guitar",

    "Bongo",
    "Tabla",
    "Tambourine",
    "Snare Drum",

    "Bass Drum",
    "Drum Kit",
    "Drumsticks",
    "Cymbals",
    
    "Speaker Set",
    "Guitar Picks",
    "Audio Mixer",
    "Premium Headset"
];

const prices = [
    100,
    500,
    300,
    420,
    250,
    200,
    50,
    100,
    150,
    900,
    20,
    60,
    500,
    10,
    650,
    300
];

var itemCount = (sessionStorage.getItem("itemCount") == null) ? 0 : sessionStorage.getItem("itemCount");

/**
 * Update the item count display.
 */
function updateItemCount() {
    console.log(itemCount);
    document.getElementById("itemNumber").innerHTML = itemCount;
}

/***
 * This function initializes the product list.
 * The reason to add the product items dynamically, is because there are a lot of similar tags in the similar structure. This means that the same code gets repeated and
 * will result in a much more complex and cluttered file. 
 * Using JS to perform this task will not only make things easier, will also make things much more readable, and will get rid of code redundancy.
 */
function initializeProductList() {
    let elements = document.getElementsByClassName("productList");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        let content = "";
        for (let j = i * 4; j < (i * 4) + 4; j++) {
            content += "<div class=\"product\">";

            content += "<img class=\"productImage\" src=\"../Assets/" + imageList[j] + "\" alt=\"" + altList[j] + "\" />";

            content += "<div class=\"productInfoOverlay\">";
            content += "<div class=\"productCaption\">" + altList[j] + "</div>"
            content += "</div>";

            content += "</div>";
        }

        element.innerHTML = content;
    }
}

/**
 * Handle add to cart event.
 * 
 * @param {*} index The product index.
 * @param {*} form The form to get the quantity.
 * @returns None.
 */
function handleAddToCart(index, form) {
    if (form.quantity.value.length == 0 || isNaN(form.quantity.value)) {
        alert("Quantity should be a valid number!");
        form.quantity.value = "";
        return;
    }

    if (getProduct(index).isNull())
        itemCount++;

    setProduct(index, altList[index], form.quantity.value);
    sessionStorage.setItem("itemCount", itemCount);

    hideGhost();
    updateItemCount();
}

/**
 * This handles the ghost box behaviour.
 * This function sets the ghost box content, depending on the selected product.
 * 
 * @param {*} index The product index.
 */
function onProductSelect(index) {
    document.getElementById("fadeOverlay").style.zIndex = 0;

    let ghost = document.getElementById("productGhost");
    ghost.classList.remove("ghostHide");
    ghost.classList.add("ghostFloat");

    let content = "<div class=\"ghostContent\">";
    content += "<div class=\"ghostDescription\">";
    content += "<img src=\"../Assets/" + imageList[index] + "\" alt=\"" + altList[index] + "\" />";

    content += "<p>";
    content += "<strong> Price: USD " + prices[index] + "</strong>";
    content += "</p>";

    content += "</div>";

    content += "<div class=\"ghostFixedContent\">";
    content += "<form>";
    content += "<input type=\"text\" class=\"ghostInputElement\" name=\"quantity\" placeholder=\"Quantity*\" />";
    content += "<br>";

    content += "<input type=\"button\" class=\"button\" onclick=\"hideGhost()\" value=\"Cancel\">";
    content += "<input type=\"button\" class=\"button\" onclick=\"handleAddToCart(" + index + ", this.form)\" value=\"Add to cart\">";
    content += "</form>";
    content += "</div>";
    content += "</div>";
    ghost.innerHTML = content;
}

/**
 * Hide the ghost box.
 */
function hideGhost() {
    let element = document.getElementById("productGhost");
    element.classList.remove("ghostFloat");
    element.classList.add("ghostHide");

    document.getElementById("fadeOverlay").style.zIndex = -1;
}
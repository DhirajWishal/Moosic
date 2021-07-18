var products = [];
var productImages = [];

/**
 * Product information class.
 * This class is used to store a single product's information.
 */
class ProductInformation {
    /**
     * Default constructor.
     * This also initializes the object with its properties.
     * 
     * @param {*} name The name of the product.
     * @param {*} quantity The selected item count.
     */
    constructor(name, quantity) {
        this.mProductName = name;
        this.mQuantity = quantity;
    }

    /**
     * Check if the product information is null.
     * 
     * @returns Boolean value.
     */
    isNull() {
        return this.mProductName == null || this.mQuantity == null;
    }
}

/**
 * Set a product to the session storage.
 * 
 * @param {*} productIndex The product's index.
 * @param {*} productName The product's name.
 * @param {*} quantity The selected product count.
 */
function setProduct(productIndex, productName, quantity) {
    sessionStorage.setItem("productName_" + productIndex, productName);
    sessionStorage.setItem("quantity_" + productIndex, quantity);
}

/**
 * Get a stored product from the session storage.
 * 
 * @param {*} productIndex The product index in the storage.
 * @returns The product information object.
 */
function getProduct(productIndex) {
    return new ProductInformation(sessionStorage.getItem("productName_" + productIndex), sessionStorage.getItem("quantity_" + productIndex));
}

/**
 * Update the product quantity.
 * 
 * @param {*} productIndex The product index.
 * @param {*} count The count to be added.
 */
function updateProductQuantity(productIndex, count) {
    sessionStorage.setItem("quantity_" + productIndex, count);
}

/**
 * Remove a product from the session storage.
 * 
 * @param {*} productIndex The product's index.
 */
function removeProduct(productIndex) {
    sessionStorage.removeItem("productName_" + productIndex);
    sessionStorage.removeItem("quantity_" + productIndex);
}
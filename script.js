const productlist = document.getElementById("list-products")

//initialize a list products
let products = [
    { name: "lunette", Price: 400, imageUrl: "./lunette.webp"},
    { name: "sac a main", Price: 400, imageUrl: "./bag.png" },
    { name: "parfun", Price: 400, imageUrl: "./purfun g.webp" },

]

 function initializeProducts (){
    for (let i =0;i < products.length; i++){
        const productCard = document.createElement("div")
        productCard.className = "product-card"
        productCard.innerHTML =
        "<img src='"+products[i].imageUrl+"' alt='"+products[i].name+" class='product-image'>" +
        '<h3>' + products[i].name +'</h3>'+
            '<p>$'+ parseFloat(products [i].Price).toFixed() +'</p>'+
           ' <div class="product-controls">'+
                '<div class="quantity-control">'+
                    '<button class="decrement">-</button>'+
                    '<span class="quantity">1</span>'+
                    '<button class="increment">+</button>'+
                '</div>'+      
                '<div class="product-actions">'+
                    '<i class="fas fa-trash"></i>'+
                    '<i class="fas fa-heart "></i>'+
                '</div>'+
            '</div>';

      
    

        productlist.appendChild(productCard)

      
    }
    calculateTotalPrice()
 }
//  document.addEventListener("DOMContentLoaded" ,initializeProducts)
// Events
// function myEvents() {
//     const productCard = document.querySelectorAll(".product-card")
//     console.log(product)
//   for(let i=0; index< productCard.length ;i++){
//     const productCard = productCard[i]
//     const quantityspan = productCard.querySelector(".quantity")
//     const incrementBtn = productCard.querySelector(".increment")
//     const decrementBtn = productCard.querySelector(".deccrement")

//   }
// }
// Attach Events
function myEvents() {
    // Select all product cards
    const productCards = document.getElementsByClassName("product-card");

    // Loop through each product card
    for (let i = 0; i < productCards.length; i++) {
        const productCard = productCards[i]; // Current product card
        const quantitySpan = productCard.querySelector(".quantity"); // Quantity display
        const incrementBtn = productCard.querySelector(".increment"); // Increment button
        const decrementBtn = productCard.querySelector(".decrement"); // Decrement button
        const trashIcon = productCard.querySelector(".fa-trash"); // Trash icon
        const heartIcon = productCard.querySelector(".fa-heart"); // Heart icon

        // Handle increment button click
        incrementBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent); // Get current quantity
            quantity++; // Increment quantity
            quantitySpan.textContent = quantity; // Update quantity display
            calculateTotalPrice()
        });

        // Handle decrement button click
        decrementBtn.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent); // Get current quantity
            if (quantity > 1) { // Ensure quantity doesn't go below 1
                quantity--; // Decrement quantity
                quantitySpan.textContent = quantity; // Update quantity display
                calculateTotalPrice()
            }
        });

        // Handle trash icon click (remove product card)
        trashIcon.addEventListener("click", function () {
            const index = Array.from(productCards).indexOf(productCard); // Find the index of the card
            if (index > -1) {
                products.splice(index, 1); // Remove the product from the products array
            }
            productCard.remove(); // Remove the product card from the DOM
            products.splice(index, 1)
            console.log(index)  
            console.log(productCards)
            console.log(products)
            productCard.remove()
            calculateTotalPrice()
        });

        // Handle heart icon click (toggle favorite)
        heartIcon.addEventListener("click", function () {
            heartIcon.classList.toggle("active"); // Toggle the "active" class
        });
    }
}

// Initialize products and events when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    initializeProducts(); // Render the product cards
    myEvents(); // Attach events after products are rendered
});
// Calculate total price
function calculateTotalPrice() {
    const productCards = document.getElementsByClassName("product-card");
    let total = 0;

    // Loop through each product card
    for (let i = 0; i < productCards.length; i++) {
        const productCard = productCards[i]; // Current product card
        const price = Number(productCard.querySelector("p").textContent.slice(1)); // Get product price (remove "$")
        const quantity =Number(productCard.querySelector(".quantity").textContent); // Get quantity

        total += price * quantity; // Calculate total for current product
    }
    console.log(total)
    document.getElementById("total").textContent = total
    return total



    }

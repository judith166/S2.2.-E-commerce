// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = []; // Objeto para almacenar el carrito de compra

var total = 0; //variable que obtine el total la compra

// Exercise 1
function buy(id) { //Función para agregar un producto al carrito
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const productToAdd = products.find(product => product.id === id);

    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...productToAdd, quantity: 1 });
    }
    console.log("Producto añadido al carrito", id);
}
// Calcular el total después de agregar el producto al carrito
calculateTotal();
printCart();
console.log("Producto añadido al carrito", id);


// Exercise 2
function cleanCart() { // Funcion para reiniciar el carrito a 0
    cart = [];
    calculateTotal(); //Calcular el total después de limpiar el carrito
    printCart(); //Imprimir el carrito en el DOM
    console.log("Carrito reseteado a 0 items");
    
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    var totalPrice = 0;

    cart.forEach(item => {
        const product = products.find(product => product.id === item.id);
        console.log("quantity:", item.quantity, "price:", item.price); // Agrega este log para depurar
        totalPrice += item.quantity * item.price;
    });
    // Actualizar la variable 'total'
    total = totalPrice;
    
    console.log("Total de la compra: ", total);
    return total;
}


// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(item => {
        const product = products.find(product => product.id === item.id);

        //Verificar si el producto tiene una oferta/promoción
        if (product.offer) {
            //calcular el descuento basado en la oferta
            const discount = (item.quantity / product.offer.number) * product.offer.percent;

            //aplicar descuento al precio del producto en el carrito
            const discountedPrice = product.price - (product.price * discount / 100);

            //actualizar el precio en el carrito con el descuento aplicado
            item.price = discountedPrice;
        }
    });
    //Imprimir el carrito con las promociones aplicadas 
    console.log("Carrito con promociones aplicadas: ", cart);
    calculateTotal();
    printCart();
}
//Llamada a la funcion para aplicar las promociones
applyPromotionsCart();


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //Coger el elemneto del cartModal
    const cartListElement = document.getElementById('cart_list');

    //Resetear el contenido del carrito
    cartListElement.innerHTML = '';

    //Interar sobre cada elemento del carrito para agregar el contenido
    cart.forEach(item => {
        const product = products.find(product => product.id === item.id);

        //Crear un elemento para mostrar la información del producto en el carrito de la compra
        const cartItemElement = document.createElement('tr');
        cartItemElement.innerHTML = `
        <th scope="row">${product.name}</th>
        <td>$${product.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${(item.quantity * product.price).toFixed(2)}</td>
    `;

        // Agregar el elemento al contenido del carrito
        cartListElement.appendChild(cartItemElement);
    });
    
    // Agregar una fila adicional para mostrar el total
    const totalRowElement = document.createElement('tr');
    totalRowElement.innerHTML = `
        <th scope="row" colspan="3">Total:</th>
        <td>$${total.toFixed(2)}</td>
    `;
    cartListElement.appendChild(totalRowElement);   
}
printCart();

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}
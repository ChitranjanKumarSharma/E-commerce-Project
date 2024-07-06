import products from "./api/products.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";


/* getting cart product local storage */ 
let cartProducts= getCartProductFromLS();



/* Function to check  if current product is in local storage or not*/
function check(currProduct){
    for(let i=0; i<cartProducts.length; i++){
        if(cartProducts[i].id === currProduct.id){
            return true;
        } 
    }
    return false;
}

/* getting the full information about products available in cart(local storage) */
/* this product has not updated price(it has price of a single quantity) */
const filterProducts = products.filter((currProduct)=>
    check(currProduct)
);




/*================================ making cards ==============================*/

const cartElement= document.querySelector("#productCartContainer");

const templateContainer= document.querySelector("#productCartTemplate");



const addToCartProductCards= () => {

    filterProducts.forEach((prod) => {
        const { category, id, image, name, price , stock} = prod;
        let productClone = document.importNode(templateContainer.content, true);

        /*======= update price and quantity =======*/
        let updatePriceAndProduct= fetchQuantityFromLS(id, price);
        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
       
        /*------- price and product from updated array -------*/

        productClone.querySelector(".productQuantity").textContent=updatePriceAndProduct.quantity;
        
        productClone.querySelector(".productPrice").textContent=updatePriceAndProduct.price;

        productClone.querySelector(".stockElement").addEventListener("click", (event)=>
            incrementDecrement(event, id, stock, price)
        )

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", ()=>removeProductFromCart(id));


        cartElement.append(productClone);
    });
};
/* calling the function to show cart products on that page */
addToCartProductCards();




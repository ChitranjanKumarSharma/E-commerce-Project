import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";


/* getting cart product local storage */ 
let cartProducts= getCartProductFromLS();

/* Function to check  if current product is in local storage or not*/
function check(currProduct){
    for(let i=0; i<cartProducts.length; i++){
        if(cartProducts[i].id === currProduct.id) return true;
    }
    return false;
}

/* getting the full information about products available in cart(local storage) */
const filterProducts = products.filter((currProduct)=>
    check(currProduct)
);

// console.log(filterProducts);

/*================================ making cards ==============================*/

const cartElement= document.querySelector("#productCartContainer");

const templateContainer= document.querySelector("#productCartTemplate");
console.log(templateContainer);

const addToCartProductCards= ()=>{

    filterProducts.forEach((prod)=>{
        const { brand, category, description, id, image, name, price, stock } = prod;
        let productClone= document.importNode(templateContainer.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;

        cartElement.append(productClone);
    });
};

addToCartProductCards();




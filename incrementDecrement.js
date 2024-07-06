import { getCartProductFromLS } from "./getCartProductFromLS";
// import { products} from "./api/products.json";


export const incrementDecrement= (event, id, stock, price)=>{
    const cardClicked= document.querySelector(`#card${id}`);
    console.log(cardClicked);
    const productQuantity= cardClicked.querySelector(".productQuantity");
    const productActualPrice= cardClicked.querySelector(".productPrice");
    let quantity= Number(productQuantity.textContent);

    if(event.target.className==="cartIncrement") {
        if(quantity<stock){
            quantity+=1;
        }
        else if(quantity== stock){
            quantity=stock;
        }
    }
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
    }

    

    let cartProducts= getCartProductFromLS();
    let existingProduct = cartProducts.find((currProd)=> currProd.id === id);
    existingProduct.quantity= quantity;
    existingProduct.price= quantity * price;
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
    productQuantity.textContent=   quantity;
    productActualPrice.textContent= quantity*price;
}
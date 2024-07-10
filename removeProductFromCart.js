import { getCartProductFromLS } from "./getCartProductFromLS"
import { showTotalSum } from "./showTotalSum";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id)=>{
    let cartProducts= getCartProductFromLS();
    cartProducts = cartProducts.filter((currProd)=> currProd.id !== id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv= document.querySelector(`#card${id}`);
    if(removeDiv) removeDiv.remove();

    updateCartValue(cartProducts);
    showTotalSum();


}
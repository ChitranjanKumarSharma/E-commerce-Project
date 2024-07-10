import { getCartProductFromLS } from "./getCartProductFromLS"

export const showTotalSum = () =>{

    let productSubTotal= document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");



    let localStorageProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localStorageProducts.reduce((accum, prod)=>{
        let prodPrice = parseInt(prod.price) || 0;
        return accum+prodPrice;
    }, initialValue);
    
    console.log(totalProductPrice);

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice +50}`; 
}
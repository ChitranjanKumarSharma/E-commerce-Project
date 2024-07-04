import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

/*============================ add to card button responsive ==============================*/
getCartProductFromLS();

export const addToCart = ( event, id, stock)=>{

    /*gives product stored already in local storage*/
    let arrLocalStorageProduct= getCartProductFromLS();
    
    const productToAdd = document.querySelector(`#card${id}`);
    let quantity =productToAdd.querySelector(".productQuantity").innerText;
    let price = productToAdd.querySelector(".productPrice").innerText;

    price = price.replace("₹", ""); 
    price = Number(price)*quantity; //total price 
    quantity= Number(quantity); //quantity of product entered by user that will be added to cart.
    
    
    /* finding if product is already in cart */ 
    let existingProd = arrLocalStorageProduct.find((product)=>{
        if(product.id===id){
            return true;
        }
        else return false;
    });
    
    
    if (existingProd) {
        quantity=Number(existingProd.quantity)+(quantity);
        console.log(quantity);
        price = existingProd.price +(price);
       
        let arrUpdatedCartProduct ={id , quantity, price};
        arrUpdatedCartProduct = arrLocalStorageProduct.map((product)=>{
            if(product.id===id){
                return arrUpdatedCartProduct;
            }else {
                return product;
            }
        });

        console.log(arrUpdatedCartProduct);
        
        localStorage.setItem("cartProductLS", JSON.stringify(arrUpdatedCartProduct));

    } else {
        arrLocalStorageProduct.push({ id, quantity, price });
        localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

        /*------------- update cart display button in header section ------------------------*/
        
        updateCartValue(arrLocalStorageProduct);
    }


    

};


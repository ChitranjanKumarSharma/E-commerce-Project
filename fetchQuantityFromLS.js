import { getCartProductFromLS } from "./getCartProductFromLS"

export  const fetchQuantityFromLS= (id, price)=>{
    let cartProducts = getCartProductFromLS();
    
    const existingProduct = cartProducts.find((currProd)=> currProd.id===id );
    

    let quantity=1;
    
    if(existingProduct){
        quantity= existingProduct.quantity;
        price= existingProduct.price;
    }

    return { quantity, price };

};


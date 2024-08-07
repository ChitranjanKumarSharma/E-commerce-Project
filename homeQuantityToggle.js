export const homeQuantityToggle =(event,id,stock)=>{
    // console.log(event.target);
    const currCardElement = document.querySelector(`#card${id}`); 

    const productQuantity= currCardElement.querySelector('.productQuantity');

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
        quantity += 1;
        } else if (quantity === stock) {
        quantity = stock;
        }
    }

    if (event.target.className === "cartDecrement"){
        if(quantity>1){
            quantity-=1;

        }else if( quantity === 1){
            quantity=1;
        }
    }
    productQuantity.innerText= quantity;
    productQuantity.setAttribute("data-quantity", quantity) ;
    
};


const cartValue=document.querySelector('#cartValue');

/*===================== header section me cart value ko update  =========================*/


export const updateCartValue = (cartProducts)=>{
    
    cartValue.innerHTML=  `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`;
    
};
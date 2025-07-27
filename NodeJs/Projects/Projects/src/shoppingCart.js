document.addEventListener('DOMContentLoaded',()=>{

  const products = [
    {id:1,name:'product 1',price:20.00},
    {id:2,name:'product 2',price:50.00},
    {id:3,name:'product 3',price:30.00}
  ];

  const cart = [];
  const productList = document.getElementById('product-list');
  const cartProducts = document.getElementById('cart-products');
  const cartEmptyMessage = document.getElementById('cart-empty-message');
  const totalPrice = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');

products.forEach((product)=>{
  const productDivElement = document.createElement('div');
  productDivElement.classList.add('bg-gray-600','p-2','flex','justify-center','gap-5','mb-2');
  productDivElement.innerHTML=`
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button class="bg-violet-700 px-1" data-id="${product.id}">Add to Cart</button>
  `;
  productList.appendChild(productDivElement);
  updateCart();
});

productList.addEventListener('click',(e)=>{
   if(e.target.tagName ==='BUTTON'){
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId)
    if (product) {
      cart.push(product);
      updateCart();
    }
   }
})


function updateCart(){
  let totalPriceValue = 0;
  cartProducts.innerHTML ='';
  totalPrice.classList.add('hidden');
  
  if(cart.length === 0){
    cartEmptyMessage.classList.remove('hidden');
    totalPrice.classList.add('hidden');
  }
  else{
    cartEmptyMessage.classList.add('hidden');
    totalPrice.classList.remove('hidden');
    cart.forEach(cartItem=>{
      totalPriceValue += cartItem.price;
      const productSpan = document.createElement('span');
      productSpan.classList.add('mb-1');
      productSpan.innerHTML = `${cartItem.name} - $${cartItem.price.toFixed(2)}
      <button data-id="${cart.id}" class="bg-red-700 px-1.5 py-0.2 ml-3">delete</button>
      `;
      cartProducts.appendChild(productSpan);
      totalPrice.textContent =`Total : $${totalPriceValue.toFixed(2)}`;
    });
  }
}

checkoutBtn.addEventListener('click',()=>{
  alert(`your cart ${cart.length} item total price :$${totalPriceValue.toFixed(2)} is checkout`);
})

cartProducts.addEventListener('click',(e)=>{
  if(e.target.tagName ==='BUTTON'){
    const cartItemId = parseInt(e.target.dataset.id);
    cart.splice(cartItemId,1);
    updateCart();
  }
})

});



window.addEventListener("DOMContentLoaded", (event) => {
  // let currentItem = document.getElementById('items').value;         // we're storing the item that the user selected
  // let enteredQuantity = document.getElementById("quantity").value;  // we're storing the quantity that the user input
  // localStorage.setItem(currentItem, enteredQuantity)                // setting in localstorage, the item the user selected as a key, the quanity they input
  
  
  let storeItem = () =>{
  let buttonId = document.getElementById('add-to-cart');              // grabs the button, check on button a click

  buttonId.addEventListener('click', event =>{
    let currentItem = document.getElementById('items').value;
    let enteredQuantity = document.getElementById("quantity").value;
    localStorage.setItem(currentItem, enteredQuantity) 
    event.preventDefault();

    storeCart()  // 12-15 adding item to local storage, everytime we update our cart with submit, were adding an item to local storage
    }) 
  }

storeItem();
  
  let storeCart = () =>{
    let cart = document.getElementById('shopping-cart');
    let local = localStorage; 
    cart.innerHTML = '<h2>Shopping Cart</h2>'
    for (let i = 0; i < local.length; i++){
      let key = local.key(i);
      let quantity = local.getItem(key);                // getItem is like "getValue"                       
      let cartItems = document.createElement("li");
      cartItems.innerText = `${key}: ${quantity}`
      let removeButton = document.createElement("button");
      removeButton.setAttribute("class", "removal");
      removeButton.innerText = "remove";
      cartItems.appendChild(removeButton);
  
      cart.appendChild(cartItems)
      
    }
}
  storeCart();




const removeItem = () =>{
  let rButtons = document.querySelectorAll(".removal")
  for (let i = 0; i < rButtons.length; i++){
      let currentRButton = rButtons[i];
      currentRButton.addEventListener('click', event =>{
    
      }
    )
  }  
}










});




// get the div of 

window.addEventListener("DOMContentLoaded", (event) => {
  // let currentItem = document.getElementById('items').value;         // we're storing the item that the user selected
  // let enteredQuantity = document.getElementById("quantity").value;  // we're storing the quantity that the user input
  // localStorage.setItem(currentItem, enteredQuantity)                // setting in localstorage, the item the user selected as a key, the quanity they input

  //first function just to store item
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

//second func
  let storeCart = () =>{
    let cart = document.getElementById('shopping-cart');

    let local = localStorage;
    cart.innerHTML = '<h2>Shopping Cart</h2>'
    for (let i = 0; i < local.length; i++){
      let key = local.key(i);
      let quantity = local.getItem(key);                // getItem is like "getValue"

      let cartItems = document.createElement("li");
      cartItems.setAttribute("id", key) // use this later to delete cart
      cartItems.innerText = `${key}: ${quantity}`
      let removeButton = document.createElement("button");
      removeButton.setAttribute("class", "removal");
      removeButton.innerText = "remove";
      cartItems.appendChild(removeButton);

      cart.appendChild(cartItems)

    }
}
  storeCart();

//third func
const removeItem = () =>{
  //what do we know about event.target gives us the button
  //once u have the button .parentNode to get the elem above
  let rButtons = document.querySelectorAll(".removal") // grabbing all the remove buttons
  console.log(rButtons)
  for (let i = 0; i < rButtons.length; i++){
      let currentRButton = rButtons[i];
      currentRButton.addEventListener('click', event =>{
        let keyID = event.target.parentNode.id //"Banana"
        localStorage.removeItem(keyID) //remove the item
        storeCart()  //invoking store cart to represent new cart
      }
    )
  }


}
removeItem()

});




// get the div of


window.addEventListener("DOMContentLoaded", (event) => {
  
  let storeItem = () =>{
  let buttonId = document.getElementById('add-to-cart');              // grabs the button, check on button a click
  // console.log(buttonId);
  
  buttonId.addEventListener('click', event =>{                        // waiting to happen, then doing something  
    
    let currentItem = document.getElementById('items').value;         // we're storing the item that the user selected
    let enteredQuantity = document.getElementById("quantity").value;  // we're storing the quantity that the user input
    
    localStorage.setItem(currentItem, enteredQuantity)                // setting in localstorage, the item the user selected as a key, the quanity they input

    // console.log(currentItem.value);

    event.preventDefault();                                           // when the button is clicked, prevents everything from refreshing/losing data
  })

  }
  storeItem();                                                         // invoking the function we just made


let cart = document.getElementById('shopping-cart');

let local = localStorage;

// console.log(local);

for (let key in local){
  let quantity = localStorage.getItem(key);
  
  let food = key;

  cart.appendChild()



  // console.log(food);
  // console.log(quantity);
}






});












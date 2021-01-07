
window.addEventListener("DOMContentLoaded", (event) => {
    let currentItem = document.getElementById('items').value;         // we're storing the item that the user selected
    let enteredQuantity = document.getElementById("quantity").value;  // we're storing the quantity that the user input

    localStorage.setItem(currentItem, enteredQuantity)                // setting in localstorage, the item the user selected as a key, the quanity they input
  let storeItem = () =>{
  let buttonId = document.getElementById('add-to-cart');              // grabs the button, check on button a click
  // console.log(buttonId);

  buttonId.addEventListener('click', event =>{
    event.preventDefault();
    let cart = document.getElementById('shopping-cart');

    let local = localStorage; // object

    console.log(local);

    for (let key in local){
      //let value = local[key]
      //if (local[key]!== null){
       if(localStorage.getItem(key) !== null){
        console.log(key)
        let quantity = local.getItem(key);


        let food = key;
        let cartItems = document.createElement("ci")
        //console.log(cartItems)
        cartItems.innerText = `${food}: ${quantity}\n`


        cart.appendChild(cartItems)
       }


      }


    // console.log(currentItem.value);
    ; // object

// console.log(local);

// for (let key in local){
//   //let value = local[key]
//   //if (local[key]!== null){
//    if(localStorage.getItem(key) !== null){
//     console.log(key)
//     let quantity = local.getItem(key);
//     let food = key;
//     let cart = document.getElementById('shopping-cart');
// let local = localStorage
//     let cartItems = document.createElement("ci")
//     //console.log(cartItems)
//     cartItems.innerText = `${food}: ${quantity}\n`
  //   cart.appendChild(cartItems)
  //  }
  // }
  //event.preventDefault();                                           // when the button is clicked, prevents everything from refreshing/losing data

})
storeItem();  
  }
                                                         // invoking the function we just made






});

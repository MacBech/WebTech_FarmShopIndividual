let myBasket = {
    items: []
}

function submitToBasket(productObj) {

    //Retrieve localStorage data
    let storedBasket = localStorage.getItem("loadedBasket");

    //Check if there is data in localStorage
    if (storedBasket) {
        myBasket = JSON.parse(storedBasket);
    }

    //Value from input field, parsed to int, based on the parsed productObject name
    let inputElement = document.getElementById(productObj.name + "-input");
    let inputValue = parseInt(inputElement.value);


    //Testing if the productObj is in the basket already, if not, push to the items array
    if (!myBasket.items.some(item => item.name === productObj.name)) {
        myBasket.items.push(productObj);
    }

    //Iterate trough basket. See if object already exists. Update quantity
    for (let i = 0; i < myBasket.items.length; i++) {

        if (myBasket.items[i].name === productObj.name) {

            if (myBasket.items[i].quantity) {
                myBasket.items[i].quantity += inputValue;

            } else {
                myBasket.items[i].quantity = inputValue;
            }
        }
    }

    //Save data to localStorage
    localStorage.setItem("loadedBasket", JSON.stringify(myBasket));
    let loadedBasket = JSON.parse(localStorage.getItem("loadedBasket"));


}

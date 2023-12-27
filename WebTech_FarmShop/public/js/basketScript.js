
function updateBasket() {

    // Retrieves basket
    let storedBasket = localStorage.getItem("loadedBasket");
    myBasket = JSON.parse(storedBasket);

    let basketContainer = document.getElementById('basket-form');


    //basketContainer.innerHTML = " ";


    // h3 Header creation
    let existingHeader = basketContainer.querySelector('h2');

    // Checks, and creates header
    if (!existingHeader) {
        let basketHeader = document.createElement('h2');
        basketHeader.textContent = 'Basket contains:';
        basketContainer.append(basketHeader);

        let lineBreak = document.createElement('br');
        basketContainer.append(lineBreak);
        basketContainer.append(lineBreak);

    }

    // Iterates trough items from the localStorage object, and makes corresponding elements
    myBasket.items.forEach(item => {

        // Skip creating the item if it already exists
        if (document.querySelector(`[name="${item.name}"]`)) {
            return;
        }


        let element = document.createElement('div');

        let itemName = item.name;

        let newitemName;
        newitemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

        newitemName = newitemName.replace(/_/g, ' ');


        let inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.min = 1;
        inputElement.value = item.quantity; // Set the value to the item's quantity
        inputElement.max = 100;
        inputElement.name = item.name;
        inputElement.id = item.name + 'Input-Id'; // Replace with your actual dynamic ID


        element.innerHTML = `<h3>${newitemName}</h3>`;
        element.appendChild(inputElement);


        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from basket';

        removeButton.addEventListener('click', function () {


            myBasket.items = myBasket.items.filter(basketItem => basketItem.name !== item.name);

            // Saving basket
            localStorage.setItem("loadedBasket", JSON.stringify(myBasket));
            let loadedBasket = JSON.parse(localStorage.getItem("loadedBasket"));

            basketContainer.removeChild(element);

            createdItemNames = createdItemNames.filter(name => name !== item.name);

        });

        element.appendChild(removeButton);

        basketContainer.append(element);

    });


}



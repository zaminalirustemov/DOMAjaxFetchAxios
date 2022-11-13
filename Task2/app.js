let price = 0;
let count = 0;

    fetch("https://northwind.vercel.app/api/orders")
    .then((response) => response.json())
    .then((data) =>{
        data.forEach(element => {
            if (element.shipAddress.country=="Sweden") {
                element.details.forEach(details => {
                    price += details.unitPrice * details.quantity *(1-details.discount)
                    count += details.quantity
                });
            }

        })
            console.log(Math.floor(price/count));

    })


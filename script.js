// PayPal Payment Button
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '1598' // Replace with actual price or dynamic variable
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Payment successful! Thank you, ' + details.payer.name.given_name + '!');
            window.location.href = "#home"; // Redirect or show thank you message
        });
    }
}).render('#paypal-button-container');

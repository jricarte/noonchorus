// Establishing global variables
var artist;
var amountPaid;
var timestamp;
var customerEmail;
var dateOfPurchase;

function inplayerAPI() {
    var queryURL = "https://services.inplayer.com/v2/analytics/payments"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(inplayerResponse) {
        artistInfo = inplayerResponse;
    }
    )}
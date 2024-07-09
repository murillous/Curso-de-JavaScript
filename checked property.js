document.getElementById("botão").onclick = function(){
    const ok = document.getElementById("ok")
    const visa = document.getElementById("Visa")
    const mastercard = document.getElementById("Mastercard")
    const paypal = document.getElementById("PayPal")

    if (ok.checked){
        console.log("U are subscribed")
    }
    else{
        console.log("u are not subscribed")
    }

    if(visa.checked){
        console.log("You are paying with a Visa!")
    }
    else if(mastercard.checked){
        console.log("You are paying with MasterCard")
    }
    else if(paypal.checked){
        console.log("You are paying with PayPal!")
    }
    else{
        console.log("You must select a payment type!")
    }
}










// Variabili globali
let kmPercorso, userName, userAge, ticketPrice, message, buttonElement;
const kmPricing = 0.21;

buttonElement = document.getElementById("buttonId");

// all'apertura del sito web ci sono 3 campi compilabili, nome, numero kilometri da percorrere e selezione range età. l'utente riempie i tre campi e preme il bottone Genera che calcola i kilometri da fare e applica lo sconto in base al range d'età selezionato e quindi infine crea il biglietto.

buttonElement.addEventListener('click',

    function() {
        userName = document.getElementById("nameId").value;
        console.log(userName);

        kmPercorso = document.getElementById("kmId").value;
        console.log(kmPercorso);

        userAge = document.getElementById("ageId").value;
        console.log(userAge);

        ticketPrice = (kmPercorso * kmPricing);
        console.log(ticketPrice);

        if(userAge === "Minorenne"){
            ticketPriceDiscounted = (ticketPrice - ((ticketPrice * 20) / 100));
            message = "Il costo del vostro biglietto è di: " + ticketPriceDiscounted.toFixed(2);
            console.log(ticketPriceDiscounted);
        
        }
        else if(userAge === "Over 65"){
            ticketPriceDiscounted = (ticketPrice - ((ticketPrice * 40) / 100));
            message = "Il costo del vostro biglietto è di: " + ticketPriceDiscounted.toFixed(2);
            console.log(ticketPriceDiscounted);
        }
        else{
            message = "Il costo del vostro biglietto è di: " + ticketPrice.toFixed(2);
            console.log(ticketPrice);
        }

        console.log(message);
    }


);
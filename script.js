const kniha1 = {
    nazev: "Chaos",
    autor: "Natálie Vykoukalová",
    pocetStran: 236,
    rokVydani: 2014,
    jazyk: "čeština",
    nakladatelstvi: {
        jmeno: "Róza",
        adresa: "Česká 23, Zlín",
    },
};

const kniha2 = {
    nazev: "A řád",
    autor: "Natynka Papaa",
    pocetStran: 26,
    rokVydani: 2024,
    jazyk: "čeština",
    nakladatelstvi: {
        jmeno: "Rozinka",
        adresa: "Česká 23, Zlín",
    },
};

    document.body.innerHTML += "<p> Nakladatelství: " + kniha1.nakladatelstvi.jmeno + "</p>"
    document.body.innerHTML += "<p> Má druhá kniha s názvem: " + kniha2.nazev + "</p>"



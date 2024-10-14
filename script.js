const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  
document.body.innerHTML += "<p>Dispozice bytu: " + apartment.disposition + "</p>"
document.body.innerHTML += "<p>Čistý nájem bez poplatků: " + apartment.price.rent + "</p>"
document.body.innerHTML += "<p>Výměra bytu: " + apartment.area.floorage + " " + apartment.area.units + ", počet balkonů: " + apartment.area.balcony + "</p>"

const city = "Prague"
const district = "Old Town"

document.body.innerHTML += "<p> Poloha bytu: " + district + ", " + city + "</p>"


apartment.status = "taken"
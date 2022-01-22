const restaurantsArray = [
  {
    name: "Daniel's Restaurant",
    rating: 10,
    address: {
      city: "Gevim",
      street: "Jordan",
      coordinates: [-77,564, 40.67]
    },
    cuisineType: "meat",
    isKosher: true,
    reviews: [[new Date("12/10/2021").toDateString(), 1], [new Date("13/10/2021").toDateString(), 2], [new Date("14/10/2021").toDateString(), 3]]
  },
  {
    name: "Ernest's Restaurant",
    rating: 7,
    address: {
      city: "Dimona",
      street: "Be",
      coordinates: [23,54, 70.57]
    },
    cuisineType: "meat",
    isKosher: false,
    reviews: [[new Date("01/12/2021").toDateString(), 1], [new Date("02/12/2021").toDateString(), 2], [new Date("03/12/2021").toDateString(), 3]]
  },
  {
    name: "Fida's Restaurant",
    rating: 4,
    address: {
      city: "Tel-Aviv",
      street: "Feed",
      coordinates: [123,54, 470.57]
    },
    cuisineType: "vegetarian",
    isKosher: false,
    reviews: [[new Date("20/08/2021").toDateString(), 1], [new Date("12/08/2021").toDateString(), 2], [new Date("13/09/2021").toDateString(), 3]]
  },
  {
    name: "Shaked's Restaurant",
    rating: 6,
    address: {
      city: "Carmiel",
      street: "Ben",
      coordinates: [243,554, 770.67]
    },
    cuisineType: "vegetarian",
    isKosher: true,
    reviews: [[new Date("12/03/2021").toDateString(), 1], [new Date("11/12/2021").toDateString(), 2], [new Date("03/12/2021").toDateString(), 3]]
  },
  {
    name: "Mati's Restaurant",
    rating: 10,
    address: {
      city: "Haifa",
      street: "Mit",
      coordinates: [143,454, 730.67]
    },
    cuisineType: "meat",
    isKosher: true,
    reviews: [[new Date("12/06/2021").toDateString(), 1], [new Date("16/01/2021").toDateString(), 2], [new Date("22/01/2022").toDateString(), 3]]
  }
]

module.exports = restaurantsArray;
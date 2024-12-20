
export const filters = [
 
  {
    id: "varmalaPreservation",
    name: "Varmala Preservation",
    options: [
      { value: "planter", label: "Planter" },
      { value: "unevenRound", label: "10' Uneven Round" },
      { value: "square8", label: "8' Square" },
      { value: "square12", label: "12' Square" },
      { value: "square18", label: "18' Square" },
      { value: "clock12", label: "12' Clock" },
      { value: "round12", label: "12' Round" },
      { value: "round18", label: "18' Round" },
      { value: "rectangle18*12", label: "18*12 rectangular" },
      { value: "otherVarmalaStyles", label: "Other Varmala Styles" },
    ],
  },
  {
    id: "wallClock",
    name: "Wall Clock",
    options: [
      { value: "resinWallClock", label: "Resin Wall Clock" },
    ],
  },
  {
    id: "resinSpecial",
    name: "Resin Art Special",
    options: [
      { value: "ourSignatureStyle", label: "Our Signature Style" },
      { value: "resinSpecial", label: "Resin Special" },
      // { value: "wallArt", label: "Wall Art" },
      { value: "opalArt", label: "Opal Art" },
    ],
  }, 
  {
    id: "wallArt",
    name: "Wall Art",
    link: "/products?resinSpecial=wallArt",
    options: []
  },
  {
    id: "pichwaiArt",
    name: "Pichwai Art",
    link: "/products?resinSpecial=pichwaiArt",
    options: []
  },
  {
    id: "resinTable",
    name: "Resin Table",
    link: "/products?resinSpecial=resinTable",
    options: []
  },
  {
    id: "opalArt",
    name: "Opal Art",
    link: "/products?resinSpecial=opalArt",
    options: []
  },
  {
    id: "resinSpecial",
    name: "Resin Special",
    link: "/products?resinSpecial=resinSpecial",
    options: []
  },
  {
    id: "geodeArt",
    name: "Geode Art",
    options: [
      { value: "geodeartedition", label: "Geode Art Exclusive" },
    ],
  },
  {
    id: "namePlate",
    name: "Name Plate",
    options: [
      { value: "customizedNamePlate", label: "Customized Name Plate" },
    ],
  },
  {
    id: "navkarMantraFrame",
    name: "Navkar Mantra Frame",
    options: [
      { value: "presonalizedMantraFrame", label: "Personalized Mantra Frame" },
    ],
  },
  {
    id: "workshop",
    name: "Workshop",
    options: [
      { value: "bookWorkshop", label: "Book a Workshop" },
    ],
  },
 
];

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];

  
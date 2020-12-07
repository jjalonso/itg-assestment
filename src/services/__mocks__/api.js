export const fetchVehicles = async () => [
  {
    "id": "car1",
    "modelYear": "k17",
    "url": "/api/vehicle/xe",
    "media": [{
      "name": "vehicle",
      "url": "/images/xe_k17.jpg"
    }]
  }
];

export const fetchVehicleDetails = async (id) => ({
  "id": "car1",
  "description": "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
  "price": "£30,000",
  "meta": {
    "passengers": 5,
    "drivetrain": [
      "AWD",
      "RWD"
    ],
    "bodystyles": [
      "saloon"
    ],
    "emissions": {
      "template": "CO2 Emissions $value g/km",
      "value": 99
    }
  }
});


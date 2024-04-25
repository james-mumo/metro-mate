export const appName = "MetroMate";

export const minibuses = [
  { id: 1, name: "Minibus 1", capacity: 20 },
  { id: 2, name: "Minibus 2", capacity: 20 },
  { id: 3, name: "Minibus 3", capacity: 20 },
];

export const trucks = [
  {
    company: "Kenya Cargo Movers",
    numberPlate: "KCD 789A",
    capacity: "10 tons",
    pricePerHirePerHour: 1800,
    currentLocation: "Westlands",
    vehicleType: "Truck",
    yearMade: 2020,
    availability: 24,
  },
  {
    company: "Nairobi Express Logistics",
    numberPlate: "KCE 456B",
    capacity: "5 tons",
    pricePerHirePerHour: 1440,
    currentLocation: "CBD",
    vehicleType: "Van",
    yearMade: 2021,
    availability: 0,
  },
  {
    company: "Movers Kenya Limited",
    numberPlate: "KCE 456B",
    capacity: "5 tons",
    pricePerHirePerHour: 1440,
    currentLocation: "Kilimani",
    vehicleType: "Van",
    yearMade: 2021,
    availability: 6,
  },
  {
    company: "Nairobi Transport Solutions",
    numberPlate: "KDE 789C",
    capacity: "8 tons",
    pricePerHirePerHour: 2160,
    currentLocation: "Lang'ata",
    vehicleType: "Truck",
    yearMade: 2022,
    availability: 48,
  },
  {
    company: "Kenya Moving Experts",
    numberPlate: "KCL 012D",
    capacity: "3 tons",
    pricePerHirePerHour: 1260,
    currentLocation: "Parklands",
    vehicleType: "Van",
    yearMade: 2020,
    availability: 24,
  },
];

export const routes = [
  {
    id: 1,
    name: "CBD-Karen Route",
    stages: [
      { name: "CBD", next: "Kencom", distance: 2, time: 10, fare: 30 },
      {
        name: "Kencom",
        next: "Railway Station",
        distance: 1,
        time: 5,
        fare: 20,
      },
      {
        name: "Railway Station",
        next: "Adams Arcade",
        distance: 3,
        time: 15,
        fare: 40,
      },
      {
        name: "Adams Arcade",
        next: "Prestige Plaza",
        distance: 2,
        time: 10,
        fare: 30,
      },
      {
        name: "Prestige Plaza",
        next: "Junction Mall",
        distance: 3,
        time: 15,
        fare: 40,
      },
      { name: "Junction Mall", next: "Karen", distance: 6, time: 25, fare: 60 },
    ],
  },
  {
    id: 2,
    name: "Thika-CBD Route",
    stages: [
      {
        name: "Thika Town",
        next: "Blue Post Hotel",
        distance: 2.5,
        time: 12,
        fare: 35,
      },
      {
        name: "Blue Post Hotel",
        next: "Witeithie",
        distance: 3.5,
        time: 18,
        fare: 45,
      },
      {
        name: "Witeithie",
        next: "Juja City Mall",
        distance: 2.5,
        time: 12,
        fare: 35,
      },
      {
        name: "Juja City Mall",
        next: "Mangu High School",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Mangu High School",
        next: "Ridgeways",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
      {
        name: "Ridgeways",
        next: "Roysambu",
        distance: 4.0,
        time: 20,
        fare: 50,
      },
      { name: "Roysambu", next: "Kasarani", distance: 3.5, time: 18, fare: 45 },
      {
        name: "Kasarani",
        next: "Thika Road Mall",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Thika Road Mall",
        next: "Garden City Mall",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
      {
        name: "Garden City Mall",
        next: "Ngara",
        distance: 4.5,
        time: 22,
        fare: 55,
      },
      { name: "Ngara", next: "CBD", distance: 2.0, time: 10, fare: 30 },
    ],
  },
  {
    id: 3,
    name: "CBD-Kitengela Route",
    stages: [
      {
        name: "CBD",
        next: "Railway Station",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Railway Station",
        next: "Nyayo Stadium",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
      {
        name: "Nyayo Stadium",
        next: "South B",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      { name: "South B", next: "Belle Vue", distance: 3.5, time: 18, fare: 45 },
      { name: "Belle Vue", next: "GM", distance: 2.5, time: 12, fare: 35 },
      { name: "GM", next: "Syokimau", distance: 4.0, time: 20, fare: 50 },
      { name: "Syokimau", next: "Mlolongo", distance: 5.0, time: 25, fare: 55 },
      {
        name: "Mlolongo",
        next: "Athi River",
        distance: 4.5,
        time: 22,
        fare: 50,
      },
      {
        name: "Athi River",
        next: "Kitengela",
        distance: 7.0,
        time: 35,
        fare: 65,
      },
    ],
  },
  {
    id: 4,
    name: "CBD-Kitengela Alternate Route",
    stages: [
      {
        name: "CBD",
        next: "Railway Station",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Railway Station",
        next: "Nyayo Stadium",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
      {
        name: "Nyayo Stadium",
        next: "South B",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "South B",
        next: "Wilson Airport",
        distance: 3.5,
        time: 18,
        fare: 45,
      },
      {
        name: "Wilson Airport",
        next: "Bypass Junction",
        distance: 4.5,
        time: 22,
        fare: 50,
      },
      {
        name: "Bypass Junction",
        next: "Syokimau",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      { name: "Syokimau", next: "Mlolongo", distance: 4.0, time: 20, fare: 45 },
      {
        name: "Mlolongo",
        next: "Athi River",
        distance: 4.5,
        time: 22,
        fare: 50,
      },
      {
        name: "Athi River",
        next: "Kitengela",
        distance: 7.0,
        time: 35,
        fare: 65,
      },
    ],
  },
  {
    id: 5,
    name: "CBD-Westlands Route",
    stages: [
      { name: "CBD", next: "University Way", distance: 1.5, time: 8, fare: 25 },
      {
        name: "University Way",
        next: "Koinange Street",
        distance: 1.0,
        time: 5,
        fare: 20,
      },
      {
        name: "Koinange Street",
        next: "Waiyaki Way",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
      {
        name: "Waiyaki Way",
        next: "Westlands",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
    ],
  },
  {
    id: 6,
    name: "CBD-Eastleigh Route",
    stages: [
      {
        name: "CBD",
        next: "Tom Mboya Street",
        distance: 1.0,
        time: 5,
        fare: 20,
      },
      {
        name: "Tom Mboya Street",
        next: "Juja Road",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
      {
        name: "Juja Road",
        next: "Eastleigh",
        distance: 4.0,
        time: 20,
        fare: 45,
      },
    ],
  },
  {
    id: 7,
    name: "CBD-South C Route",
    stages: [
      { name: "CBD", next: "Mombasa Road", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Mombasa Road",
        next: "Belle Vue",
        distance: 3.5,
        time: 18,
        fare: 45,
      },
      { name: "Belle Vue", next: "South C", distance: 1.5, time: 8, fare: 25 },
    ],
  },
  {
    id: 8,
    name: "CBD-Lavington Route",
    stages: [
      { name: "CBD", next: "Valley Road", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Valley Road",
        next: "James Gichuru Road",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "James Gichuru Road",
        next: "Lavington",
        distance: 2.5,
        time: 12,
        fare: 35,
      },
    ],
  },
  {
    id: 9,
    name: "CBD-Ruiru Route",
    stages: [
      { name: "CBD", next: "Thika Road", distance: 2.5, time: 12, fare: 35 },
      { name: "Thika Road", next: "Kahawa", distance: 4.0, time: 20, fare: 45 },
      { name: "Kahawa", next: "Ruiru", distance: 3.0, time: 15, fare: 40 },
    ],
  },
  {
    id: 10,
    name: "CBD-Kangemi Route",
    stages: [
      { name: "CBD", next: "Waiyaki Way", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Waiyaki Way",
        next: "Mountain View",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Mountain View",
        next: "Kangemi",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
    ],
  },
  {
    id: 11,
    name: "CBD-Uthiru Route",
    stages: [
      { name: "CBD", next: "Waiyaki Way", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Waiyaki Way",
        next: "Mountain View",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Mountain View",
        next: "Uthiru",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
    ],
  },
  {
    id: 12,
    name: "CBD-Kariobangi Route",
    stages: [
      {
        name: "CBD",
        next: "Haile Selassie Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Haile Selassie Avenue",
        next: "Outer Ring Road",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Outer Ring Road",
        next: "Kariobangi",
        distance: 2.5,
        time: 12,
        fare: 35,
      },
    ],
  },
  {
    id: 13,
    name: "CBD-Komarock Route",
    stages: [
      {
        name: "CBD",
        next: "Haile Selassie Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Haile Selassie Avenue",
        next: "Outer Ring Road",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Outer Ring Road",
        next: "Komarock",
        distance: 5.0,
        time: 25,
        fare: 55,
      },
    ],
  },
  {
    id: 14,
    name: "CBD-Kileleshwa Route",
    stages: [
      { name: "CBD", next: "Valley Road", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Valley Road",
        next: "Ring Road Kilimani",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Ring Road Kilimani",
        next: "Kileleshwa",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
    ],
  },
  {
    id: 15,
    name: "CBD-Roysambu Route",
    stages: [
      {
        name: "CBD",
        next: "Haile Selassie Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Haile Selassie Avenue",
        next: "Outer Ring Road",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Outer Ring Road",
        next: "Roysambu",
        distance: 5.0,
        time: 25,
        fare: 55,
      },
    ],
  },
  {
    id: 16,
    name: "CBD-Karen via Langata Route",
    stages: [
      { name: "CBD", next: "Uhuru Highway", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Uhuru Highway",
        next: "Langata Road",
        distance: 4.0,
        time: 20,
        fare: 45,
      },
      {
        name: "Langata Road",
        next: "Bomas of Kenya",
        distance: 3.0,
        time: 15,
        fare: 40,
      },
      {
        name: "Bomas of Kenya",
        next: "Karen",
        distance: 5.0,
        time: 25,
        fare: 55,
      },
    ],
  },
  {
    id: 17,
    name: "CBD-Kibera Route",
    stages: [
      { name: "CBD", next: "Uhuru Highway", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Uhuru Highway",
        next: "Langata Road",
        distance: 4.0,
        time: 20,
        fare: 45,
      },
      {
        name: "Langata Road",
        next: "Kibera",
        distance: 2.5,
        time: 12,
        fare: 35,
      },
    ],
  },
  {
    id: 18,
    name: "CBD-Nairobi West Route",
    stages: [
      { name: "CBD", next: "Uhuru Highway", distance: 2.0, time: 10, fare: 30 },
      {
        name: "Uhuru Highway",
        next: "Langata Road",
        distance: 4.0,
        time: 20,
        fare: 45,
      },
      {
        name: "Langata Road",
        next: "Nairobi West",
        distance: 2.0,
        time: 10,
        fare: 30,
      },
    ],
  },
  {
    id: 19,
    name: "CBD-Buruburu Route",
    stages: [
      {
        name: "CBD",
        next: "Haile Selassie Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Haile Selassie Avenue",
        next: "Outering Road",
        distance: 5.0,
        time: 25,
        fare: 55,
      },
      {
        name: "Outering Road",
        next: "Buruburu",
        distance: 4.0,
        time: 20,
        fare: 45,
      },
    ],
  },
  {
    id: 20,
    name: "CBD-Ngong Route",
    stages: [
      { name: "CBD", next: "Kencom", distance: 2, time: 10, fare: 30 },
      {
        name: "Kencom",
        next: "Railway Station",
        distance: 1,
        time: 5,
        fare: 20,
      },
      {
        name: "Railway Station",
        next: "Prestige Plaza",
        distance: 3,
        time: 15,
        fare: 40,
      },
      {
        name: "Prestige Plaza",
        next: "The Hub Karen",
        distance: 6,
        time: 25,
        fare: 60,
      },
      {
        name: "The Hub Karen",
        next: "Ngong Town",
        distance: 8,
        time: 35,
        fare: 70,
      },
    ],
  },
  {
    id: 21,
    name: "CBD-Juja Route",
    stages: [
      { name: "CBD", next: "Kencom", distance: 2, time: 10, fare: 30 },
      {
        name: "Kencom",
        next: "Railway Station",
        distance: 1,
        time: 5,
        fare: 20,
      },
      {
        name: "Railway Station",
        next: "Thika Road Mall",
        distance: 4,
        time: 20,
        fare: 50,
      },
      {
        name: "Thika Road Mall",
        next: "Juja City Mall",
        distance: 10,
        time: 40,
        fare: 80,
      },
      { name: "Juja City Mall", next: "Juja", distance: 5, time: 25, fare: 55 },
    ],
  },
  {
    id: 22,
    name: "CBD-Mbagathi Way Route",
    stages: [
      { name: "CBD", next: "Kenyatta Avenue", distance: 2, time: 10, fare: 30 },
      {
        name: "Kenyatta Avenue",
        next: "Uhuru Highway",
        distance: 1,
        time: 5,
        fare: 20,
      },
      {
        name: "Uhuru Highway",
        next: "Nyayo Stadium",
        distance: 3,
        time: 15,
        fare: 40,
      },
      {
        name: "Nyayo Stadium",
        next: "T Mall",
        distance: 2,
        time: 10,
        fare: 30,
      },
      { name: "T Mall", next: "KNH", distance: 2, time: 10, fare: 30 },
      {
        name: "KNH",
        next: "Strathmore University",
        distance: 3,
        time: 15,
        fare: 40,
      },
      {
        name: "Strathmore University",
        next: "Rongai",
        distance: 12,
        time: 50,
        fare: 100,
      },
    ],
  },
  {
    id: 23,
    name: "CBD-Kilimani Route",
    stages: [
      { name: "CBD", next: "Kenyatta Avenue", distance: 2, time: 10, fare: 30 },
      {
        name: "Kenyatta Avenue",
        next: "Uhuru Highway",
        distance: 1,
        time: 5,
        fare: 20,
      },
      {
        name: "Uhuru Highway",
        next: "Langata Road",
        distance: 4,
        time: 20,
        fare: 50,
      },
      {
        name: "Langata Road",
        next: "Yaya Centre",
        distance: 3,
        time: 15,
        fare: 40,
      },
      {
        name: "Yaya Centre",
        next: "Kilimani",
        distance: 2,
        time: 10,
        fare: 30,
      },
    ],
  },
  {
    id: 24,
    name: "CBD-Mwiki Route",
    stages: [
      { name: "CBD", next: "Kenyatta Avenue", distance: 2, time: 10, fare: 30 },
      {
        name: "Kenyatta Avenue",
        next: "Uhuru Highway",
        distance: 1,
        time: 5,
        fare: 20,
      },
      {
        name: "Uhuru Highway",
        next: "Thika Road",
        distance: 5,
        time: 25,
        fare: 55,
      },
      { name: "Thika Road", next: "Kasarani", distance: 7, time: 35, fare: 70 },
      { name: "Kasarani", next: "Mwiki", distance: 3, time: 15, fare: 40 },
    ],
  },
  {
    id: 25,
    name: "CBD-Ruai Route",
    stages: [
      {
        name: "CBD",
        next: "Tom Mboya Street",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Tom Mboya Street",
        next: "Outering Road",
        distance: 7,
        time: 30,
        fare: 60,
      },
      { name: "Outering Road", next: "Ruai", distance: 5, time: 25, fare: 50 },
    ],
  },
  {
    id: 26,
    name: "CBD-Muthaiga Route",
    stages: [
      { name: "CBD", next: "University Way", distance: 1, time: 5, fare: 20 },
      {
        name: "University Way",
        next: "Thika Road",
        distance: 5,
        time: 20,
        fare: 40,
      },
      { name: "Thika Road", next: "Muthaiga", distance: 3, time: 15, fare: 30 },
    ],
  },
  {
    id: 27,
    name: "CBD-Githurai Route",
    stages: [
      {
        name: "CBD",
        next: "Haile Selassie Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Haile Selassie Avenue",
        next: "Outering Road",
        distance: 6,
        time: 25,
        fare: 50,
      },
      {
        name: "Outering Road",
        next: "Githurai",
        distance: 4,
        time: 20,
        fare: 40,
      },
    ],
  },
  {
    id: 28,
    name: "CBD-Mwiki Route",
    stages: [
      {
        name: "CBD",
        next: "Kenyatta Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Kenyatta Avenue",
        next: "Outering Road",
        distance: 6,
        time: 25,
        fare: 50,
      },
      {
        name: "Outering Road",
        next: "Kasarani",
        distance: 4,
        time: 20,
        fare: 40,
      },
      { name: "Kasarani", next: "Mwiki", distance: 3, time: 15, fare: 30 },
    ],
  },
  {
    id: 29,
    name: "CBD-Kangemi Route",
    stages: [
      {
        name: "CBD",
        next: "Haile Selassie Avenue",
        distance: 1.5,
        time: 8,
        fare: 25,
      },
      {
        name: "Haile Selassie Avenue",
        next: "Waiyaki Way",
        distance: 4,
        time: 20,
        fare: 40,
      },
      { name: "Waiyaki Way", next: "Kangemi", distance: 3, time: 15, fare: 30 },
    ],
  },
];

export const buses = [
  {
    id: 1,
    busNo: "1A",
    routeId: 1,
    to: "Karen",
    currentLocation: "Prestige Plaza",
    distanceToCurrentLocation: 2,
    timeToCurrentLocation: 10,
    distanceToStage: 6,
    timeToStage: 25,
    capacity: 50,
    sacco: "Metro Trans",
    numberPlate: "KAA 123X", // Add number plate field
    calculateFare: function () {
      let totalFare = 0;
      const route = routes.find((route) => route.id === this.routeId);
      const currentStageIndex = route.stages.findIndex(
        (stage) => stage.name === this.currentLocation
      );
      if (currentStageIndex !== -1) {
        for (let i = currentStageIndex; i < route.stages.length; i++) {
          totalFare += route.stages[i].fare;
        }
      }
      return totalFare;
    },
  },
  {
    id: 2,
    busNo: "2B",
    routeId: 2,
    to: "CBD",
    currentLocation: "Thika Town",
    distanceToCurrentLocation: 2.2,
    timeToCurrentLocation: 8,
    distanceToStage: 4.5,
    timeToStage: 15,
    capacity: 50,
    sacco: "Metro Trans",
    numberPlate: "KAB 456Y", // Add number plate field
    calculateFare: function () {
      let totalFare = 0;
      const route = routes.find((route) => route.id === this.routeId);
      const currentStageIndex = route.stages.findIndex(
        (stage) => stage.name === this.currentLocation
      );
      if (currentStageIndex !== -1) {
        for (let i = currentStageIndex; i < route.stages.length; i++) {
          totalFare += route.stages[i].fare;
        }
      }
      return totalFare;
    },
  },
  {
    id: 3,
    busNo: "3C",
    routeId: 3,
    to: "Stage P",
    currentLocation: "Stage K",
    distanceToCurrentLocation: 3.0,
    timeToCurrentLocation: 12,
    distanceToStage: 6.0,
    timeToStage: 20,
    capacity: 50,
    sacco: "Metro Trans",
    numberPlate: "KAC 789Z", // Add number plate field
    calculateFare: function () {
      let totalFare = 0;
      const route = routes.find((route) => route.id === this.routeId);
      const currentStageIndex = route.stages.findIndex(
        (stage) => stage.name === this.currentLocation
      );
      if (currentStageIndex !== -1) {
        for (let i = currentStageIndex; i < route.stages.length; i++) {
          totalFare += route.stages[i].fare;
        }
      }
      return totalFare;
    },
  },
];

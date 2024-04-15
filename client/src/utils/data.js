export const appName = "MetroMate";

export const minibuses = [
  { id: 1, name: "Minibus 1", capacity: 20 },
  { id: 2, name: "Minibus 2", capacity: 20 },
  { id: 3, name: "Minibus 3", capacity: 20 },
];

export const routes = [
  {
    id: 1,
    name: "Route 1",
    stages: [
      { name: "Stage A", next: "Stage B", distance: 2, time: 10, fare: 30 },
      { name: "Stage B", next: "Stage C", distance: 3, time: 15, fare: 40 },
      { name: "Stage C", next: "Stage D", distance: 4, time: 20, fare: 50 },
      // Add more stages as needed
    ],
  },
  {
    id: 2,
    name: "Route 2",
    stages: [
      { name: "Stage X", next: "Stage Y", distance: 2.5, time: 12, fare: 35 },
      { name: "Stage Y", next: "Stage Z", distance: 3.5, time: 18, fare: 45 },
      // Add more stages as needed
    ],
  },
  // Add more routes as needed
];

export const buses = [
  {
    id: 1,
    busNo: "1A",
    routeId: 1,
    to: "Stage A",
    currentLocation: "Stage B",
    distanceToCurrentLocation: 1.5,
    timeToCurrentLocation: 5,
    distanceToStage: 3.2,
    timeToStage: 10,
    fare: 50,
    capacity: 50,
    sacco: "Metro Trans",
  },
  {
    id: 2,
    busNo: "2B",
    routeId: 2,
    to: "Stage X",
    currentLocation: "Stage Y",
    distanceToCurrentLocation: 2.2,
    timeToCurrentLocation: 8,
    distanceToStage: 4.5,
    timeToStage: 15,
    fare: 60,
    capacity: 50,
    sacco: "Metro Trans",
  },
  {
    id: 3,
    busNo: "3C",
    routeId: 1,
    to: "Stage E",
    currentLocation: "Stage F",
    distanceToCurrentLocation: 3.0,
    timeToCurrentLocation: 12,
    distanceToStage: 6.0,
    timeToStage: 20,
    fare: 70,
    capacity: 50,
    sacco: "Metro Trans",
  },
];

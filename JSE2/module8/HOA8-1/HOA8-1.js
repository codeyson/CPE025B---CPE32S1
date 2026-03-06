/*
Create a Vehicle class. The constructor requires two arguments for id and type. It must initialize an isDeployed property to false.
Create a FleetManager class. It must contain a vehicles array to store the fleet.
Add an addVehicle method to FleetManager that accepts a Vehicle object and pushes it into the vehicles array.
Add a deployVehicle method to FleetManager that accepts a vehicle id. It must find the matching vehicle in the array and change its isDeployed status to true. If the vehicle is not found, it should return undefined.
Add a getAvailableVehicles method to FleetManager that returns an array of all vehicles where isDeployed is false.

*/

class Vehicle { constructor(id, type) {
    // Code here!
    this.id = id;
    this.type = type;
    this.isDeployed = false;
    }
}


class FleetManager { constructor() {
    this.vehicles = [];
    }

    addVehicle(vehicle) {
    this.vehicles.push(vehicle)
    }

    deployVehicle(id) {
        const vehicle = this.vehicles.find(v => v.id === id);
    
        if (vehicle) {
            vehicle.isDeployed = true;
            return vehicle;
        } else {
            return undefined;
        }
    }

    getAvailableVehicles() {
        return this.vehicles.filter(v => v.isDeployed === false);
    }
}

// Test Entity Instantiation
console.log("*** Test Entity Instantiation***"); 
const testVehicle = new Vehicle("V01", "Truck"); 
console.log(testVehicle);
// Expect Vehicle object with id: V01, type: Truck, isDeployed: false

// Test Composition and Insertion
console.log("\n*** Test Composition and Insertion***"); 
const fleet = new FleetManager(); 
fleet.addVehicle(testVehicle);
fleet.addVehicle(new Vehicle("V02", "Van")); 
fleet.addVehicle(new Vehicle("V03", "Drone")); 
console.log(fleet.vehicles.length);
// Expect: 3

// Test State Mutation
console.log("\n*** Test State Mutation ***"); fleet.deployVehicle("V02");
const deployedVehicle = fleet.vehicles.find(v => v.id === "V02"); 
console.log(deployedVehicle.isDeployed);
// Expect: true


// Test Data Filtering
console.log("\n*** Test Data Filtering ***"); 

const available = fleet.getAvailableVehicles(); 
console.log(available.length);
console.log(available.map(v => v.id));
// Expect: 2 
// Expect: [ V01, V03 ]

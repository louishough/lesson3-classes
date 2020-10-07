class Bag {
    constructor(weight) {
        if (!weight) throw new Error("bag must have a weight")
        this.weight = weight
    }
}

class Passenger {
    constructor(name) {
        this.name = name
        this.bags = []
    }
    addBag(bag) {
        this.bags.push(bag)
    }
}

class Plane {
    constructor(destination) {
        this.destination = destination
        this.passengers = []
    }
    addPassenger(passenger) {
        this.passengers.push(passenger)
    }
}

class Airport {
    constructor(name) {
        this.name = name
        this.arrivals = []
    }
    addPlane(arrival) {
         this.arrivals.push(arrival)
    }
}



module.exports = {Bag, Passenger, Plane, Airport}
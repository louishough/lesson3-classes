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
    static airports = []

    constructor(name) {
        this.name = name
        this.arrivals = []
        this.constructor.airports.push(this)
    }
    addPlane(arrival) {
         this.arrivals.push(arrival)
    }

    departure(plane) {
        const liftOff = this.arrivals.indexOf(plane)
        this.arrivals.splice(liftOff, 1)
    }

    landing(arrivals, destination) {
        const landing = this.arrivals.indexOf(this.arrivals)
        this.arrivals.splice(landing, 1)
        destination.arrivals.push(arrivals)
    }
}



module.exports = {Bag, Passenger, Plane, Airport}
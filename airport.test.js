const { TestScheduler } = require("jest")
const {Airport, Plane, Passenger, Bag } = require('./airport')

describe("bag", () => {
    test("has a weight", () => {
        const bag = new Bag(13)
        expect(bag.weight).toBe(13)
    })
    test("bag must have a weight", () => {
        expect(() => new Bag()).toThrowError("bag must have a weight")
    })
})


describe("passenger", () => {
    test("has a name", () => {
        const passenger = new Passenger("Louis")
        expect(passenger.name).toBe("Louis")
    })
    test("can carry bags", () => {
        const passenger = new Passenger("David")
        passenger.addBag(new Bag(23))
        passenger.addBag(new Bag(22))
        expect(passenger.bags.length).toBe(2)
    })
})


describe("plane", () => {
    test("has destination", () => {
        const plane = new Plane("France")
        expect(plane.destination).toBe("France")
    })
    test("can board passengers", () => {
        const plane = new Plane("France")
        plane.addPassenger(new Passenger("Tom"))
        plane.addPassenger(new Passenger("Francis"))
        expect(plane.passengers.length).toBe(2)
    })
})


describe("airport", () => {
    test("has name", () => {
        const airport = new Airport("Paris")
        expect(airport.name).toBe("Paris")
    })
    test("can land plane", () => {
        const airport = new Airport("Paris")
        airport.addPlane(new Plane("France"))
        expect(airport.arrivals.length).toBe(1)
    })
})


describe("successful takeoff and landing", () => {
    test("plane has passengers with bags", () => {
        const bag = new Bag(15)
        const passenger = new Passenger("Tom")
        const plane = new Plane("Italy")
        passenger.addBag(bag)
        plane.addPassenger(passenger)
        expect(plane.passengers.length).toBe(1)
        expect(passenger.bags.length).toBe(1)

    })
    test("plane landed with passengers who have bags", () => {
        const bag1 = new Bag(15)
        const bag2 = new Bag(23)
        const passenger1 = new Passenger("Amber")
        const passenger2 = new Passenger("Selina")
        const plane = new Plane("France")
        const airport = new Airport("Paris")

        passenger1.addBag(bag1)
        passenger2.addBag(bag2)
        plane.addPassenger(passenger1)
        plane.addPassenger(passenger2)
        airport.addPlane(plane)

        expect(airport.arrivals.length).toBe(1)
        expect(plane.passengers.length).toBe(2)
        expect(passenger1.bags.length).toBe(1)
        expect(passenger2.bags.length).toBe(1)
    })
})


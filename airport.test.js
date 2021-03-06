const { TestScheduler } = require("jest")
const {Airport, Plane, Passenger, Bag, Crew, Pilot} = require('./airport')

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

describe("crew", () => {
    test("crew can make coffee", () => {
        const crewMember = new Crew
        expect(crewMember.makeCoffee()).toBe("Here is your coffee!")
    })
    test("crew have a namebadge", () => {
        expect(new Crew("David").name).toBe("David")
    })
    test("crew can carry bags", () => {
        const david = new Crew("David")
        david.addBag(2)
        expect(david.bags.length).toBe(1)
    })
})

describe("pilot", () => {
    test("can fly planes", () => {
        expect(new Pilot("Tom").canFlyPlane()).toBe(1)
    })
    test("pilots have name badges", () => {
        expect(new Pilot("Tom").name).toBe("Tom")
    })
    test("pilots can carry bags", () => {
        const tom = new Pilot("Tom")
        tom.addBag(5)
        expect(tom.bags.length).toBe(1)
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

describe("moving planes", () => {
    test.skip("accessible airport instances are possible",() => (
        expect(Airport.airports).toEqual([])
    ))
    test("planes can move from one airport to another", () => {
        Airport.airports = []
        const bag = new Bag(20)
        const passenger = new Passenger("Tim")
        const departure = new Plane("1")
        const departure2 = new Plane("2")
        const LAX = new Airport("LAX")
        const JFK = new Airport("JFK")
        const NYC = new Airport("NYC")
        const LDN = new Airport("LDN")

        passenger.addBag(bag)
        departure.addPassenger(passenger)
        LAX.addPlane(departure)
        LDN.addPlane(departure2)
        LAX.departure(departure)
        LDN.departure(departure2)
        LAX.landing(departure, JFK)
        LDN.landing(departure2, NYC)
        
        expect(LAX.arrivals.length).toBe(0)
        expect(LDN.arrivals.length).toBe(0)
        expect(JFK.arrivals.length).toBe(1)
        expect(NYC.arrivals.length).toBe(1)
    })
})

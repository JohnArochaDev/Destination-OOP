let Plane = require('../../classes/Plane')

describe('Testing the Person class', () => {
    test('Does the class initialize and return the correct values', () => {
        const plane = new Plane('company', 'location', '2nd location')
        expect(plane).toBeInstanceOf(Plane)
        expect(plane.company).toEqual('company')
        expect(plane.origin).toEqual('location')
        expect(plane.destination).toEqual('2nd location')
        expect(plane.getPassengers()).toEqual([])
        plane.addPassenger('passenger')
        expect(plane.getPassengers()).toEqual(['passenger'])
    })
})
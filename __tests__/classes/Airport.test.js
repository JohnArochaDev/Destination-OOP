let Airport = require('../../classes/Airport')

describe('Testing the Person class', () => {
    test('Does the class initialize and return the correct values', () => {
        const airport = new Airport('airport', 'LAH')
        expect(airport).toBeInstanceOf(Airport)
        expect(airport.name).toEqual('airport')
        expect(airport.airportCode).toEqual('LAH')
        expect(airport.getPlanes()).toEqual([])
        airport.addPlane('plane')
        expect(airport.getPlanes()).toEqual(['plane'])
    })
})
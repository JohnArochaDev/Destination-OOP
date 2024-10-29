let Person = require('../../classes/Person')

describe('Testing the Person class', () => {
    test('Does the class initialize and return the correct values', () => {
        const person = new Person('human', 'location')
        expect(person).toBeInstanceOf(Person)
        expect(person.name).toEqual('human')
        expect(person.destination).toEqual('location')
        expect(person.getBags()).toEqual([])
        person.addBag('bag')
        expect(person.getBags()).toEqual(['bag'])
    })
})
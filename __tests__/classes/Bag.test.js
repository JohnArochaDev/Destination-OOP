let Bag = require('../../classes/Bag')

describe('Testing the Bag class', () => {
    test('Does the class initialize and return the correct values', () => {
        const bag = new Bag(10, 17071)
        expect(bag).toBeInstanceOf(Bag)
        expect(bag.weight).toEqual(10)
        expect(bag.id).toEqual(17071)
        expect(bag.getOwner()).toEqual(null)
        bag.assignOwner(10)
        expect(bag.getOwner()).toEqual(10)
    })
})
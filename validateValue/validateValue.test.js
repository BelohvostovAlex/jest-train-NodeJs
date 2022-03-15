const validateValue = require('./validateValue')

describe('validation', () => {
    test('correctVal', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('the lowest value of the border', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('the highest value of the border', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('lower than the lowest border', () => {
        expect(validateValue(-1)).not.toBe(true)
    })
    test('higher than the highest border', () => {
        expect(validateValue(-1)).toBe(false)
    })
});


const mapArrToString = require('./mapArrToString')

describe('toString', () => {
    test('correctVal', () => {
        expect(mapArrToString([1,2,3])).toEqual(['1','2','3'])
    })
    test('randomArrVal', () => {
        expect(mapArrToString([1,2,3, undefined, null, 'ksks'])).toEqual(['1','2','3'])
    })
    test('empty arr', () => {
        expect(mapArrToString([])).toEqual([])
    })
    test('wrongVal', () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3])
    })
})
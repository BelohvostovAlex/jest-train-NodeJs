const square = require('./square')

describe('squareVal', () => {
    let spyMathPow
    beforeEach(() => {
        spyMathPow = jest.spyOn(Math, 'pow')
    })
    test('2', () => {
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
        expect(square(2)).toBe(4)
    })
    test('1', () => {
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
    test('tblstn', () => {
        expect(square(2)).toBeLessThan(5)
    })
    test('tbgrtm', () => {
        expect(square(2)).toBeGreaterThan(3)
    })
    test('nttbundefined', () => {
        expect(square(2)).not.toBeUndefined()
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
})
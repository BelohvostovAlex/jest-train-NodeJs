const square = require('./square')

describe('squareVal', () => {
    beforeEach(() => {

    })
    test('2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
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
const delay = require('./delay')

describe('delay', () => {
    test('correct', async() => {
        const sum = await delay(() => 2 + 2, 2000)
        expect(sum).toBe(4)
    })
})
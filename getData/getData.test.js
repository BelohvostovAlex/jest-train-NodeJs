const getData = require('./getData')
const axios = require('axios')

jest.mock('axios')

describe('getData', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                  },
            ]
        }
    })
    test('correctVal', async () => { 
        axios.get.mockReturnValue(response)
        const data = await getData()
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual(['1','2','3'])
        expect(data).toMatchSnapshot()
    })
});

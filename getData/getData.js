const axios = require('axios')
const mapArrToString = require('../mapArrToString/mapArrToString.js')

const getData = async () => {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const userIds = data.map(item => item.id)
        return mapArrToString(userIds)
    } catch (error) {
        
    }
}

module.exports = getData
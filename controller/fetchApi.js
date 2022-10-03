const axios = require('axios');


const getAnime = (url, params={}) => {
    return axios({
        url: url,
        method: 'GET',
        params: params
    })
}

module.exports = getAnime;
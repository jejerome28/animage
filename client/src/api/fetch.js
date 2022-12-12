import axios from "axios"

const getAnime = async (url, params={}) => {
    try{
        const results = await axios({
            url: url,
            method: 'GET',
            params: params
        })
        return results.data
    }
    catch(e){
        console.log(e.message)
    }
}

const postNewUser = async (url, params={}) => {
    try{
        const results = await axios({
            url: url,
            method: 'POST',
            params: params
        })
        return results.data
    }
    catch(e){
        console.log(e.message)
    }
}

export {
    getAnime,
    postNewUser
}

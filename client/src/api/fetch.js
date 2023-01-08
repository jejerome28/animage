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

const postNewUser = async (url, data) => {
    try{
        const results = await axios({
            url: url,
            method: 'POST',
            data: data
        })
        return results.data
    }
    catch(e){
        console.log(e.message)
    }
}

const getUser = async (url, data) => {
    try{
        const results = await axios({
            url: url,
            method: 'POST',
            data: data,
            withCredentials: true
        })
        return results.data
    }
    catch(e){
        console.log(e.message)
    }
}

export {
    getAnime,
    postNewUser,
    getUser
}

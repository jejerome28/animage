import axios from "axios"

const getAnime = async (url, params={}) => {
    try{
        const results = await axios({
            url: url,
            method: 'GET',
            params: params
        })
        return results.data.data
    }
    catch(e){
        console.log(e.message)
    }
}

export default getAnime;

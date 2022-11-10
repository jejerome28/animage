import React from "react";
import style from './Card.module.css'
import axios from 'axios'

// const Card = (props)=>{
//     return(
//         <>
//         <div className={style.card}>
//             <img src={props.results.images.jpg.large_image_url} alt='anime pic' ></img>
//         </div>
//         </>
//     )
// }
class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {results: ' '}
    }
    
    async componentDidMount(){
        const getAani = await this.getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'bypopularity', page:1});
        this.setState({results: getAani});
        console.log(this.state.results)
    }
    
    async componentWillUnmount(){
        clearInterval(await this.getAani)
    }

    getAnime = async (url, params={}) => {
        const results = await axios({
            url: url,
            method: 'GET',
            params: params
        })
        
    
    return results.data.data
    }
    
    render(){
        return(
            <div>
                    
            <p>{this.state.results[0].title}</p>
            </div>
        )
    }

}

export default Card
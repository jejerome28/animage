import React from "react";
import style from './Card.module.css'
import axios from 'axios'

const Card = ({anime})=>{
    return(
        <>
        <div className={style.card}>
            <img src={anime.images.webp.small_image_url} alt='anime pic' ></img>
            <p>{anime.title}</p>
        </div>
        </>
    )
}
// mauuna muna na marender bago mag mount

// class Card extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {results: {}}
//     }
    
//     async componentDidMount(){
//         const getAani = await this.getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'bypopularity', page:1});
//         this.setState({results: getAani});
//         console.log(this.state.results[0].images);
//         // console.log;
//     }
    
    
//     async componentWillUnmount(){
//         clearInterval(await this.getAani);
//     }

//     getAnime = async (url, params={}) => {
//         const results = await axios({
//             url: url,
//             method: 'GET',
//             params: params
//         })
        
    
//     return results.data.data
//     }
    
//     render(){
//         return(
//             <div className={style.card}>
//                 {/* <img src={this.state.results[0].image_url} alt={this.state.results[0].title} /> */}
//                 {/* <p>{this.state.results[0].title}</p> */}
//             </div>
//         )
//     }

// }

export default Card
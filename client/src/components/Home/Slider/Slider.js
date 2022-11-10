import React from "react";
import style from './Slider.module.css'
import Card from "../Card/Card";



// class Ani extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {results: ''}
//     }
    
//     async componentDidMount(){
//         const getAani = await this.getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'bypopularity', page:1});
//         this.setState({results: getAani});
//         console.log(this.state.results[0])
//     }
    
//     async componentWillUnmount(){
//         clearInterval(await this.getAani)
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
//             <>
//             <p>{this.state.results}</p>
//             </>
//         )
//     }

// }

const Slider = () =>{
    return(
        <>
        <div className={style.wrapper}>
            <Card/>
            </div>
        </>
    )
}

export default Slider
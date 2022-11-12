import React, {useState} from "react";
import style from './Slider.module.css'
import Card from "../Card/Card";
import axios from "axios";



class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {results: []}
        
    }
    
    async componentDidMount(){
        const getAani = await this.getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'bypopularity', page:1});
        this.setState({results: getAani},()=>{console.log(this.state.results[0])});
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
        const {results} = this.state
        const sliced = results.slice(0,7)
        return(
        <div className={style.wrapper}>
            {sliced.map(ani=>(<Card anime={ani}  key={ani.mal_id}/>))}
            
        </div>
        )
    }

}

// const getAnime = async (url, params={}) => {
    
//     const results = await axios({
//         url: url,
//         method: 'GET',
//         params: params
//     })
    

//     return results.data.data
// }


// const Slider = () =>{
//     const[results, getResult]=useState({})
    
//     cosnt ani = getAnime()
//     return(
//         <>
//         <div className={style.wrapper}>
//             <Card />
//             </div>
//         </>
//     )
// }

export default Slider
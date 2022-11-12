import React, {useState, useEffect} from "react";
import style from './Slider.module.css'
import Card from "../Card/Card";
import getAnime from "../../../api/fetch";


// class Slider extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {results: []}
        
//     }
    
//     async componentDidMount(){
//         const getAani = await this.getAnime('https://api.jikan.moe/v4/top/anime', {filter: 'bypopularity', page:1});
//         this.setState({results: getAani},()=>{console.log(this.state.results[0])});
//     }
    

//     async componentWillUnmount(){
//         clearInterval(await this.getAani)
//     }
//      getAnime = async (url, params={}) => {
//         const results = await axios({
//             url: url,
//             method: 'GET',
//             params: params
//         })
        
    
//         return results.data.data
//     }
    
//     render(){
//         const {results} = this.state
//         const sliced = results.slice(0,7)
//         return(
//         <div className={style.wrapper}>
//             {sliced.map(ani=>(<Card anime={ani}  key={ani.mal_id}/>))}
            
//         </div>
//         )
//     }

// }

const Slider = () =>{
    const[results, setResult]=useState([])
    
    const getSznAni = async ()=> {
        const sznAni = await getAnime('https://api.jikan.moe/v4/seasons/now', {page:1})
        setResult(sznAni.slice(0,7))
    }
    useEffect(()=>{
        getSznAni()
    },[])

    

    
    return(
        <>
        <div className={style.wrapper}>
            {results.map(ani=>(<Card anime={ani} key={ani.mal_id}/>))}
        </div>
        </>
    )
}

export default Slider
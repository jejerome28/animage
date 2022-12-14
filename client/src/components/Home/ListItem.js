import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import useFetch from "../../actions/useFetch"
import Title from "../Title/Title"

const ListItem = ()=>{
    //get anime list from server using custom hook
    const url = 'http://localhost:5000';
    const {topAnimes} = useFetch(url);

    return(
        <>
        <Title title={'Top popular anime'}/>
        
        {/*map thru the array of objects and render in to the elements*/}
        {topAnimes ? topAnimes.map(anime => 
        <Link key={anime.mal_id} to={`/details/`+ anime.mal_id}>
            <div className='flex mb-4 bg-accent2 rounded-md cursor-pointer hover:scale-110 ease-in duration-300'>
                    <img src={anime.images.webp.image_url} alt='anime pic' className="mr-4 w-20 p-2 rounded-md" ></img>
                    <div>
                        <section className="text-complement1 mb-12 mt-1 font-semibold">
                            {anime.title}
                        </section>
                        {anime.genres.map((genre, index) => (<span className="mr-4 text-complement1" key={anime.mal_id + index}>{genre.name}</span>))}
                    </div>
            </div>
        </Link>
            
        ): (<h1>loading..</h1>)}
        </>
    )
}

ListItem.propTypes = {
    anime: PropTypes.object
}


export default ListItem

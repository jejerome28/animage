import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const ListItem = ({ani_details,children})=>{

    return(
        <>

        {/*map thru the array of objects and render in to the elements*/}
        {ani_details.map(anime => 
        <Link className="flex mb-4 mx-2 bg-accent2 rounded-md md:cursor-pointer md:hover:scale-110 md:ease-in md:duration-300" key={anime.mal_id} to={`/details/`+ anime.mal_id}>
                <img src={anime.images.webp.image_url} alt='anime pic' className="mr-4 w-20 p-2 rounded-md" ></img>
                <div>
                    <section className="text-complement1 mb-12 mt-1 font-semibold">
                        {anime.title}
                    </section>
                    {anime.genres.map((genre, index) => (<span className="mr-4 text-complement1" key={anime.mal_id + index}>{genre.name}</span>))}
                </div>
        </Link>)}
        {children}
        </>
    )
}

ListItem.propTypes = {
    ani_details: PropTypes.array,
    children: PropTypes.object
}


export default ListItem

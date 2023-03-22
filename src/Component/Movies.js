import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './Context'

export const Movies = () => {
  const {movie}=useGlobalContext()
  return(
  <>
  <section >
    <div>
    {movie.map((curMovie)=>{
    const {imdbID,Title,Poster}=curMovie
    const movieName=Title.substring(0,15)
      return <NavLink className=" text-decoration-none"to ={`movie/${imdbID}`} style={{padding:"6px"}}>
        <div  className="d-inline-flex border rounded" > 
          <div>
            <h5 className='text-secondary  text-center '>{movieName.length >=15?`${movieName}...`:movieName}</h5>
            <img src={Poster} alt={imdbID}/>
          </div>
        </div>
      </NavLink>
      

      })}
      </div>
    </section>
      </>
      )
}

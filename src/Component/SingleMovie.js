import { useState,useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';


export const SingleMovie = () => {
  const {id}=useParams();
  const [isLoading,setIsLoading]=useState(true);
  const [movie,setMovie]=useState("");
  const [isError,setIsError]=useState({show:"false",msg:""});
  // const [search,setSearch]=useState("love")
  const getMovies=async(url)=>{
      try {
          const res=await fetch(url);
          const data=await res.json();
          console.log(data);
          if(data.Response==='True'){
              setIsLoading(false);
              setMovie(data)
          }
          else{
              setIsError({
                  show:true
                  ,msg:data.error
              })
          }
      } catch (error) {
              console.log(error);
      }
  }
  useEffect(() => {
       let timerout=setTimeout(()=>{
          getMovies(`${API_URL}&i=${id}`);
      },1)
  
  return ()=>clearTimeout(timerout)
    },[id]);
    if (isLoading)
    {
      return(
        <div className='text-secondary'> 
          <div>
            LOADING..........
          </div>
        </div>
      )
    }
    return (
      <><section>
      <div class="container text-center text-secondary-emphasis position-absolute top-50 start-50 translate-middle">
          <figure className='d-inline-flex'>
          <img src={movie.Poster} alt="no img" />
          <div class="col"style={{padding:"20% 0%",textAlign: "left"}} >
          <h4>Title:{movie.Title}</h4>
          <h4>Year:{movie.Year}</h4>
          <h4>Director:{movie.Director}</h4>
          <h4>Released:{movie.Released}</h4>
          <NavLink to="/"><button type="button" class="btn btn-primary " >Go Back</button> </NavLink>
          </div>
      </figure>
</div>

     
      <div>
        
      </div>
     </section>
      </>
    )
}



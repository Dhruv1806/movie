 import React  from 'react'
import { useGlobalContext } from './Context'
 
 export const Search = () => {
 const{search,setSearch,isError}=useGlobalContext();
 return (
 <section>
  {/* <div className="text-center">
  <h2>search your fav movie</h2>
  <hr className="border border-danger border-2 opacity-50"/>
  </div> */}
  <form action='#' onSubmit={(e)=>e.preventDefault()}>
    <div className='h-25 '>
      <input  className="text-center fs-3" style={{background: "black",width:"100%",color: "#6c757d",border:"0",textalign:"center", focus:{border: "3px solid #555"}}} type="text" placeholder='Search here for movies' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <hr className="border border-danger border-2 opacity-50"/>

    </div>
  </form>
  <div>
    <p>
  {isError.show && isError.msg}
    </p>
  </div>
 </section>
   )
 }
 
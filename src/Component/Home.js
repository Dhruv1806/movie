import React,{useEffect} from 'react'
import { Movies } from './Movies'
// import { useGlobalContext } from './Context'

import { Search } from './Search'

export const Home = () => {
  
  useEffect(()=>{
    document.body.style.backgroundColor="black";
  })
  return (
    <>
    
    <Search/>
    <Movies/>
    </>
  )
}

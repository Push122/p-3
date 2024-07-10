import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flipcart from './component/flipcart'
import Product from './component/Flipcart1'
import Pus from './component/flipcart2'

let App=()=>{
  return(
    <>
   <Flipcart/>
   <Product/>
   <Pus/>
    </>
  )
}
export default App

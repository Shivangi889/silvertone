import { lazy ,Suspense} from 'react'

import Navbar from '../Navbar/Navbar'


const Banner= lazy(() => import('./Banner'));

const Landingpage = () => {
 
  return (
    <div>
      <Navbar/>
   
    <Suspense fallback={<div>.....</div>}>
    <Banner />
 
 </Suspense>
   
    </div>
  )
}

export default Landingpage
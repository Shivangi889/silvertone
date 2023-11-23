import React from 'react'
import Landingpage from './landingpage/Landingpage';
import LatestProperties from './LastestProperties-pages/LatestProperties';
import ListDevelopers from './DevelopersList/ListDevelopers';
import CTAbanner from './EstateBanner.js/CTAbanner';
import Cards from './Testimonial/Cards';
import Footer1 from './Footer/Footer1';





const Home = () => {
    return (
        <>

            <Landingpage />
            <LatestProperties />
             <ListDevelopers />
            <CTAbanner /> 
          
            <Cards />

           <Footer1/> 

        </>
    )
}

export default Home
import { Route, Routes } from "react-router-dom";
import './App.css';

import About from "./component/pages/About/About";
import Properties from "./component/pages/Properties/Properties";
import Developers from "./component/pages/Developers/Developers";
import Contact from "./component/pages/Contact/Contact";
import Residential from "./component/pages/Properties/residential/residential";
import Home from "./component/Home";
import SearchBox from "./component/landingpage/SearchBox/SearchBox";
import SearchResults from "./component/landingpage/SearchBox/Searchresult";



function App() {
  return (
    <div className="App">
   {/* <Landingpage /> */}
    <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/properties" element={<Properties/>} />

        <Route path="/residential" element={<Residential/>} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/searchlist" element={<SearchBox/>} /> */}
        {/* <Route path="/property-lists/:type" element={<Residential />} /> */}
        

       
        <Route path="/search" element={<SearchBox />} />
        <Route path="/property-lists/:type" element={<SearchResults />} />
       
      
   



      </Routes>
   
  
 
     
    </div>
  );
}

export default App;

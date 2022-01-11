import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Card1 from './components/Card1.js';
import Card2 from './components/Card2.js';
import Card3 from './components/Card3.js';


function App() {
  
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Card1/>} />
       <Route path='/Card2' element={<Card2/>}/>
       <Route path='/Card3' element={<Card3/>}/>
       {/* <Route element={<Error/>}/> */}
    </Routes>
  </Router>   
);
};

export default App;

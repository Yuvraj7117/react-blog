
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Card1 from './components/Card1.js';
import Card2 from './components/Card2.js';
import Card3 from './components/Card3.js';
import Hollywood from './components/Hollywood';
import Technology from './components/Technology';
import Fitness from './components/Fitness';
import Food from './components/Food';
import Errors from './components/Errors';


function App() {
  
  return (
  <Router>
    <Routes>
       <Route exact path="/" element={<Card1/>} />
       <Route path='/Card2' element={<Card2/>}/>
       <Route path='/Card3' element={<Card3/>}/>
       <Route path='/technology' element={<Technology/>}/>
       <Route path='/hollywood' element={<Hollywood/>}/>
       <Route path='/fitness' element={<Fitness/>}/>
       <Route path='/Food' element={<Food/>}/>
       <Route path="*" element={<Errors/>}/>
    </Routes>
  </Router>   
);
};

export default App;

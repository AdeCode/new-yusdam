import './App.css';
import './Components/style/style.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './Components/pages/Home'
import Contact from './Components/pages/Contact'
import Service from './Components/pages/Service'
import Packages from './Components/pages/TourPackages'
import About from './Components/pages/About'
import Footer from './Components/shared/Footer'
import Dubai from './Components/pages/packages/Dubai'
import Hajj from './Components/pages/packages/Hajj'
import Santorini from './Components/pages/packages/Santorini'
import Seychelles from './Components/pages/packages/Seychelles'
import Book from './Components/shared/BookNow'
import ChatUs from './Components/shared/ChatUs'
import DubaiResidency from './Components/pages/packages/DubaiResidency';
import Canada from './Components/pages/packages/CanadaVisa';
import Brazil from './Components/pages/packages/Brazil';
import CanadaStudy from './Components/pages/packages/CanadaStudy';
import Zanzibar from './Components/pages/packages/Zanzibar';



function App() {
  return (
      <Router>
        <ChatUs />
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' component={Contact} />         
            <Route path='/service' component={Service} />   
            <Route path='/package' component={Packages} /> 
            <Route path='/about' component={About} />  
            <Route path='/dubai' component={Dubai} />
            <Route path='/hajj' component={Hajj} />
            <Route path='/booknow' component={Book} />
            <Route path='/santorini' component={Santorini} />
            <Route path='/seychelles' component={Seychelles} />
            <Route path='/dubai-2-years' component={DubaiResidency} />
            <Route path='/canada-visa' component={Canada} />
            <Route path='/brazil-carnival' component={Brazil} />
            <Route path='/canada-study' component={CanadaStudy} />
            <Route path='/zanzibar' component={Zanzibar} />
          </Switch>
        <Footer/>
      </Router>        
  );
}

export default App;

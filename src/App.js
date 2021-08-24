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
          </Switch>
        <Footer/>
      </Router>        
  );
}

export default App;

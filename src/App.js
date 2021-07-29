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


function App() {
  return (
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' component={Contact} />         
            <Route path='/service' component={Service} />   
            <Route path='/package' component={Packages} /> 
            <Route path='/about' component={About} />                               
          </Switch>
        <Footer/>
      </Router>        
  );
}

export default App;

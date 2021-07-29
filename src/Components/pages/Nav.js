import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import Services from './Services'


export default function Nav() {
    return (
        <Router>
            <div>
               <nav>
                   <ul>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                       <li>
                           <Link to="/services">Services</Link>
                       </li>
                       <li>
                           <Link to="/contact">Contact</Link>
                       </li>
                   </ul>
                </nav> 
                <Switch>
                    <Route path="/" component={Home}>
                        <Home />
                    </Route>
                    <Route path="/services" component={Services}>
                        <Services />
                    </Route>
                    <Route path="/contact" component={Contact}>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

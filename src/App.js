import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import './fonts.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JackNav from './navv';
import Shop from './shop';
import Home from './home'
import Item from './item'
import Contact from './contact';
import Home2 from './newHome';

function App() {

  return (
    
    <Router>
      
    <div>
      <JackNav/>
      <div className='container-fluid' >
        <Switch>
            <Route exact path='/'>
                <Home2/>
            </Route>
            <Route exact path='/shop'>
                <Shop/>
            </Route>
            <Route path='/gallery'>
                <h3>gallery</h3>
            </Route>
            <Route path='/contactUs'>
                <Contact/>
            </Route>
            <Route path="/shop/:name"  > <Item/> </Route>
        </Switch>
      </div>
    </div>
    
   </Router>
  );
}

export default App;

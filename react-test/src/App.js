import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import SearchItem from './pages/SearchItem';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Profile from './pages/Profile'
class  App extends React.Component{

    render(){
      return (
        <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={SearchResults} />
            <Route path="/SearchItem" component={SearchItem} />
            <Route path="/WishList" component={WishList} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Profile" component={Profile} />
            
          </Switch>
          </div>
        </Router>
      );
    }

}

export default App;

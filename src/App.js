import React, { useEffect } from 'react';
import Blog from './Blog';
import Header from './Header';
import M from 'materialize-css';
import Post from './Post';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  useEffect(() => {
    M.AutoInit();
    console.log(M)
  })
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/" component={Blog} />
          <Route exact path="/blog/:id" component={Post} />
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

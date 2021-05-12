import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Login from './containers/Login'
import NotFound from './containers/NotFound'
import Signup from './containers/Register'
import Home from './containers/Home'

import { Provider } from 'react-redux'
import store from './store'

import Layout from '.hocs/Layout'

function App() {
  return (
    <div id="App">
      <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                </Switch>
            </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

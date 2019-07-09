import React from 'react';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience.js';
// import CoverPage from './components/CoverPage';
import { Switch, Route } from 'react-router-dom';
import './elements/App.css';

const App = () => {
    return (
        <Switch>
            {/* <Route exact path='/' component={CoverPage}/> */}
            <Route exact path='/'           component={ Portfolio }/>
            <Route       path='/experience' component={ Experience }/>
        </Switch>
    );
};

export default App;
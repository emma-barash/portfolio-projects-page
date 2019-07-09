import React from 'react';
import Portfolio from './components/Portfolio';
// import CoverPage from './components/CoverPage';
import { Switch, Route } from 'react-router-dom';
import './elements/App.css';

const App = () => {
    return (
        <Switch>
            {/* <Route exact path='/' component={CoverPage}/> */}
            <Route exact path='/main' component={Portfolio}/>
        </Switch>
    );
};

export default App;
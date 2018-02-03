import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Game from './Components/Game';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/game" component={Game} />  
    </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();

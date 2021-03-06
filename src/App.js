import React, { Component } from 'react';
import './App.css';
import SearchHeader from './components/searchheader';
import Search from './components/search';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'
import Tweets from './components/tweets';

//add routing configuration
class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <HashRouter>
                        <div>
                            <SearchHeader/>
                            <Search/>
                            <Route path="/tweets" render={()=> <Tweets/>}/>
                        </div>
                    </HashRouter>
                </Provider>
            </div>
        );
    }
}

export default App;

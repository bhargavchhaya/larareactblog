import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../layouts/NavbarComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Post from '../pages/Post';

function App() {
    return (
        <>
        <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact-us' component={ContactUs} />
            {/* <Route path="/:slug" component={Post} /> */}
            </Switch>
        </div>
        </BrowserRouter>
        </>
    );
}
export default App;

if (document.getElementById('mainapp')) {
    ReactDOM.render(<App />, document.getElementById('mainapp'));
}
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
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path="/:slug" component={Post} />
        </div>
        </BrowserRouter>
        </>
    );
}
export default App;

if (document.getElementById('mainapp')) {
    ReactDOM.render(<App />, document.getElementById('mainapp'));
}
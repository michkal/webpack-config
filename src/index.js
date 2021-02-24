import React, {Component} from "react"
import ReactDOM from "react-dom"
import {
    Link,
    Route,
    HashRouter,
    Switch,
    NavLink
} from 'react-router-dom';


import {Main} from "./layouts/main";
import {About} from "./layouts/about";
import {Services} from "./layouts/services";
import {Cars} from "./layouts/cars";
import {Contact} from "./layouts/contact";
import {FourOhFour} from "./layouts/notFound";

import {Header} from "./components/header";
import {Footer} from "./components/footer";

class App extends Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route exact path='/' component={About}/>
                            <Route exact path='/services' component={Services}/>
                            <Route exact path='/cars' component={Cars}/>
                            <Route exact path='/contact' component={Contact}/>
                            <Route path='/:view' component={FourOhFour}/>
                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App/>, document.getElementById("app"))
})
import {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Info from "./Pages/Info"

const App = () => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(true);
    };
    const closeSidebar = () => {
        setsidebarOpen(false);
    };
    return (
        <>
            <div className="page_container">
                <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>

                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/info" component={Info}/>

                    </Switch>
                </Router>

            </div>
        </>
    );
};

export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./Components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";

function App() {
  return (
    <div className="App">
     
      <Header/>
      <Router>
      <Switch>
           
          <Route to="/all" exact component={HomeScreen}/>
        <Route path='/collections/products' exact component={ShopScreen}/>\
          </Switch>
      </Router>

      {/* <main className="container">
        <Router>
          <Switch>
            <Route to="/all" exact component={HomeScreen}/>
          </Switch>
        </Router>
      </main>*/}
    </div> 
  );
}

export default App;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./Components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";

function App() {
  return (
    <div className="App">
     
      <Header/>
      <main className="container">
        <Router>
          <Switch>
            <Route to="/all" exact component={HomeScreen}/>
             <Route path='/collections/products' exact component={ShopScreen}/>
          </Switch>
        </Router>
      </main>
    </div> 
  );
}

export default App;

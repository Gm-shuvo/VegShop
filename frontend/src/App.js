// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./Components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";

function App() {
  return (
    <div className="App">
      <p>dihan abir</p>
      <Header/>
      <main className="container">
        <Router>
          <Route to="/" exact component={HomeScreen}/>
          <Route to='/all_products' exact component= {ShopScreen}/>
        </Router>
      </main>
    </div>
  );
}

export default App;

import "./App.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header.component";
import ProdutcDetails from "./components/ProductDetails/ProductDetails.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/apple/:id" component={ProdutcDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

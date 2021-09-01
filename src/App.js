import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Wedding from "./pages/wedding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fml">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wedding" component={Wedding} />
          </Switch>
          <Footer />
        </div>

        <Background />
      </div>
    </Router>
  );
}

export default App;

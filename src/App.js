import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import Searchbar from "./components/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Searchbar />
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon/:details" component={PokemonDetails} />
        </Switch>
      </Router>
    </>
  );
}
export default App;

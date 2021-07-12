import './App.css';
import { BlogProvider } from './components/Context/BlogContext';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import DetailsBlog from './components/DetailsBlog/DetailsBlog';
function App() {
  return (
    <BlogProvider>
      <Router>
        <Navbar />

        {/* <Link></Link> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs/:id">
            <DetailsBlog />
          </Route>
        </Switch>

      </Router>

    </BlogProvider>
  );
}

export default App;

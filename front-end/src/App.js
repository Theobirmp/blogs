import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import BlogsPage from "./pages/BlogsPage"
import About from "./pages/About"
import Nav from "./components/Nav"
import SoloBlog from "./pages/SoloBlog"
import Favourites from "./pages/Favourites"
import {BlogProvider} from "./stateManagement/BlogContext"
import {FilterTopicProvider} from './stateManagement/FilterTopicContext';
import Footer from "./components/Footer"
import CreateBlog from './pages/CreateBlog';

function App() {
  console.log('this is working')
  return (
    <BlogProvider>
      <FilterTopicProvider>
    <Router>
      <Nav/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/blogs'>
        <BlogsPage />
        </Route>
      <Route exact path='/createBlog'>
        <CreateBlog/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/blogs/:name'>
        <SoloBlog/>
        </Route>
      <Route exact path='/favourites'>
        <Favourites/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
    </FilterTopicProvider>
    </BlogProvider>
  );
}

export default App;

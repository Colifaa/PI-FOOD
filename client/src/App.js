// import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"  // Switch para setear las rutas
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail.jsx';
import RecipeCreate from './Components/RecipeCreate/RecipeCreate.jsx'

function App() {
  return (

    <BrowserRouter> 
    <div className="App">
    <Switch>
    <Route exact path='/'component={LandingPage}/>
    <Route exact path='/home'component={Home}/>
    <Route exact path={`/home/:id`} component={Detail}/>
    <Route exact path={`/createrecipe`} component={RecipeCreate}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

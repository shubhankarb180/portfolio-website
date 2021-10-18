/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ResourcesPage from './pages/ResourcesPage';
import NavBar from './components/NavBar/NavBar.component';
import { Switch , Route } from 'react-router-dom';

const App = () => {
  return(
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/resources' component={ResourcesPage} />
      </Switch>
    </>
  );
}

export default App;

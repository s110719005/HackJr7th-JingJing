import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StoreProvider } from "./store";
import Home from './pages/Home';
import SignInUp from './pages/SignInUp';
import Account from './pages/Account';
import Product from './pages/Product';
import Donate from './pages/Donate';
import DonateFinish from './pages/DonateFinish';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/SignInUp" component={SignInUp}/>
          <Route exact path="/Product" component={Product}/>
          <Route exact path="/Donate" component={Donate}/>
          <Route exact path="/FinishDonate" component={DonateFinish}/>
          <Route exact path="/Product/:pageName" component={Product} />

        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

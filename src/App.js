import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StoreProvider } from "./store";
import Home from './pages/Home';
import SignInUp from './pages/SignInUp';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignInUp" component={SignInUp}/>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

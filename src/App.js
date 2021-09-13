import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from './components/Profile/Profile';
import Messeges from './components/Messeges/Messeges';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Switch>
          <div className="Router">
            <Route path="/profile" render={() => <Profile postsText={props.appState.postsText} />}/>
            <Route path="/messeges" render={() => <Messeges chatsName={props.appState.chatsName} chatMesseger={props.appState.chatMesseger}/>}/>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
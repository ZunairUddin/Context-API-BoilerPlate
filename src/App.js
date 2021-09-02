import './App.css';
import Users from './Components/Users';
import Nav from './Components/Nav';
import Add from './Components/Add';
import { UsersProvider } from './Context/Context';

function App() {

  return (
    <UsersProvider>   

    <div className="App">

    <Nav/>
    <Users/>
    <Add/>
    
    </div>
    </UsersProvider>
  );
}

export default App;

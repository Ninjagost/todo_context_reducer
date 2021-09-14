import './App.css';
import Main from './containers/Main'
import Login from './containers/Login'
 
import UserProvider, { UserConsumer } from './context/UserContext.js'

function App() {
  return (
    <UserProvider>
      <UserConsumer>
        {({user, handleLogin}) =>
          user ? <Main /> : <Login handleLogin={handleLogin} />
        }
      </UserConsumer>
    </UserProvider>
  );
}

export default App;

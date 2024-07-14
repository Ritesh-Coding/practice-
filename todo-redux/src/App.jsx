
import './App.css'
import { Provider } from 'react-redux'
import UserDetails from './components/UserDetails'
import store from './components/store'
function App() {
  

  return (
    <Provider store={store}>      
      <UserDetails />
    </Provider>
  );
}

export default App

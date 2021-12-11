import { useQuery } from '@apollo/client';
import './App.css';
import { Auth } from './components/Auth/Auth';
import { IS_LOGGED_IN } from './queries/User';
import Router from './Route';

const App = () => {
  const {
    data: { IsLoggedIn }
  } = useQuery(IS_LOGGED_IN);

  return(
    <div>
      {IsLoggedIn ? ( <Router /> ) : ( <Auth />) }
    </div>
  );
}

export default App;

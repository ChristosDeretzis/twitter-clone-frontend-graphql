import { useQuery } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Auth } from './containers/Auth/Auth';
import NewTweet from './containers/Tweet/NewTweet/NewTweet';
import { IS_LOGGED_IN } from './queries/User';
import Router from './Route';

const App = () => {
  const {
    data: { IsLoggedIn }
  } = useQuery(IS_LOGGED_IN);

  return(
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      {IsLoggedIn ? ( <Router /> ) : ( <Auth />) }
    </div>
  );
}

export default App;

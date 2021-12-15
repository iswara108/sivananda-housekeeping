import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App/App';
import Login from './Login/Login';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

const history = createBrowserHistory();
const auth = new Auth(history);

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route
          path="/callback"
          element={<PublicRoute component={Callback} />}
        />
        <Route path="/" element={<PrivateRoute component={App} />} />
        <Route path="/dashboard" element={<PrivateRoute component={App} />} />
      </Routes>
    </Router>
  );
};

const PublicRoute = ({ component: Component, ...props }) => {
  return <Component auth={auth} {...props} />;
};

const PrivateRoute = ({ component: Component, ...props }) => {
  return auth.isAuthenticated() ? (
    <Component auth={auth} {...props} />
  ) : (
    <Navigate
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  );
};

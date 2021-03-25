import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Coindetails from "./pages/Coindetails";
import Snackbar from "./components/Snackbar/SnackBar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/rootReducer";
import { alertActions } from "./redux/Alert/alert.action";
import { Socket } from "socket.io-client";





export default function App() {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state: AppState) => state.alert.open);
  function closeSnackbar() {
    dispatch(alertActions.clear());
  }
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/coin">
            <Coindetails />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      {snackbarState && <Snackbar onclick={closeSnackbar} />}
    </>
  );
}

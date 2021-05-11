import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import CoinDetails from "./pages/Coindetails";
import Snackbar from "./components/Snackbar/SnackBar";
import { Layout2 } from "./components/Layout/Layout";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/rootReducer";
import { alertActions } from "./redux/Alert/alert.action";
import { Socket } from "socket.io-client";
import Wallet from "./pages/Wallet";

export default function App() {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state: AppState) => state.alert.open);
  function closeSnackbar() {
    dispatch(alertActions.clear());
  }
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Layout2>
            <PrivateRoute path="/coin/:coinname" component={CoinDetails} />
            <PrivateRoute path="/wallet" component={Wallet} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </Layout2>
          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
      {snackbarState && <Snackbar onclick={closeSnackbar} />}
    </>
  );
}

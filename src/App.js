import "./App.css";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ROUTES from "./routes/index";
import HomePage from "./containers/HomeTemplate/HomePage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import DetailMoviePage from "./containers/HomeTemplate/DetailMoviePage";
import LoginPage from "./containers/HomeTemplate/Login";
import RegisterPage from "./containers/HomeTemplate/Register";
import BookingPage from "./containers/HomeTemplate/BookingTicket";
import Navbar from "./containers/HomeTemplate/_components/Navbar";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.movieList} component={ListMoviePage} />
        <Route path={`${ROUTES.movieDetail}/:id`} component={DetailMoviePage} />
        <Route path={ROUTES.login} component={LoginPage} />
        <Route path={ROUTES.register} component={RegisterPage} />
        <Route path={ROUTES.bookingTicket} component={BookingPage} />
        <Route path="" component={PageNotFound} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

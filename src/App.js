import "./App.css";
import React, { useEffect } from "react";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import ROUTES from "./routes/index";
import HomePage from "./containers/HomeTemplate/HomePage";
import DetailMoviePage from "./containers/HomeTemplate/DetailMoviePage";
import LoginPage from "./containers/HomeTemplate/Login";
import RegisterPage from "./containers/HomeTemplate/Register";
import BookingPage from "./containers/HomeTemplate/BookingTicket";
import Navbar from "./containers/HomeTemplate/_components/Navbar";
import Footer from "./containers/HomeTemplate/_components/Footer";
import { ToastContainer } from "react-toastify";
import DashboardPage from "./containers/AdminTemplate/DashboardPage";
import AddUsers from "./containers/AdminTemplate/DashboardPage/AddUsers/AddUsers";
import EditUser from "./containers/AdminTemplate/DashboardPage/EditUser/EditUser";
import FilmsPage from "./containers/AdminTemplate/Films";
import AddFilm from "./containers/AdminTemplate/Films/AddFilms.js/AddFilm";
import Edit from "./containers/AdminTemplate/Films/Edit/Edit";
import ShowTime from "./containers/AdminTemplate/Showtime";
import AdminNavbar from "./containers/AdminTemplate/_components/AdminNavbar/AdminNavbar";


function HomeTemplate() {
  const { path } = useRouteMatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path={`${path}${ROUTES.movieDetail}/:id`}
          component={DetailMoviePage}
        />
        <Route path={`${path}${ROUTES.login}`} component={LoginPage} />
        <Route path={`${path}${ROUTES.register}`} component={RegisterPage} />
        <Route
          path={`${path}${ROUTES.bookingTicket}/:id`}
          component={BookingPage}
        />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}
function AdminTemplate() {
  const { path } = useRouteMatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <AdminNavbar />
      <Switch>
        <Route
          path={`${path}${ROUTES.addUser}`}
          component={AddUsers}
        />
        <Route
          path={`${path}${ROUTES.editUser}/:taiKhoan`}
          component={EditUser}
        />
        <Route
          path={`${path}${ROUTES.films}`}
          component={FilmsPage}
        />
        <Route
          path={`${path}${ROUTES.addFilm}`}
          component={AddFilm}
        />
        <Route
          path={`${path}${ROUTES.editFilm}/:id`}
          component={Edit}
        />
        <Route path={`${path}${ROUTES.showTime}/:id/:tenPhim`} component={ShowTime} />
        <Route path="/" component={DashboardPage} />
      </Switch>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.home}>
          <HomeTemplate />
        </Route>
        <Route path={ROUTES.dashboard}>
          <AdminTemplate />
        </Route>
        <Route path="" component={PageNotFound} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

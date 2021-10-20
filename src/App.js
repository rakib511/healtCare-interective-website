
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Doctors from './pages/Doctors/Doctors';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';

import Home from './pages/Home/Home';
import Contuct from './pages/Contuct/Contuct';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/services/Services/Services';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/booking/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <Route path="/service">
                <Services></Services>
              </Route>
              <Route path="/doctor">
                <Doctors></Doctors>
              </Route>
              <Route path="/contuct">
                <Contuct></Contuct>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

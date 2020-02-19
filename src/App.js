import React from 'react';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';
import SellProduct from './components/SellProduct';
import SignInContainer from './containers/SignInContainer';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from 'styled-components';
import AuthRoute from './modules/AuthRoute';
import HeaderContainer from './containers/HeaderContainer';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import CategoryResultContainer from './containers/CategoryResultContainer';
import StoreContainer from './containers/StoreContainer';

const customConf = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
};

const App = () => {
  return (
    <ThemeProvider theme={{ awesomegrid: customConf }}>
      <HeaderContainer />
      <SideBar />
      <Switch>
        <AuthRoute path="/" exact component={Main} />
        <Route path="/signin" component={SignInContainer} />
        <Route path="/signup" component={SignUp} />
        <AuthRoute path="/store/:id" component={StoreContainer} />
        <AuthRoute path="/search" component={SearchResult} />
        <AuthRoute
          path="/categories/:category"
          component={CategoryResultContainer}
        />
        <AuthRoute path="/products/:id" component={ProductDetail} />
        <AuthRoute path="/sell" component={SellProduct} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthRoute from './lib/AuthRoute';

import Footer from './components/Footer';
import SideBar from './components/chat/SideBar';

import HeaderContainer from './containers/HeaderContainer';
import CategoryResultContainer from './containers/CategoryResultContainer';
import StoreContainer from './containers/StoreContainer';
import SearchResultContainer from './containers/SearchResultContainer';
import ProductsDetailContainer from './containers/ProductsDetailContainer';
import SigninContainer from './containers/auth/SigninContainer';
import SignupContainer from './containers/auth/SignupContainer';
import SellContainer from './containers/SellContainer';
import MainContainer from './containers/MainContainer';
import ErrorMessage from './components/common/ErrorMessage';

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
        <Route path="/signin" component={SigninContainer} />
        <Route path="/signup" component={SignupContainer} />
        <AuthRoute
          path="/products/:itemId"
          component={ProductsDetailContainer}
        />
        <AuthRoute path="/store/:id" component={StoreContainer} />
        <AuthRoute path="/search" component={SearchResultContainer} />
        <AuthRoute
          path="/categories/:category"
          component={CategoryResultContainer}
        />
        <AuthRoute path="/sell" component={SellContainer} />
        <AuthRoute path="/" exact component={MainContainer} />
        <Route
          render={({ location }) => (
            <ErrorMessage notFound={location.pathname} />
          )}
        />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

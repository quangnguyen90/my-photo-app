import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limt: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();
  }, []);

  // Hanlde firebase auth changed
  useEffect(() => {
    // ComponentDidMount
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // users logs out, handle something here
        console.log('User is not logged in');
        return;
      }

      console.log('logged in user', user.displayName);
      const token = await user.getIdToken();
      console.log('logged in user token', token);
    });

    // ComponentWillUnmount
    return () => unregisterAuthObserver();
  }, [])

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

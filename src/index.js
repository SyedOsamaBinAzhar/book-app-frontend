//importing libraries
import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createStore } from 'redux';
import allReducers from "../src/reducers";
import App from './App';
import BooksPage from './pages/books/booksPage';

//importing pages
import SignupPage from "./pages/signup/signupPage";
import SingleBook from './pages/singleBook/singleBook';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById("root");
render(
  <Provider store = {store}>
    <App/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupPage/>} />
      <Route path="/books" element={<BooksPage/>} exact/>
      <Route path="/book/:id" element={<SingleBook/>} />
    </Routes>
  </BrowserRouter>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

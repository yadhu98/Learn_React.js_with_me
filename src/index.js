import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
function App() {
  return(
    <div>
    <Header/>
    <MainComponent/>
    <Footer/>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

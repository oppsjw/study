import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//chapter_03
/*
import Library from './chapter_03/Library';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//chapter_04
/* 
import Clock from './chapter_04/Clock';
setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
*/

//chapter_05
/*
import CommentList from './chapter_05/CommentList';
ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//chapter_06
import NotificationList from './chapter_06/NotificationList';
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

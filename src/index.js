import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/database';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Storage from './pages/Storage/Storage';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './pages/dashboard/dashboardTheme';

/* ReactDOM.render(
  
); */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={dashboardTheme}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
</ThemeProvider>
    /*document.getElementById('root')*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Sentry from "@sentry/react";

import { App } from './components/app/App';
import { app_configuration } from './configuration';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import './index.scss';

const SENTRY_DSN = app_configuration.SENTRY_DSN;

Sentry.init({
    dsn: SENTRY_DSN
});

Sentry.showReportDialog();

const APP = (
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>
);

ReactDOM.render(APP, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { config } from './firebase';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = initializeApp(config);
const analytics = getAnalytics(app);
logEvent(analytics, 'testing')

Sentry.init({
  dsn: "https://7c12400101284d6b9c5cafc707c30697@o1361726.ingest.sentry.io/6677636",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

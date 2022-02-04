import i18next from "i18next";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import HttpApi from "i18next-http-backend";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru", "uz"],
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Releases from "./routes/releases";
import reportWebVitals from "./reportWebVitals";
import Release from "./routes/release";
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="releases" element={<Releases />}></Route>
              <Route path="releases/:releaseNumber" element={<Release />} />
              <Route
                path="/*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
